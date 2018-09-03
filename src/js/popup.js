/**
 * The main component for the calculator popup application.
 * @author laguirre <aguirreluis1234@gmail.com>
 */
const React = require('react');
const ReactDOM = require('react-dom');
const settings = require('./settings');
const Calculator = require('./calculator');
const CalculatorPopup = require('./components/popup/CalculatorPopup');

require('../css/layout.css');

// require the right stylesheet based on the current settings
settings.retrieveSettings((_, data) =>
  require('../css/' + settings.STYLE_FILES.get(data.style))
);


/**
 * The main application component that renders the Calculator.
 */
class App extends React.Component {
  render() {
    const calculator = new Calculator(['+', '*', '-', '/', '^']);
    return (<CalculatorPopup solver={calculator}/>);
  }
}

const div = document.getElementById('content') || document.createElement('div');
ReactDOM.render(<App/>, div);
