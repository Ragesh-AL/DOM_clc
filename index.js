
document.addEventListener('DOMContentLoaded', function () {
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';
  
    buttons.forEach((button) => {
      button.addEventListener('click', function () {
        const buttonText = button.textContent;
  
        if (buttonText === 'C') {
          clear();
        } else if (buttonText === '=') {
          calculate();
        } else {
          currentInput += buttonText;
          updateDisplay();
        }
      });
    });
  
    function clear() {
      currentInput = '';
      updateDisplay();
    }
  
    function calculate() {
      try {
        const expression = currentInput.replace('x', '*');
        const resultValue = eval(expression);
        currentInput = resultValue.toString();
        updateDisplay();
      } catch (error) {
        currentInput = 'Error';
        updateDisplay();
      }
    }
  
    function updateDisplay() {
      result.value = currentInput;
    }
});
