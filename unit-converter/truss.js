onelizztruss = 49
function trussonomics() {
    a = document.querySelector("#years")
    out = document.querySelector("#output")
    days = a.value * 365
    out.innerHTML = days / onelizztruss
}