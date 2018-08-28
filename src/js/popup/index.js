/**
 * The main component of the application.
 * @author laguirre <aguirreluis1234@gmail.com>
 */
const React = require('react');
const ReactDOM = require('react-dom');
const settings = require('../settings.js');
const CalculatorComponent = require('./components/CalculatorComponent');

require('../../css/layout.css');
// require the appropriate stylesheet based on the current settings
settings.retrieveSettings((_, data) => require('../../css/' + data.style));


/**
 * The main application component that renders the Calculator.
 */
class App extends React.Component {
  render() {
    return (<CalculatorComponent/>);
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));
