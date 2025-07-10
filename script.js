const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
let resetDisplay = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      try {
        const expression = display.textContent
          .replace(/÷/g, '/')
          .replace(/×/g, '*')
          .replace(/−/g, '-');
        const result = eval(expression);
        display.textContent = result;
        resetDisplay = true;
      } catch (e) {
        display.textContent = 'Error';
        resetDisplay = true;
      }
    } else {
      if (resetDisplay && /[0-9.]/.test(value)) {
        display.textContent = value === '.' ? '0.' : value;
        resetDisplay = false;
      } else if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
      } else {
        display.textContent += value;
      }
    }
  });
});
