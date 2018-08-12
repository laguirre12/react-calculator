const React = require('react');
const PropTypes = require('prop-types');

/**
 * A simple functional component containing the output of the calculator.
 */
function OutputComponent(props) {
  return (
    <div className='output-div'>
      <div className='output-val'>{props.val}</div>
      <div className='output-expression'>{props.expression}</div>
    </div>
  );
}

OutputComponent.propTypes = {
  val: PropTypes.string.isRequired,
  expression: PropTypes.string
};

module.exports = OutputComponent;
