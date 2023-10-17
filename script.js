// Get input elements
const temperatureInput = document.getElementById('temperatureInput');
const resultOutput = document.getElementById('result');
const conversionOptions = document.getElementsByClassName('tab-button');

// Add event listener to the temperature input
temperatureInput.addEventListener('input', performConversion);

// Add event listener to the conversion buttons
for (let button of conversionOptions) {
    button.addEventListener('click', function() {
        toggleActiveButton(button);
        performConversion();
    });
}

// Function to toggle the active button
function toggleActiveButton(clickedButton) {
    for (let button of conversionOptions) {
        button.classList.remove('active');
    }
    clickedButton.classList.add('active');
}

// Function to perform the temperature conversion
function performConversion() {
    const inputValue = parseFloat(temperatureInput.value);
    if (isNaN(inputValue)) {
        resultOutput.value = 'Invalid input';
        return;
    }

    const selectedOption = document.querySelector('.tab-button.active').id;
    let result;

    switch (selectedOption) {
        case 'celsiusToFahrenheit':
            result = (inputValue * 9/5) + 32;
            break;
        case 'fahrenheitToCelsius':
            result = (inputValue - 32) * 5/9;
            break;
        case 'kelvinToCelsius':
            result = inputValue - 273.15;
            break;
        case 'celsiusToKelvin':
            result = inputValue + 273.15;
            break;
        case 'fahrenheitToKelvin':
            result = (inputValue - 32) * 5/9 + 273.15;
            break;
        case 'kelvinToFahrenheit':
            result = (inputValue - 273.15) * 9/5 + 32;
            break;
        default:
            result = 'Invalid option';
    }

    resultOutput.value = result.toFixed(2);
}

// Initialize with the first button as active
toggleActiveButton(conversionOptions[0]);
performConversion();
