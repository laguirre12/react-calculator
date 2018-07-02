const React = require('react');
const PropTypes = require('prop-types');

/**
 * A component for displaying
 */
class OutputComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='output-div'>
        <p className='output-p'>{this.props.val}</p>
      </div>
    );
  }
}

OutputComponent.propTypes = {
  val: PropTypes.number.isRequired
};

module.exports = OutputComponent;
