// Length
length_in_units = {
    "inch" : {"conversion_multiplier": 39.37},
    "metre": {"conversion_multiplier": 1},
    "foot" : {"conversion_multiplier": 0.30478512648582749161840902163974},
    "yard" : {"conversion_multiplier": 0.9144}
}
length_out_units = {
    "metre": {"conversion_multiplier": 1},
    "inch" : {"conversion_multiplier": 39.370},
    "foot" : {"conversion_multiplier": 3.28084},
    "yard" : {"conversion_multiplier": 1.0936}
}
function updateLength() {
    inputLength = document.querySelector("#length_in").value;
    inputUnit = document.querySelector("#length_in_unit").value;
    outputLength = document.querySelector("#length_out");
    outputUnit = document.querySelector("#length_out_unit").value;
    // Convert to metric
    toMetric = inputLength * length_in_units[inputUnit].conversion_multiplier
    // Convert out of metric
    outValue = toMetric * length_out_units[outputUnit].conversion_multiplier
    outputLength.value = outValue
    
}
function updateTemperatire() {
    inputUnit = document.querySelector("#temp_in_unit").value
    outputUnit = document.querySelector('#temp_out_unit').value
    inputValue = document.querySelector('#temp_in').value
    output = document.querySelector('#temp_out')
    
}