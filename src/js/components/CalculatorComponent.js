const React = require('react');
const math = require('mathjs');
const isNumber = require('is-number');
const OutputComponent = require('./OutputComponent');
const KeyboardComponent = require('./KeyboardComponent');

require('../../css/main.css');


/**
 * A calculator component. The component maintains an expression to be
 * calculated
 */
class CalculatorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      computed: false,
      lastToken: '',
      expression: '',
      val: '',
    };

    // bind calculator methods to this
    this.append = this.append.bind(this);
    this.changeSign = this.changeSign.bind(this);
    this.calculate = this.calculate.bind(this);
    this.clear = this.clear.bind(this);
    this.more = this.more.bind(this);
  }

  append(token) {
    let newToken, newExpression;
    if (!isNumber(token) || !isNumber(this.state.lastToken)) {
      newToken = token;
      newExpression = this.state.expression + this.state.lastToken;
    } else {
      newToken = this.state.lastToken + token;
      newExpression = this.state.expression;
    }
    console.log('appending...', 'lastToken:', newToken, 'expression:', newExpression);
    this.setState({
      computed: false,
      lastToken: newToken,
      expression: newExpression,
    });
  }

  calculate() {
    const newExpression = this.state.expression + this.state.lastToken;
    const result = math.eval(newExpression).toString();
    console.log('calulating:', newExpression, 'result:', result);
    this.setState({
      lastToken: result,
      computed: true,
      expression: '',
      val: result,
    });
  }

  clear() {
    this.setState({
      val: '',
      lastToken: '',
      expression: '',
      computed: false,
    });
  }

  changeSign() {
    console.log('changing size');
    if (isNumber(this.state.lastToken)) {
      this.setState({
        computed: false,
        lastToken: -1 * parseFloat(this.state.lastToken)
      });
    }
  }


  // TODO(la): implement a sliding menu that has more options
  more() { }



  render() {
    const val = this.state.computed ? this.state.val : this.state.lastToken;
    const expression = this.state.computed ? this.state.expression : '';
    console.log('rendering... ', 'computed:', this.state.computed, 'val:', val, 'expression:', expression);
    return (
      <div className='calculator-div'>
        <OutputComponent val={val} expression={expression}/>
        <KeyboardComponent
          more={this.more}
          clear={this.clear}
          calculate={this.calculate}
          changeSign={this.changeSign}
          append={this.append}/>
      </div>
    );
  }
}

module.exports = CalculatorComponent;
