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
function updateTemperature() {
    inputUnit = document.querySelector("#temp_in_unit").value
    outputUnit = document.querySelector('#temp_out_unit').value
    inputValue = new Number (document.querySelector('#temp_in').value)
    output = document.querySelector('#temp_out')
    let celciusValue = 0;
    if (inputUnit == "fahrenheit") {
        celciusValue = (inputValue - 32) * (5/9) 
    }
    if (inputUnit == "celcius") {
        celciusValue = inputValue
    }
    if (inputUnit == "kelvin") {
        celciusValue = inputValue - 273.15
    }
    if (inputUnit == "rankine") {
        celciusValue = (inputValue - 491.67) * (5/9)
    }
    
    if (outputUnit == "fahrenheit") {
        output.value = (celciusValue * (9/5)) + 32
    }
    if (outputUnit == "celcius") {
        output.value = celciusValue
    }
    if (outputUnit == "kelvin") {
        output.value = celciusValue + 273.15
    }
    if (outputUnit == "rankine") {
        output.value = celciusValue * (9/5) + 491.67
    }
}
// Conversion into bytes!
data_in_units = {
    "bit": 0.125,
    "byte": 1,
    "kilobit": 125,
    "kilobyte": 1000 
}
// Conversion out of bytes!
data_out_units = {
    "bit": 8,
    "byte": 1,
    "kilobit": 0.000125,
    "kilobyte":  0.001
}
function updateData() {
    inputUnit = document.querySelector("#data_in_unit").value
    outputUnit = document.querySelector('#data_out_unit').value
    inputValue = new Number (document.querySelector('#data_in').value)
    output = document.querySelector('#data_out')
    output.value = inputValue * data_in_units[inputUnit] * data_out_units[outputUnit]
}