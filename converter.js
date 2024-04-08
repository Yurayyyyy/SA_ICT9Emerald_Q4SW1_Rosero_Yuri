// Conversion rate
const pesoToDollarRate = 0.019;

// Function to convert Pesos to Dollar
function convertToDollar(pesos) {
    return pesos * pesoToDollarRate;
}

// Get the query parameter
const pesos = 100;

// Display the conversion result on the page
document.getElementById('resultDollar').innerHTML = convertToDollar(pesos).toFixed(2);
