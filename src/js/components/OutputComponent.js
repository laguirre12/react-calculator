const React = require('react');
const PropTypes = require('prop-types');

function OutputComponent(props) {
  return (
    <div className='output-div'>
      <div className='output-val'>{props.val}</div>
      <div className='output-equation'>{props.equation}</div>
    </div>
  );
}

OutputComponent.propTypes = {
  val: PropTypes.string.isRequired,
  equation: PropTypes.string
};

module.exports = OutputComponent;
