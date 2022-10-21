let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");
let kelvin = document.querySelector("#kelvin");
let rankine = document.querySelector("#rankine");

let inputs = [celsius, fahrenheit, kelvin, rankine];

inputs.forEach((input) => {
    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);

        switch (e.target.name) {
            case "celsius":
                fahrenheit.value = parseFloat(value * 1.8 + 32).toFixed(2);
                kelvin.value = parseFloat(value + 273.15).toFixed(2);
                rankine.value = parseFloat((value + 273.15) * 1.8).toFixed(2);
                break;

            case "fahrenheit":
                celsius.value = parseFloat((value - 32) / 1.8).toFixed(2);
                kelvin.value = parseFloat(value - 32 * 1.8 + 273).toFixed(2);
                rankine.value = parseFloat(value + 459.67).toFixed(2);
                break;

            case "kelvin":
                celsius.value = parseFloat(value - 273.15).toFixed(2);
                fahrenheit.value = parseFloat((value - 273.15) * 1.8 + 32).toFixed(2);
                rankine.value = parseFloat(value * 1.8).toFixed(2);
                break;

            case "rankine":
                celsius.value = parseFloat(value / 1.8 - 273.15).toFixed(2);
                fahrenheit.value = parseFloat(value - 459.67).toFixed(2);
                kelvin.value = parseFloat(value / 1.8).toFixed(2);
                break;
        }
    });
});
