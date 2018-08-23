const math = require('mathjs');
const isNumber = require('is-number');

/**
 * A calculator maintains a current expression, value, and token.
 * A token is a string that is either a number or an operator
 * (+,-,*,/,^, etc.)
 * An expression is a string equence of tokens.
 * A value is a string number.
 *
 * Types of keys:
 *  - clear
 *  - operator
 *  - +/-
 *  - number (and .)
 *  - equals
 *
 * render: (value if expression empty, else expression, expression)
 *
 * The calculator initially start with a value of 0, an empty token
 * and an empty expresion.
 * If a number is pressed:
 *    - if the token is a number than append it
 *    - else we have a new token
 * If +/- is pressed:
 *    - if token is a number, update it
 *    - else nothing
 * If a '.' is pressed
 *    - if the token is a number that doesn't have a '.' append it
 *    - if the token is a number that already has a '.' do nothing
 *    - else do nothing
 * If an operator is pressed
 *    - if token is a number then we have a new token
 *    - if token is an operator then replace it
 *    - else nothing
 * If equals is pressed
 *    - perform computation
 *    - set the token and expression to empty, and the resulting value
 * If clear is pressed
 *    - clear expression, token, and set value to 0
 */
class Calculator {
  constructor(operators) {
    this.operators_ = operators;  // set of operators used in calculator

    this.token = '';       // current token
    this.value = '0';      // last computed value
    this.expression = '';  // current expression
    this.history = [];     // previously computed expressions
  }

  getToken() {
    if (this.token === '') return this.value;
    return this.token;
  }

  getExpression() {
    return this.expression + this.getToken();
  }

  getValue() {
    return this.value;
  }

  calculate() {
    this.history.push(this.getExpression());
    this.value = math.eval(this.getExpression()).toString();
    this.expression = '';
    this.token = '';
    return this.value;
  }

  clear() {
    this.value = '0';
    this.token = '';
    this.expression = '';
  }

  changeSign() {
    const token = this.getToken();
    if (isNumber(token)) {
      this.token = (-1 * parseFloat(token)).toString();
    }
  }


  append(token) {
    if (isNumber(token)) this.appendNumber(token);
    else if (this.operators_.includes(token)) this.appendOperator(token);
    else if (token === '.') this.appendDecimal(token);
    else throw Error('unknown token type: ' + token);
  }

  appendNumber(num) {
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

  appendOperator(op) {
    let newExpression = this.expression;
    if (isNumber(this.token)) {
      newExpression += this.token;
    } else if (this.token === '') {
      newExpression += this.value;
    }
    this.token = op;
    this.expression = newExpression;
  }

  appendDecimal() {
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
