const React = require('react');
const PropTypes = require('prop-types');

/**
 * A simple functional component containing the output of the calculator.
 */
function OutputComponent(props) {
  return (
    <div className='output-div'>
      <div className='output-val'>{props.major}</div>
      <div className='output-expression'>{props.minor}</div>
    </div>
  );
}

OutputComponent.propTypes = {
  major: PropTypes.string.isRequired,
  minor: PropTypes.string
};

module.exports = OutputComponent;
