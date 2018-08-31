/**
 * A component to display the InputSection of the OptionsMenu.
 * @module ColorSquare
 * @author laguirre <aguirreluis1234@gmail.com>
 */
const React = require('react');
const PropTypes = require('prop-types');
const Button = require('../common/Button');
const RadioGroup = require('../common/RadioGroup');

/**
 * A functional component that displays the possible inputs in the OptionsMenu.
 * The component contains a RadioGroup, as well as a reset and save button.
 */
function InputSection(props) {
  return (
    <div className='input-section'>
      <h2>Calculator Style</h2>
      <RadioGroup
        name='style'
        checked={props.checked}
        options={props.options}
        changeHandler={props.radioButtonHandler}/>
      <Button label='Reset to Default' clickHandler={props.reset}/>
      <Button label='Save Settings' clickHandler={props.save}/>
    </div>
  );
}

InputSection.propTypes = {
  save: PropTypes.func,
  reset: PropTypes.func,
  radioButtonHandler: PropTypes.func,
  checked:  PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    }),
  ])).isRequired,
};

InputSection.defaultProps = {
  save: () => {},
  reset: () => {},
  radioButtonHandler: () => {}
};

module.exports = InputSection;
