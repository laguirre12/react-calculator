/**
 * A general purpose RadioButton component.
 * @module RadioButton
 * @author laguirre <aguirreluis1234@gmail.com>
 */
const React = require('react');
const PropTypes = require('prop-types');

/**
 * A functional component for a general purpose radio button. The radio button
 * requires a label and a name specifying the purpose of the radio button. An
 * optional value can be given (that defaults to the label) that will passed
 * to the onChange function handler, changeHandler. An optional className can
 * also be passed for styling the RadioButton.
 */
function RadioButton(props) {
  const value = props.value ? props.value : props.label;
  const buttonClass = typeof props.className === 'string' ?
    'radio-btn ' + props.className :
    'radio-btn ' + props.className.join(' ');
  return (
    <div className ={buttonClass}>
      <input type='radio'
        value={value}
        name={props.name}
        checked={props.checked}
        onChange={() => props.changeHandler(value)}/>
      <label>{props.label}</label>
    </div>
  );
}

RadioButton.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.string,
  className: PropTypes.string,
  changeHandler: PropTypes.func,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

RadioButton.defaultProps = {
  className: '',
  checked: false,
  changeHandler: () => {}
};

module.exports = RadioButton;
