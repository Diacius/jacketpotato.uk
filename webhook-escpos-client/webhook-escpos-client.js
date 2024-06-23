// Converts an ArrayBuffer directly to base64, without any intermediate 'convert to string then
// use window.btoa' step. According to my tests, this appears to be a faster approach:
// http://jsperf.com/encoding-xhr-image-data/5
// https://gist.github.com/jonleighton/958841
/*
MIT LICENSE
Copyright 2011 Jon Leighton
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

function base64ArrayBuffer(arrayBuffer) {
    var base64    = ''
    var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  
    var bytes         = new Uint8Array(arrayBuffer)
    var byteLength    = bytes.byteLength
    var byteRemainder = byteLength % 3
    var mainLength    = byteLength - byteRemainder
  
    var a, b, c, d
    var chunk
  
    // Main loop deals with bytes in chunks of 3
    for (var i = 0; i < mainLength; i = i + 3) {
      // Combine the three bytes into a single integer
      chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]
  
      // Use bitmasks to extract 6-bit segments from the triplet
      a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
      b = (chunk & 258048)   >> 12 // 258048   = (2^6 - 1) << 12
      c = (chunk & 4032)     >>  6 // 4032     = (2^6 - 1) << 6
      d = chunk & 63               // 63       = 2^6 - 1
  
      // Convert the raw binary segments to the appropriate ASCII encoding
      base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
    }
  
    // Deal with the remaining bytes and padding
    if (byteRemainder == 1) {
      chunk = bytes[mainLength]
  
      a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2
  
      // Set the 4 least significant bits to zero
      b = (chunk & 3)   << 4 // 3   = 2^2 - 1
  
      base64 += encodings[a] + encodings[b] + '=='
    } else if (byteRemainder == 2) {
      chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]
  
      a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
      b = (chunk & 1008)  >>  4 // 1008  = (2^6 - 1) << 4
  
      // Set the 2 least significant bits to zero
      c = (chunk & 15)    <<  2 // 15    = 2^4 - 1
  
      base64 += encodings[a] + encodings[b] + encodings[c] + '='
    }
    return base64
}
const form = document.querySelector("#webhook-escpos-client")
async function send() {
    var data = {
        "multipart": true,
        "api_version": 1,
        "parts": [],
    };
    let formData = new FormData(form);
    var url = formData.get("url");
    var underlined = false;
    var inverted = false;
    var imgData = "";
    if (formData.get("underlined") == "on") {
        underlined = true;
    }
    if (formData.get("inverted") == "on") {
        inverted = true;
    }
    if (formData.get("img") instanceof(File)) {
        img = formData.get("img");
        imgData = await img.arrayBuffer();
        if (imgData.byteLength !== 0) {
            imgDataB64 = base64ArrayBuffer(imgData)
            console.log(imgDataB64);}

    }
    if (formData.get("barcode") !== "") {
        barcode = formData.get("barcode")
        barcode_type = formData.get("barcode_type")
        data["parts"].push("barcode1")
        data["barcode1"] = {"type": "barcode", "barcode-type": barcode_type, "code": barcode}
    }
    var imgBuffer = await formData.get("img").arrayBuffer()
    // Create data object based on which fields have been filled in
    if (imgBuffer.byteLength !== 0) {
        data["parts"].push("img1")
        var imgDataB64 = base64ArrayBuffer(imgBuffer);
        data["img1"] = {"type": "image", "imagedata": imgDataB64}
    }
    if (formData.get("text1") !== "") {
        data["parts"].push("text1")
        data["text1"] = {"type": "text", "formatting": true, "text": formData.get("text1"), "underlined": underlined, "inverted": inverted}
    }
    console.log(url);
    console.log(data);
    //Actually send
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(JSON.stringify(data));
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            outputElement = document.querySelector("#output")
            outputElement.value = xhr.response;
        }
      };
    xhr.close();
}
form.addEventListener("submit", (event) => {
    // prevent a normal form submit and calculate the tickets needed
    event.preventDefault();
    send();
  });