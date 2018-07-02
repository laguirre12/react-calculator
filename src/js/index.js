const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  render() {
    return (<CalculatorComponent/>);
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));
