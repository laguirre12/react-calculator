const React = require('react');
const OutputComponent = require('./OutputComponent');
const KeyboardComponent = require('./KeyboardComponent');

require('../../css/main.css');

class CalculatorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: '' };

    // bind calculator methods to this
    this.appendToState = this.appendToState.bind(this);
    this.changeSign = this.changeSign.bind(this);
    this.compute = this.compute.bind(this);
    this.clear = this.clear.bind(this);
    this.more = this.more.bind(this);
  }

  // calculator operations

  appendToState(newValue) {
    console.log('appending to state');
    this.setState({ val: this.state.val + '' + newValue });
  }

  compute() {
    console.log('computing current value!');
    this.setState({ val: '5' });
  }

  more() {
    console.log('more');
  }

  clear() {
    this.setState({ val: '', });
  }

  changeSign() {
    this.setState({ val: -1 * parseFloat(val) });
  }

  render() {
    return (
      <div className='calculator-div'>
        <OutputComponent val={this.state.val} equation=''/>
        <KeyboardComponent
          more={this.more}
          clear={this.clear}
          compute={this.compute}
          changeSign={this.changeSign}
          appendToState={this.appendToState}/>
      </div>
    );
  }
}

module.exports = CalculatorComponent;
