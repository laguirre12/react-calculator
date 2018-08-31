/**
 * A component to display a div with a given color.
 * @module ColorSquare
 * @author laguirre <aguirreluis1234@gmail.com>
 */
const React = require('react');
const PropTypes = require('prop-types');

/**
 * A functional component to display a div with a given background-color.
 */
function ColorSquare(props) {
  const styling = {backgroundColor: props.color};
  return <div style={styling} className="color-square"></div>;
}

// TODO(la): custom proptype to specify colors are hex strings
// possible regex - /^#(\d|[a-f]|[A-F]){1,6}$/.test('')
ColorSquare.propTypes = {
  color: PropTypes.string.isRequired,
};

module.exports = ColorSquare;
