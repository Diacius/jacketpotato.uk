let months = ['January', 'February', 'March', 'April', 'June','July', 'August']
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday' , 'Saturday', 'Sunday']
async function update() {
    let d = new Date();
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
async function dateUpdate() {
    let d = new Date();
    let data = d.getDate();
    if (data.toString().slice(-1) == '1') {
        document.querySelector('#date').innerHTML = data + "st"
    }
    if (data.toString().slice(-1) == '2') {
        document.querySelector('#date').innerHTML = data + "nd"
    }
    if (data.toString().slice(-1) == '3') {
        document.querySelector('#date').innerHTML = data + "rd"
    }
    if (data.toString().slice(-1) != '1' & data.toString().slice(-1) != '2' & data.toString().slice(-1) != '3') {
        document.querySelector('#date').innerHTML = data + "th"
    }
    document.querySelector('#month').innerHTML = months[d.getMonth()]
    document.querySelector('#year').innerHTML = d.getFullYear();
    document.querySelector('#dayOfWeek').innerHTML = days[d.getDay() -1];
}
async function delay(ms) {
    // return await for better async stack trace support in case of errors.
    return await new Promise(resolve => setTimeout(resolve, ms));
}
async function continuouslyUpdate(){
    var i = 0;
    await update();
    await dateUpdate();
    while (i < Infinity) {
        await update();
        await delay(1000);
        if (i % 10 == 0) {
            await dateUpdate();
        }
        i++;
    }
    
}
async function invert() {
    body = document.querySelector('main');
    if (body.style['background-color'] == 'rgb(0, 0, 0)') {
        body.style = 'background-color: #fff; color: #000;';
    }
    else{
        if (body.style['background-color'] == 'rgb(255, 255, 255)') {
            body.style = 'background-color: #f00; color: #fff;';
        }
        else{
            if (body.style['background-color'] == 'rgb(255, 0, 0)') {
                body.style = 'background-color: #0f0; color: #fff;';}
            else {
                if (body.style['background-color'] == 'rgb(0, 0, 255)'){
                    body.style = 'background-color: #000; color: #fff;';}
                else {body.style = 'background-color: #00f; color: #fff;'};
            }
            }
        }
    }