const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function designifyCheck() {
    if (urlParams.get('designify')) {
        document.querySelector('#csslinker').innerHTML = '<link id="csslinker" rel="stylesheet" href="designify.css">';
    }
}