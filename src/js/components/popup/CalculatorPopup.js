/**
 * A module containing a component for a Calculator app.
 * @module CalculatorPopup
 * @author laguirre <aguirreluis1234@gmail.com>
 */
const React = require('react');
const PropTypes = require('prop-types');
const Output = require('./Output');
const Keyboard = require('./Keyboard');

/**
 * A calculator component that and maintains a string expression as its state.
 */
class CalculatorPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expression: this.props.solver.getExpression() };

    this.clear = this.clear.bind(this);
    this.append = this.append.bind(this);
    this.calculate = this.calculate.bind(this);
    this.changeSign = this.changeSign.bind(this);
    this.updateExpression = this.updateExpression.bind(this);
  }

  calculate() {
    this.props.solver.calculate();
    this.updateExpression();
  }

  clear() {
    this.props.solver.clear();
    this.updateExpression();
  }

  changeSign() {
    this.props.solver.changeSign();
    this.updateExpression();
  }

  append(token) {
    this.props.solver.append(token);
    this.updateExpression();
  }

  updateExpression() {
    this.setState({ expression: this.props.solver.getExpression() });
  }


  render() {
    const expression = this.props.solver.getExpression();
    return (
      <div className='calculator-div'>
        <Output major={expression} minor={expression}/>
        <Keyboard
          clear={this.clear}
          append={this.append}
          calculate={this.calculate}
          changeSign={this.changeSign}/>
      </div>
    );
  }
}

CalculatorPopup.propTypes = {
  solver: PropTypes.object.isRequired
};

module.exports = CalculatorPopup;
