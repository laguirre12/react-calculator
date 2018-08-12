const math = require('mathjs');

/**
 * A simple four function calculator that uses
 */
class Calculator {
  constructor() {
    this.history = [];
    this.expression = '';
  }

  calculate(expression) {
    return math.eval(expression);
  }

}

module.exports = Calculator;
