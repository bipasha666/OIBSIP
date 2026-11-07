function convertTemperature() {

    let temp = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;

    let celsius, fahrenheit, kelvin;

    const error = document.getElementById("error");

    error.innerHTML = "";

    if (isNaN(temp)) {
        error.innerHTML = "Please enter a valid numeric temperature.";
        clearResults();
        return;
    }

    if (unit === "celsius") {

        if (temp < -273.15) {
            error.innerHTML = "Temperature cannot be below absolute zero (-273.15°C).";
            clearResults();
            return;
        }

        celsius = temp;
        fahrenheit = (temp * 9 / 5) + 32;
        kelvin = temp + 273.15;
    }

    else if (unit === "fahrenheit") {

        if (temp < -459.67) {
            error.innerHTML = "Temperature cannot be below absolute zero (-459.67°F).";
            clearResults();
            return;
        }

        celsius = (temp - 32) * 5 / 9;
        fahrenheit = temp;
        kelvin = celsius + 273.15;
    }

    else if (unit === "kelvin") {

        if (temp < 0) {
            error.innerHTML = "Kelvin temperature cannot be below 0 K.";
            clearResults();
            return;
        }

        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    document.getElementById("celsiusResult").innerHTML =
        celsius.toFixed(2) + " °C";

    document.getElementById("fahrenheitResult").innerHTML =
        fahrenheit.toFixed(2) + " °F";

    document.getElementById("kelvinResult").innerHTML =
        kelvin.toFixed(2) + " K";
}

function clearResults() {

    document.getElementById("celsiusResult").innerHTML = "--";

    document.getElementById("fahrenheitResult").innerHTML = "--";

    document.getElementById("kelvinResult").innerHTML = "--";
}