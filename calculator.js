function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Replace exponentiation operator
        const expression = display.value.replace(/\*\*/g, '^');
        // Use eval to compute the result
        const result = eval(expression.replace(/\^/g, '**'));
        display.value = result;
        if(result===Infinity)
            {
                throw(error);
            }
    } catch (error) {
        display.value = 'Error';
    }
}