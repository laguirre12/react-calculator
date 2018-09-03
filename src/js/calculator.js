/**
 * A module for creating a simple calculator object that maintains a current
 * expression to be computed, and then uses a math evaluator to evalute it. The
 * calculator can take a set of operations to limit possible operations.
 * @module calculator
 * @author laguirre <aguirreluis1234@gmail.com>
 */
const isNumber = require('is-number');
const math = require('math-expression-evaluator');

/**
 * Represents a calculator object that maintains an expression, a current token,
 * a previously computed value, and valid operators. The calculator starts with
 * a default value for 0.
 * @example
 * const calc = new Calculator();
 * calc.append('1');
 * calc.append('2');
 * calc.append('+');
 * calc.append('5');
 * calc.getOperators();   // returns ['+', '-', '*', '/', '^']
 * calc.getExpression();  // returns '12 + 5'
 * calc.calculate()       // returns 17
 */
class Calculator {
  constructor() {
    this.operators_ = ['+', '-', '*', '/', '^'];

    this.token = '';       // current token
    this.value = '0';      // last computed value
    this.expression = '';  // current expression
  }

  /**
   * Returns the array of allowed operators.
   * @return {array(string)} the allowed operators of the calculator.
   */
  getOperators() {
    return this.operators_.map(x => x);
  }

  /**
   * Returns the last appended token of the calculator. The token will either
   * be a number or an operator. If the expression is currently empty, then the
   * last computed value is treated as a token.
   * @return {string} the current token
   */
  getToken() {
    if (this.token === '') return this.value;
    return this.token;
  }

  /**
   * Returns the current string expression that the calculator is maintaining.
   * @return {string} the current expression in the calculator
   */
  getExpression() {
    return this.expression + this.getToken();
  }

  /**
   * Returns the last computed value of the calculator.
   * @return {string} the last computed value of the calculator.
   */
  getValue() {
    return this.value;
  }

  /**
   * Evaluates the calculators current expression, and then updates the state of
   * the calculator.
   * @return {string} the computed value.
   */
  calculate() {
    try {
      this.value = math.eval(this.getExpression()).toString();
      this.expression = '';
      this.token = '';
    } catch (e) {
      this.value = 'Err';
      this.expression ='';
      this.token = '';
    }
    return this.value;
  }

  /**
   * Resets the calculators current expression, token and value.
   */
  clear() {
    this.value = '0';
    this.token = '';
    this.expression = '';
  }

  /**
   * Changes the sign of the calculator's current token in the expression.
   */
  changeSign() {
    const NEGATIVE = -1;
    const token = this.getToken();
    if (isNumber(token)) {
      this.token = (NEGATIVE * parseFloat(token)).toString();
    }
  }

  /**
   * Appends the given token to the calculators expression. If the token is not
   * a number, a decimal point, or a valid operator then an error is thrown.
   * @param {string} token the token to append
   */
  append(token) {
    if (isNumber(token) && token.length  == 1) this.appendDigit_(token);
    else if (this.operators_.includes(token)) this.appendOperator_(token);
    else if (token === '.') this.appendDecimal_(token);
    else if (isNumber(token)) throw Error('Numbers should be appended as individual digits');
    else throw Error('Unknown token type: ' + token);
  }


  /** @private */
  appendDigit_(num) {
    console.assert(isNumber(num));
    let newToken = this.token + num;
    let newExpression = this.expression;
    if (!isNumber(this.token)) {
      newToken = num;
      newExpression = this.expression + this.token;
    }
    this.token = newToken;
    this.expression = newExpression;
  }

  /** @private */
  appendOperator_(op) {
    let newExpression = this.expression;
    if (isNumber(this.token)) {
      newExpression += this.token;
    } else if (this.token === '') {
      newExpression += this.value;
    }
    this.token = op;
    this.expression = newExpression;
  }

  /** @private */
  appendDecimal_() {
    if (isNumber(this.token) && !this.token.includes('.')) {
      this.token = this.token + '.';
    } else if (this.token === '' && !this.value.includes('.')) {
      this.token = this.value + '.';
    } else if (this.operators_.includes(this.token)) {
      this.expression += this.token;
      this.token = '0.';
    }
  }
}

module.exports = Calculator;
