/**
 * The main component of the options page of the application.
 * @author laguirre <aguirreluis1234@gmail.com>
 */
const React = require('react');
const ReactDOM = require('react-dom');
const settings = require('./settings');
const OptionsMenu = require('./components/options/OptionsMenu');

require('../css/options.css');
require('../css/alert.css');

function getColorScheme(style) {
  return settings.COLOR_SCHEMES.get(style);
}

/**
 * The main application component that renders the Options page.
 */
class App extends React.Component {
  render() {
    return (
      <OptionsMenu
        options={settings.STYLES}
        getColorScheme={getColorScheme}
        saveSettings={settings.saveSettings}
        retrieveSettings={settings.retrieveSettings}
        defaultStyle={settings.DEFAULT_STYLE}/>
    );
  }
}

const div = document.getElementById('content') || document.createElement('div');
ReactDOM.render(<App/>, div);
