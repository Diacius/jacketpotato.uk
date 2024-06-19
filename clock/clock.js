async function update() {
    const d = new Date();
    let time = d.getTime();
    let hour = d.getHours();
    if (hour < 10) {
        hour = '0' + hour
    }
    let minute = d.getMinutes();
    if (minute < 10) {
        minute = '0' + minute
    }
    let second = d.getSeconds();
    if (second < 10) {
        second = '0' + second
    }
    let hourElement = document.querySelector('#hours');
    let minuteElement = document.querySelector('#minutes');
    let secondsElement = document.querySelector('#seconds');
    hourElement.innerHTML = hour;
    minuteElement.innerHTML = minute;
    secondsElement.innerHTML = second;
}
async function delay(ms) {
    // return await for better async stack trace support in case of errors.
    return await new Promise(resolve => setTimeout(resolve, ms));
}
async function continuouslyUpdate(){
    var i = 0;
    while (i < Infinity) {
        await update();
        await delay(1000);
        i++;
    }
    
}
async function invert() {
    body = document.querySelector('main')
    if (body.style['background-color'] === 'rgb(0, 0, 0)') {
        body.style = 'background-color: #fff; color: #000;'
    }
    else {
        body.style = 'background-color: #000; color: #fff;'
    }
    


}