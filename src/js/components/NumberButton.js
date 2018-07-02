const React = require('react');
const PropTypes = require('prop-types');

/**
 * A button solely for number values.
 */
class NumberButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='numberBtn-div' onclick={this.props.clickHandler}>
        <p className='numberBtn-p'>{this.props.val}</p>
      </div>
    );
  }
}

NumberButton.propTypes = {
  val: PropTypes.number.isRequired,
  clickHandler: PropTypes.function.isRequired
};
