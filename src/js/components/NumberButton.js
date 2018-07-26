const React = require('react');
const PropTypes = require('prop-types');

class NumberButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='numberBtn-div' onclick={() => this.props.clickHandler(this.props.val)}>
        <p className='numberBtn-val'>{this.props.val}</p>
      </div>
    );
  }
}

NumberButton.propTypes = {
  val: PropTypes.number.isRequired,
  clickHandler: PropTypes.function.isRequired
};
