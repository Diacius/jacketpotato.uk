const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function designifyCheck() {
    if (urlParams.get('designify')) {
        document.querySelector('#csslinker').outerHTML = '<link id="csslinker" rel="stylesheet" href="/designify.css">';
        document.body.appendChild('<div><button onclick="turnOffDesignify()">Calcuate</button></div>')
    }
}
