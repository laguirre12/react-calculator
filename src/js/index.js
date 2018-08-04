const React = require('react');
const ReactDOM = require('react-dom');
const CalculatorComponent = require('./components/CalculatorComponent');

class App extends React.Component {
  render() {
    return (<CalculatorComponent/>);
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));
