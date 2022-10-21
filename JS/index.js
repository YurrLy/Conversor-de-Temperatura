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
                fahrenheit.value = value * 1.8 + 32;
                kelvin.value = value + 273.15;
                rankine.value = (value + 273.15) * 1.8;
                break;

            case "fahrenheit":
                celsius.value = (value - 32) / 1.8;
                kelvin.value = value - 32 * 1.8 + 273;
                rankine.value = value + 459.67;
                break;

            case "kelvin":
                celsius.value = value - 273.15;
                fahrenheit.value = (value - 273.15) * 1.8 + 32;
                rankine.value = value * 1.8;
                break;

            case "rankine":
                celsius.value = value / 1.8 - 273.15;
                fahrenheit.value = value - 459.67;
                kelvin.value = value / 1.8;
                break;
        }
    });
});
