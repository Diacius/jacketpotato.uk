// Length
in_units = {
    "inch" : {"metric" : "metre", "conversion_multiplier": "39.37"}
}
function updateLength() {
    inputLength = document.querySelector("#length_in").value;
    inputUnit = document.querySelector("#length_in_unit").value;
    outputLength = document.querySelector("#length_out");
    outputLength.value = inputLength * in_units[inputUnit].conversion_multiplier
    
}