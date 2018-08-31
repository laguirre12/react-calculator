/**
 * A component for the Options page of the calculator page.
 * @module OptionsMenu
 * @author laguirre <aguirreluis1234@gmail.com>
 */
const React = require('react');
const PropTypes = require('prop-types');
const ViewSection = require('./ViewSection');
const InputSection = require('./InputSection');

// TODO(la): AlertManager component for managing the alert message?

/**
 * A component for displaying the options page of the calculator. The component
 * manages which style option is currently checked, and whether an alert message
 * is being displayed.
 */
class OptionsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false,
      alertMsg: '',
      alertType: 'success',
      style: this.props.defaultStyle,
    };

    this.setStyle = this.setStyle.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
    this.resetSettings = this.resetSettings.bind(this);
  }

  componentDidMount() {
    this.props.retrieveSettings((err, data) => {
      const displayAlert = err ? true : false;
      const msg = err ? err.message : '';
      const type = err ? 'failure' : 'success';
      this.setState({
        alert: displayAlert,
        alertMsg: msg,
        alertType: type,
        style: data.style
      });
    });
  }

  setStyle(newStyle) {
    this.setState({
      alert: false,
      alertMsg: '',
      alertType: 'success',
      style: newStyle, });
  }

  saveSettings() {
    const successMsg = 'Save Successful!';
    const failureMsg = 'Failed to Save!';
    this.props.saveSettings({style : this.state.style}, (err, data) => {
      const msg = err ? failureMsg : successMsg;
      const type = err ? 'failure' : 'success';
      this.setState({
        alert: true,
        alertMsg: msg,
        alertType: type,
        style: data.style,
      });
    });
  }

  resetSettings() {
    this.setStyle(this.props.defaultStyle);
  }

  render() {
    const alert = {
      display: this.state.alert,
      msg: this.state.alertMsg,
      type: this.state.alertType
    };
    const style = this.state.style;
    const colors = this.props.getColorScheme(style);
    return (
      <div>
        <InputSection checked={style}
          options={this.props.options}
          save={this.saveSettings}
          reset={this.resetSettings}
          radioButtonHandler={this.setStyle}/>
        <ViewSection colors={colors} alert={alert}/>
      </div>
    );
  }
}

OptionsMenu.propTypes = {
  defaultStyle: PropTypes.string.isRequired,
  getColorScheme: PropTypes.func.isRequired,
  saveSettings: PropTypes.func.isRequired,
  retrieveSettings: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    }),
  ])).isRequired,
};

module.exports = OptionsMenu;
