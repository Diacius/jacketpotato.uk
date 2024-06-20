let months = ['January', 'February', 'March', 'April', 'June','July', 'August']
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' , 'Saturday', 'Sunday']
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
    let timeElement = document.querySelector('#time');
    timeElement.innerHTML = hour+':'+minute+':'+second

}
async function dateUpdate() {
    let d = new Date();
    let data = d.getDate();
    if (data.toString().slice(-1) == '1') {
        let dateString = data + "st"
    }
    if (data.toString().slice(-1) == '2') {
        let dateString = data + "nd"
    }
    if (data.toString().slice(-1) == '3') {
        let dateString = data + "rd"
    }
    if (data.toString().slice(-1) != '1' & data.toString().slice(-1) != '2' & data.toString().slice(-1) != '3') {
        let dateString = data + "th"
    }
    else {
        let dateString = "0"
    }
    document.querySelector('#date').innerHTML = "It's " + days[d.getDay() -1] + " the " + d.getDate()+"th" + " of " + months[d.getMonth()] + " " + d.getFullYear()
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