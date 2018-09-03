const ReactDOM = require('react-dom');
const App = require('../src/js/popup');

describe('smoke test for the calculator popup', () => {
  it('should not crash', () => {
    const div = document.createElement('div');
    ReactDOM.render('<App />', div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
