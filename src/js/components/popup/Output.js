/**
 * A component to show the output of a calculator.
 * @module Output
 * @author laguirre <aguirreluis1234@gmail.com>
 */
const React = require('react');
const PropTypes = require('prop-types');

/**
 * A simple functional component for displaying the output of the calculator.
 * The output displays two values, with one larger than the other.
 */
function Output(props) {
  return (
    <div className='output-div'>
      <div className='output-val'>{props.major}</div>
      <div className='output-expression'>{props.minor}</div>
    </div>
  );
}


Output.propTypes = {
  minor: PropTypes.string,
  major: PropTypes.string.isRequired,
};

Output.defaulType = {
  minor: ''
};

module.exports = Output;
