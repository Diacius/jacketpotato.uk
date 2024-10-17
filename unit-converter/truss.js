onelizztruss = 49
// I'm calling this function trussonomics because it's funny
function trussonomics() {
    a = document.querySelector("#years")
    out = document.querySelector("#output")
    days = a.value * 365
    unrounded_trusses = days / onelizztruss
    // From https://stackoverflow.com/questions/11832914
    // Apparently the EPSILON part helps accuracy and I can't be bothered to find out why, JS is just weird sometimes.
    trusses = Math.round((unrounded_trusses + Number.EPSILON) * 100) / 100
    out.innerHTML = "You have been alive for: " + trusses + " 'Liz Trusses'"
}