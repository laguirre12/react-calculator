const React = require('react');
const PropTypes = require('prop-types');

/**
 * A functional component for a general purpose button. A Button can be given
 * className property that is either a string or a collections of strings to
 * allow for styling. A Button also has a label and an optional value that is
 * passed to its clickHandler.
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
