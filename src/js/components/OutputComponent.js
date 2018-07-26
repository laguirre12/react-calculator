const React = require('react');
const PropTypes = require('prop-types');

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
  val: PropTypes.string.isRequired
};

module.exports = OutputComponent;
