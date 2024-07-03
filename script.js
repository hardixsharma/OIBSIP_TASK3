function convertTemperature() {
    const tempInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');
    
    if (isNaN(tempInput)) {
        resultDiv.innerHTML = 'Please enter a valid number';
        return;
    }

    const temp = parseFloat(tempInput);
    let convertedTemp, convertedUnit;

    if (unit === 'celsius') {
        convertedTemp = (temp * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
        let kelvinTemp = temp + 273.15;
        resultDiv.innerHTML = `${temp}° Celsius is ${convertedTemp.toFixed(2)}° Fahrenheit and ${kelvinTemp.toFixed(2)} Kelvin`;
    } else if (unit === 'fahrenheit') {
        convertedTemp = (temp - 32) * 5/9;
        convertedUnit = 'Celsius';
        let kelvinTemp = convertedTemp + 273.15;
        resultDiv.innerHTML = `${temp}° Fahrenheit is ${convertedTemp.toFixed(2)}° Celsius and ${kelvinTemp.toFixed(2)} Kelvin`;
    } else if (unit === 'kelvin') {
        convertedTemp = temp - 273.15;
        let fahrenheitTemp = (convertedTemp * 9/5) + 32;
        resultDiv.innerHTML = `${temp} Kelvin is ${convertedTemp.toFixed(2)}° Celsius and ${fahrenheitTemp.toFixed(2)}° Fahrenheit`;
    }
}
