/**
 * A general purpose component for displaying multiple RadioButton's.
 * @module RadioGroup
 * @author laguirre <aguirreluis1234@gmail.com>
 */
const React = require('react');
const PropTypes = require('prop-types');
const RadioButton = require('./RadioButton');

/**
 * A general purpose input group for RadioButton's. The RadioGroup takes a
 * list of options and a name for the radio buttons in the group. A RadioGroup
 * can be given the label of the RadioButton that should be checked, a function
 * for the radioButton's to execute onChange, and a className for radio buttons.
 */
function RadioGroup(props) {
  const radioButtons = props.options.map((option, index) => {
    const label = (typeof option === 'string') ? option : option.label;
    const value = (typeof option === 'string') ? option : option.value;
    const checked = (label === props.checked);
    return <RadioButton key={index}
      label={label}
      value={value}
      name={props.name}
      className={props.buttonClass}
      changeHandler={props.changeHandler}
      checked={checked}/>;
  });

  return <div className='radio-form'>{radioButtons}</div>;
}

RadioGroup.propTypes = {
  changeHandler: PropTypes.func,
  buttonClass: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    }),
  ])).isRequired,
};

RadioGroup.defaultProps = {
  checked: '',
  buttonClass: '',
  changeHandler: () => {},
};

module.exports = RadioGroup;
