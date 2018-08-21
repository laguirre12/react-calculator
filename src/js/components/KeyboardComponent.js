const React = require('react');
const Button = require('./Button');
const PropTypes = require('prop-types');

/**
 * A functional component containing the buttons for a calculators keyboard.
 */
function KeyboardComponent(props) {
  return (
    <div className='keyboard'>
      <Button label='%' className='other' clickHandler={props.more}/>
      <Button label='C' className='other' clickHandler={props.clear}/>
      <Button label='+/-' className='other' clickHandler={props.changeSign}/>
      <Button label='/' className='operator' clickHandler={props.appendOperator}/>

      <Button key='7' label='7' clickHandler={props.appendNumber}/>
      <Button key='8' label='8' clickHandler={props.appendNumber}/>
      <Button key='9' label='9' clickHandler={props.appendNumber}/>
      <Button label='*' className='operator' clickHandler={props.appendOperator}/>

      <Button key='4' label='4' clickHandler={props.appendNumber}/>
      <Button key='5' label='5' clickHandler={props.appendNumber}/>
      <Button key='6' label='6' clickHandler={props.appendNumber}/>
      <Button label='-' className='operator' clickHandler={props.appendOperator}/>

      <Button key='1' label='1' clickHandler={props.appendNumber}/>
      <Button key='2' label='2' clickHandler={props.appendNumber}/>
      <Button key='3' label='3' clickHandler={props.appendNumber}/>
      <Button label='+' className='operator' clickHandler={props.appendOperator}/>

      <Button className='zero' key='0' label='0' clickHandler={props.appendNumber}/>
      <Button label='.' clickHandler={props.appendDecimal}/>
      <Button label='=' className='operator' clickHandler={props.calculate}/>
    </div>);
}


KeyboardComponent.propTypes = {
  more: PropTypes.func,
  clear: PropTypes.func,
  calculate: PropTypes.func,
  changeSign: PropTypes.func,
  appendNumber: PropTypes.func,
  appendDecimal: PropTypes.func,
  appendOperator: PropTypes.func,
};

module.exports = KeyboardComponent;
