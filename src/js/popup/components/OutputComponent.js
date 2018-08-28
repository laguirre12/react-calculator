/**
 * A module containing a component to show the output and expression of a
 * calculator. The component displays two values, one larger than the other.
 * @module OutputComponent
 * @author laguirre <aguirreluis1234@gmail.com>
 */
const React = require('react');
const PropTypes = require('prop-types');

/**
 * A simple functional component containing the output of the calculator.
 * @param {object} props the properties of the OutputComponent
 * @returns {jsx} returns a jsx string for rendering the output of the
 * calculator
 */
function OutputComponent(props) {
  return (
    <div className='output-div'>
      <div className='output-val'>{props.major}</div>
      <div className='output-expression'>{props.minor}</div>
    </div>
  );
}

/**
 * @property {string} major Larger text to be displayed in the OutputComponent.
 * @property {string} minor Smaller text to be displayed in the OutputComponent.
 */
OutputComponent.propTypes = {
  major: PropTypes.string.isRequired,
  minor: PropTypes.string
};

module.exports = OutputComponent;
