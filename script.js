function calculate(expression) {
  const sanitized = expression
    .replace(/÷/g, '/')
    .replace(/×/g, '*')
    .replace(/−/g, '-');
  // eval is used for simplicity as the input is controlled
  return eval(sanitized);
}

if (typeof module !== 'undefined') {
  module.exports = { calculate };
}

let display;
let buttons;
let resetDisplay = false;

if (typeof document !== 'undefined') {
  display = document.getElementById('display');
  buttons = document.querySelectorAll('.buttons button');
}

if (buttons) {
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;

    if (value === '=') {
      try {
        const result = calculate(display.textContent);
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
}
