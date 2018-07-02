const Calculator = require('../src/js/calculator.js');

const calc = new Calculator([
  { token: '+', precedence: '1', operation: (a,b) => { return a + b; } },
  { token: '-', precedence: '1', operation: (a,b) => { return a - b; } },
  { token: '/', precedence: '2', operation: (a,b) => { return a / b; } },
  { token: '*', precedence: '2', operation: (a,b) => { return a * b; } },
]);
