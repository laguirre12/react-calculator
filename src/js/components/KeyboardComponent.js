const React = require('react');
const Button = require('./Button');
const PropTypes = require('prop-types');

/**
 * A functional component containing the buttons for a calculators keyboard.
 */
function KeyboardComponent(props) {
  return (
    <div className='keyboard'>
      <Button label='C' className='other' clickHandler={props.clear}/>
      <Button label='+/-' className='other' clickHandler={props.changeSign}/>
      <Button label='^' className='other' clickHandler={props.append}/>
      <Button label='/' className='operator' clickHandler={props.append}/>

      <Button key='7' label='7' clickHandler={props.append}/>
      <Button key='8' label='8' clickHandler={props.append}/>
      <Button key='9' label='9' clickHandler={props.append}/>
      <Button label='*' className='operator' clickHandler={props.append}/>

      <Button key='4' label='4' clickHandler={props.append}/>
      <Button key='5' label='5' clickHandler={props.append}/>
      <Button key='6' label='6' clickHandler={props.append}/>
      <Button label='-' className='operator' clickHandler={props.append}/>

      <Button key='1' label='1' clickHandler={props.append}/>
      <Button key='2' label='2' clickHandler={props.append}/>
      <Button key='3' label='3' clickHandler={props.append}/>
      <Button label='+' className='operator' clickHandler={props.append}/>

      <Button className='zero' key='0' label='0' clickHandler={props.append}/>
      <Button label='.' clickHandler={props.append}/>
      <Button label='=' className='operator' clickHandler={props.calculate}/>
    </div>);
}


KeyboardComponent.propTypes = {
  clear: PropTypes.func,
  append: PropTypes.func,
  calculate: PropTypes.func,
  changeSign: PropTypes.func,
};

module.exports = KeyboardComponent;
