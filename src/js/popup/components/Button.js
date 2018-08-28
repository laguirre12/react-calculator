/**
 * A module containing a general purpose Button component.
 * @module Button
 * @author laguirre <aguirreluis1234@gmail.com>
 */
const React = require('react');
const PropTypes = require('prop-types');

/**
 * A functional component for a general purpose button. A Button can be given
 * className property that is either a string or a collections of strings to
 * allow for styling. A Button also has a label and an optional value that is
 * passed to its clickHandler.
 * @param {object} props the properties of the button
 * @returns {jsx} returns a jsx string for rendering the button
 */
function Button(props) {
  const value = props.value ? props.value : props.label;
  const buttonClass = typeof props.className === 'string' ?
    props.className :
    props.className.join(' ');
  return (
    <button className={`btn ${buttonClass}`} onClick={() => props.clickHandler(value) }>
      {props.label}
    </button>
  );
}

/**
 * @property {string} value the value of the button that will be passed to the
 * @property {string} label the label to show on the button
 * @property {string|Array(string)} className a string (or sequence of strings)
 * of CSS classNames that can be used for styling the button.
 * @property {function} clickHandler a function that is applied on the button
 * on a click event.
 */
Button.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
};

Button.defaultProps = {
  label: '',
  className: '',
  clickHandler: () => {}
};

module.exports = Button;
