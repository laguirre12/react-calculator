const React = require('react');
const PropTypes = require('prop-types');

function Button(props) {
  const buttonClass = typeof props.className === 'string' ?
    props.className :
    props.className.join(' ');
  return (
    <button className={`btn ${buttonClass}`} onClick={() => props.clickHandler(props.val)}>
      {props.val}
    </button>
  );
}

Button.propTypes = {
  val: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
};

Button.defaultProps = {
  val: '',
  className: '',
  clickHandler: () => {}
};

module.exports = Button;
