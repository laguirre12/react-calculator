const React = require('react');
const PropTypes = require('prop-types');

/**
 * A button solely for number values.
 */
class OperatorComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='operator-div' onclick={this.props.clickHandler}>
        <p className='operator-p'>{this.props.val}</p>
      </div>
    );
  }
}

NumberButton.propTypes = {
  val: PropTypes.number.isRequired,
  clickHandler: PropTypes.function.isRequired
};
