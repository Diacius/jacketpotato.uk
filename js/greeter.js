greetings = ["hi", "hiya", "hello", "guten tag", "hallo", "bonjour"];
alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
function genGreeting() {
    randIndex = Math.abs(Math.round(Math.random()*greetings.length)%greetings.length);
    randGreeting = greetings[randIndex];
    randGreetingArray = randGreeting.split('');
    
}
awai