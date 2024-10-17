const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function turnOffDesignify() {

    document.querySelector('#csslinker').outerHTML = '<link id="csslinker" rel="stylesheet" href="/style.css">';
    document.querySelector('#designifyButton').innerHTML = '<div id="designifyButton" style="text-align: center;"><button onclick="turnOnDesignify()">Turn ON SUPER AWESOME™ GRAFIC DESIGN™ MODE</button></div>'

}
function turnOnDesignify() {

        document.querySelector('#csslinker').outerHTML = '<link id="csslinker" rel="stylesheet" href="/designify.css">';
        document.querySelector('#designifyButton').innerHTML = '<div id="designifyButton" style="text-align: center;"><button onclick="turnOffDesignify()">Turn OFF SUPER AWESOME™ GRAFIC DESIGN™ MODE</button></div>'
    
}