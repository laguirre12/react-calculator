const ReactDOM = require('react-dom');
const App = require('../src/js/options');

describe('smoke test for the options page', () => {
  it('should not crash', () => {
    const div = document.createElement('div');
    ReactDOM.render('<App />', div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
