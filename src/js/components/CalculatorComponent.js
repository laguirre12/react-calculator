const React = require('react');
const Calculator = require('../calculator');
const OutputComponent = require('./OutputComponent');
const KeyboardComponent = require('./KeyboardComponent');

require('../../css/main.css');

class CalculatorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.calculator = new Calculator(['+', '*', '-', '/', '^']);
    this.state = { expression: '0' };

    this.clear = this.clear.bind(this);
    this.append = this.append.bind(this);
    this.calculate = this.calculate.bind(this);
    this.changeSign = this.changeSign.bind(this);
  }

  calculate() {
    this.calculator.calculate();
    this.setState({
      expression: this.calculator.getExpression()
    });
  }

  clear() {
    this.calculator.clear();
    this.setState({
      expression: this.calculator.getExpression()
    });
  }

  changeSign() {
    this.calculator.changeSign();
    this.setState({
      expression: this.calculator.getExpression()
    });
  }

  append(token) {
    this.calculator.append(token);
    this.setState({
      expression: this.calculator.getExpression()
    });
  }


  render() {
    const expression = this.calculator.getExpression();
    const val = this.calculator.getExpression();
    return (
      <div className='calculator-div'>
        <OutputComponent major={val} minor={expression}/>
        <KeyboardComponent
          clear={this.clear}
          append={this.append}
          calculate={this.calculate}
          changeSign={this.changeSign}/>
      </div>
    );
  }
}

module.exports = CalculatorComponent;
