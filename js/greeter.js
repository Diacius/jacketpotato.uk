async function delay(ms) {
    // return await for better async stack trace support in case of errors.
    return await new Promise(resolve => setTimeout(resolve, ms));
  }
  
greetings = ["hi", "hiya", "hello", "guten tag", "hallo", "buenos dias", "bonjour", "\uC548\uB155\uD558\uC138\uC694", "\u043F\u0440\u0438\u0432\u0456\u0442", "\u4F60\u597D", "\uD83D\uDE01\uD83D\uDC4B"];
alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
function genGreeting() {
    randIndex = Math.abs(Math.round(Math.random()*greetings.length)%greetings.length);
    randGreeting = greetings[randIndex];
    randGreetingArray = randGreeting.split('');
    return randGreetingArray;
}
async function typeGreeting(letters) {
    workingElement = document.querySelector('#textupdater');
    workingElement.innerHTML = '';
    var i = 0;
    /*while (i < letters.length) {
        /*if ((Math.random() * 10) < 1) {
            randomLetter = alphabet[Math.abs(Math.round(Math.random()*alphabet.length))];
            original = workingElement.innerHTML;
            workingElement.innerHTML = workingElement.innerHTML + randomLetter;
            await delay(Math.random() * 200);
            workingElement.innerHTML = original;
            
        }*/
        workingElement.innerHTML = letters.join('');
        await delay(Math.random() * 300);
}
async function continuouslyType(){
    var i = 0;
    while (i < 50) {
        await typeGreeting(genGreeting());
        await delay(1000);
        i++;
    }
    
}
continuouslyType();