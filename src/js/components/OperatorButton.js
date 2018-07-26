const React = require('react');
const PropTypes = require('prop-types');

class OperatorComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='operator-div' onclick={() => this.props.clickHandler(this.props.val)}>
        <p className='operator-val'>{this.props.val}</p>
      </div>
    );
  }
}

NumberButton.propTypes = {
  val: PropTypes.string.isRequired,
  clickHandler: PropTypes.function.isRequired
};
