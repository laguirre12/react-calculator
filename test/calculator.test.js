const Calculator = require('../src/js/calculator');

describe('#Calculator', () => {
  describe('#constructor()', () => {
    test('construct a calculator with no tokens', () => {
      const calc = new Calculator();
      expect(calc.getValue()).toBe('0');
      expect(calc.getToken()).toBe('0');
      expect(calc.getExpression()).toBe('0');
    });

    test('construct a calculator with the default values', () => {
      const calc = new Calculator();
      expect(calc.getValue()).toBe('0');
      expect(calc.getToken()).toBe('0');
      expect(calc.getExpression()).toBe('0');
    });
  });


  describe('#getOperators()', () => {
    test('get the operators that belong to the calculator', () => {
      const ops = ['+', '-', '*', '/', '^'];
      const calc = new Calculator();
      expect(calc.getOperators()).toEqual(ops);
    });
  });


  describe('#getToken()', () => {
    let calc;
    beforeEach(() => {
      calc = new Calculator();
    });

    test('current token is default value', () => {
      expect(calc.getToken()).toBe('0');
    });

    test('current token is the last computed value', () => {
      calc.append('2');
      calc.append('+');
      calc.append('2');
      calc.calculate();
      expect(calc.getToken()).toBe('4');
    });

    test('current token is an operator', () => {
      calc.append('+');
      expect(calc.getToken()).toBe('+');
    });

    test('current token is an appended number', () => {
      calc.append('2');
      expect(calc.getToken()).toBe('2');
    });
  });


  describe('#getExpression()', () => {
    let calc;
    beforeEach(() => {
      calc = new Calculator();
    });

    test('the expression has the default computed value', () => {
      expect(calc.getExpression()).toBe('0');
    });

    test('the expression has the sequence of appended tokens', () => {
      const tokens = ['1','2','-','5','*','3','-','2'];
      tokens.forEach(token => calc.append(token));
      expect(calc.getExpression()).toBe('12-5*3-2');
    });
  });


  describe('#getValue()', () => {
    let calc;
    beforeEach(() => {
      calc = new Calculator();
    });

    test('default value is set to 0', () => {
      expect(calc.getValue()).toBe('0');
      expect(calc.getToken()).toBe('0');
      expect(calc.getExpression()).toBe('0');
    });

    test('default value is set to 0 after clear()', () => {
      calc.append('2');
      calc.append('+');
      calc.append('1');
      expect(calc.calculate()).toBe('3');
      calc.clear();
      expect(calc.getValue()).toBe('0');
    });

    test('value equals last computed expression', () => {
      calc.append('2');
      calc.append('+');
      calc.append('1');
      expect(calc.getValue()).toBe('0');  // value unchanged until calculate()
      expect(calc.calculate()).toBe('3');
      expect(calc.getValue()).toBe('3');
    });
  });


  describe('#calculate()', () => {
    let calc;
    beforeEach(() => {
      calc = new Calculator();
    });

    test('computes value of expression', () => {
      calc.append('1');
      calc.append('0');
      calc.append('-');
      calc.append('2');
      expect(calc.calculate()).toBe('8');
    });
  });

  describe('#append()', () => {
    let calc;
    beforeEach(() => {
      calc = new Calculator();
    });

    test('append a digit onto the given expression', () => {
      calc.append('2');
      expect(calc.getToken()).toBe('2');
      expect(calc.getExpression()).toBe('2');
    });

    test('append a decimal point to a number', () => {
      calc.append('2');
      calc.append('.');
      expect(calc.getToken()).toBe('2.');
      expect(calc.getExpression()).toBe('2.');
    });

    test('append number after decimal point', () => {
      calc.append('2');
      calc.append('.');
      calc.append('3');
      expect(calc.getToken()).toBe('2.3');
      expect(calc.getExpression()).toBe('2.3');
    });

    test('append a recognized operator', () => {
      calc.append('+');
      expect(calc.getToken()).toBe('+');
      expect(calc.getExpression()).toBe('0+');
    });

    test('append decimal to operator - default to 0.', () => {
      calc.append('3');
      calc.append('+');
      calc.append('.');
      expect(calc.getExpression()).toBe('3+0.');
    });

    test('replace operator by appending a new operator', () => {
      calc.append('2');
      calc.append('-');
      expect(calc.getToken()).toBe('-');
      expect(calc.getExpression()).toBe('2-');
      calc.append('+');
      expect(calc.getToken()).toBe('+');
      expect(calc.getExpression()).toBe('2+');
    });

    test('appending multiple decimal points does nothing', () => {
      calc.append('1');
      calc.append('.');
      calc.append('2');
      calc.append('3');
      calc.append('.');
      expect(calc.getToken()).toBe('1.23');
      expect(calc.getExpression()).toBe('1.23');
    });

    test('throw an error when appending an unknown token', () => {
      expect(() => calc.append('a')).toThrow();
      expect(() => calc.append('%')).toThrow();
      expect(() => calc.append('#')).toThrow();
    });

    test('throw an error appending a number that is longer than a digit', () => {
      expect(() => calc.append('12')).toThrow();
      expect(() => calc.append('1.3')).toThrow();
      expect(() => calc.append('2+3')).toThrow();
    });
  });

  describe('#clear()', () => {
    const calc = new Calculator();
    calc.append('2');
    calc.append('+');
    calc.append('5');

    test('resets the values of the calculator', () => {
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

  describe('#changeSign()', () => {
    test('changing the sign of 0 remains as 0', () => {
      const calc = new Calculator();
      calc.changeSign();
      expect(calc.getToken()).toBe('0');
    });

    test('sign changes when the current token is a number', () => {
      const calc = new Calculator();
      calc.append('5');
      expect(calc.getToken()).toBe('5');
      calc.changeSign();
      expect(calc.getToken()).toBe('-5');
    });

    test('sign changes when the current token is the last value', () => {
      const calc = new Calculator();
      calc.append('1');
      calc.append('+');
      calc.append('2');
      calc.calculate();
      expect(calc.getToken()).toBe('3');
      calc.changeSign();
      expect(calc.getToken()).toBe('-3');
    });

    test('nothing happens when the current token is not a number', () => {
      const calc = new Calculator();
      calc.append('+');
      expect(calc.getToken()).toBe('+');
      calc.changeSign();
      expect(calc.getToken()).toBe('+');
    });
  });
});
