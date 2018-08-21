const React = require('react');
const math = require('mathjs');
const isNumber = require('is-number');
const OutputComponent = require('./OutputComponent');
const KeyboardComponent = require('./KeyboardComponent');

require('../../css/main.css');


/**
 * A calculator component. The component maintains an expression to be
 * calculated
 *
 * A calculator maintains a current expression, value, and token.
 * A token is a string that is either a number or an operator (+,-,*,/, etc.)
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
 * The calculator initially start with a value of 0, an empty token and an
 * empty expresion.
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
class CalculatorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',         // the last token that was entered
      expression: '',    // the current expression
      value: '0',        // the last computed value
    };

    // bind calculator methods to this
    this.appendDecimal = this.appendDecimal.bind(this);
    this.appendNumber = this.appendNumber.bind(this);
    this.appendOperator = this.appendOperator.bind(this);
    this.changeSign = this.changeSign.bind(this);
    this.calculate = this.calculate.bind(this);
    this.clear = this.clear.bind(this);
    this.more = this.more.bind(this);
  }

  appendNumber(num) {
    let newToken = this.state.token + num;
    let newExpression = this.state.expression;
    if (!isNumber(this.state.token)) {
      newToken = num;
      newExpression = this.state.expression + this.state.token;
    }
    this.setState({
      token: newToken,
      expression: newExpression
    });
  }

  appendOperator(op) {
    let newExpression = this.state.expression;
    if (isNumber(this.state.token)) {
      newExpression += this.state.token;
    } else if (this.state.token === '') {
      newExpression += this.state.value;
    }
    this.setState({
      token: op,
      expression: newExpression
    });
  }

  appendDecimal() {
    if (isNumber(this.state.token) && !this.state.token.includes('.')) {
      this.setState({ token: this.state.token + '.'  });
    } else if (this.state.token === '' && !this.state.value.includes('.')) {
      this.setState({ token: this.state.value + '.' });
    }
  }

  calculate() {
    const result = math.eval(this.state.expression + this.state.token).toString();
    this.setState({
      token: '',
      expression: '',
      value: result,
    });
  }

  clear() {
    this.setState({
      value: '0',
      token: '',
      expression: '',
    });
  }

  changeSign() {
    if (isNumber(this.state.token)) {
      this.setState({ token: (-1 * parseFloat(this.state.token)).toString() });
    } else if (this.state.token === '') {
      this.setState({ token: (-1 * parseFloat(this.state.value)).toString() });
    }
  }



  // TODO(la): implement a sliding menu that has more options
  more() { }



  render() {
    let expression = this.state.expression + this.state.token;
    let val = expression;
    if (this.state.token === '' && this.state.expression === '') {
      val = this.state.value;
      expression = this.state.value;
    }
    return (
      <div className='calculator-div'>
        <OutputComponent major={val} minor={expression}/>
        <KeyboardComponent
          more={this.more}
          clear={this.clear}
          calculate={this.calculate}
          changeSign={this.changeSign}
          appendNumber={this.appendNumber}
          appendDecimal={this.appendDecimal}
          appendOperator={this.appendOperator}/>
      </div>
    );
  }
}

module.exports = CalculatorComponent;
