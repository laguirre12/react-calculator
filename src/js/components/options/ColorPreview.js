/**
 * A component that displays a given color palette.
 * @module ColorPreview
 * @author laguirre <aguirreluis1234@gmail.com>
 */
const React = require('react');
const PropTypes = require('prop-types');
const ColorSquare = require('./ColorSquare');

/**
 * A functional component to display a given color palette by using multiple
 * ColorSqures. The ColorPreview should be given an array of color HEX-strings
 */
function ColorPreview(props) {
  const colorSquares = props.colors.map((color, index) =>
    <ColorSquare key={index} color={color}/>
  );

  return (
    <div className="color-preview">
      <h2>Color Palette</h2>
      {colorSquares}
    </div>
  );
}

ColorPreview.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

module.exports = ColorPreview;
