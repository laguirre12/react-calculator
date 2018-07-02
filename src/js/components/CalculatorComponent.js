const React = require('react');
const NumberButton = require('./NumberButton');

class CalculatorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  clear() {
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

  render() {
    return (
      <div className='calculator-div'>
      </div>
    );
  }
}

module.exports = CalculatorComponent;
