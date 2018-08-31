const jest = require('jest');
const Calculator = require('../src/js/calculator-engine');

describe('#Calculator', function () {
  describe('#constructor()', function () {
  });

  describe('#getToken()', function () {
  });

  describe('#getExpression()', function () {
  });

  describe('#getValue()', function () {
  });

  describe('#calculate()', function () {
  });

  describe('#clear()', function () {
    let calc = new Calculator(['+', '-', '*', '/', '^']);
    calc.append('12');
    calc.append('+');
    calc.append('5');

    test('resets the values of the calculator', function () {
      calc.clear();
      // check inner properties
      expect(calc.token).toBe('');
      expect(calc.value).toBe('0');
      expect(calc.expression).toBe('');
      // check values
      expect(calc.getValue()).toBe('0');
      expect(calc.getToken()).toBe('0');
      expect(calc.getExpression()).toBe('0');
    });
  });

  describe('#changeSign()', function () {
    test('sign changes when the current token is a number', function () {
      const calc = new Calculator(['+','-','*','/']);
    });

    test('sign changes when the current token is the last value', function () {
    });

    test('nothing happens when the current token is not a number', function () {
    });
  });

  describe('#append()', function () {
  });
});
