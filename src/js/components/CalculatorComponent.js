const React = require('react');
const NumberButton = require('./NumberButton');
const OperatorButton = require('./OperatorButtong);
const OutputComponent = require('./OutputComponent');

// TODO(la): contain an output component and a keyboard component?
class CalculatorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
    };
  }


  generateNumberButtons() {
    const buttons = [];
    for (let i = 0; i < 10; i++) {
      buttons.append(<NumberButton
        val={i}
        key={i}
        clickHandler={appendToState.bind(this)}/>);
    }
    return buttons;
  }


  appendToState(newValue) {
    console.log('appending to state');
    this.setState({ val: this.state.val + ' ' + newValue; });
  }

  parenthesis() {
    console.log('parenthesis');
    this.setState({ val: '(' + this.val+ ')' });
  }

  // TODO(la): use calculator instance to compute value
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

  render() {
    return (
      <div className='calculator-div'>
        <OutputComponent val={this.state.val}/>

        <OperatorButton val='%' clickHandler={more.bind(this)}/>
        <OperatorButton val='()' clickHandler={parenthesis.bind(this)}/>
        <OperatorButton val='C' clickHandler={clear.bind(this)}/>
        <OperatorButton val='<' clickHandler={appendToState.bind(this)}/>

        <NumberButton key='7' val='7' clickHandler={appendToState.bind(this)}/>
        <NumberButton key='8' val='8' clickHandler={appendToState.bind(this)}/>
        <NumberButton key='9' val='9' clickHandler={appendToState.bind(this)}/>
        <OperatorButton val='/' clickHandler={appendToState.bind(this)}/>

        <NumberButton key='4' val='4' clickHandler={appendToState.bind(this)}/>
        <NumberButton key='5' val='5' clickHandler={appendToState.bind(this)}/>
        <NumberButton key='6' val='6' clickHandler={appendToState.bind(this)}/>
        <OperatorButton val='X' clickHandler={appendToState.bind(this)}/>

        <NumberButton key='1' val='1' clickHandler={appendToState.bind(this)}/>
        <NumberButton key='2' val='2' clickHandler={appendToState.bind(this)}/>
        <NumberButton key='3' val='3' clickHandler={appendToState.bind(this)}/>
        <OperatorButton val='-' clickHandler={appendToState.bind(this)}/>

        <NumberButton key='0' val='0' clickHandler={appendToState.bind(this)}/>
        <OperatorButton val='.' clickHandler={appendToState.bind(this)}/>
        <OperatorButton val='=' clickHandler={compute.bind(this)}/>
        <OperatorButton val='+' clickHandler={appendToState.bind(this)}/>
      </div>
    );
  }
}

module.exports = CalculatorComponent;
