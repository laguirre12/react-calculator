const React = require('react');
const Button = require('./Button');
const PropTypes = require('prop-types');

/**
 * A functional component containing the buttons for a calculators keyboard.
 */
function KeyboardComponent(props) {
  return (
    <div className='keyboard'>
      <Button val='C' className='other' clickHandler={props.clear}/>
      <Button val='+/-' className='other' clickHandler={props.changeSign}/>
      <Button val='%' className='other' clickHandler={props.more}/>
      <Button val='/' className='operator' clickHandler={props.append}/>

      <Button key='7' val='7' clickHandler={props.append}/>
      <Button key='8' val='8' clickHandler={props.append}/>
      <Button key='9' val='9' clickHandler={props.append}/>
      <Button val='*' className='operator' clickHandler={props.append}/>

      <Button key='4' val='4' clickHandler={props.append}/>
      <Button key='5' val='5' clickHandler={props.append}/>
      <Button key='6' val='6' clickHandler={props.append}/>
      <Button val='-' className='operator' clickHandler={props.append}/>

      <Button key='1' val='1' clickHandler={props.append}/>
      <Button key='2' val='2' clickHandler={props.append}/>
      <Button key='3' val='3' clickHandler={props.append}/>
      <Button val='+' className='operator' clickHandler={props.append}/>

      <Button className='zero' key='0' val='0' clickHandler={props.append}/>
      <Button val='.' clickHandler={props.append}/>
      <Button val='=' className='operator' clickHandler={props.calculate}/>
    </div>);
}
/**<Button val='&divide;' className='operator' clickHandler={props.append}/>
   <Button val='&#10005;' className='operator' clickHandler={props.append}/>
 */

KeyboardComponent.propTypes = {
  more: PropTypes.func,
  clear: PropTypes.func,
  append: PropTypes.func,
  calculate: PropTypes.func,
  changeSign: PropTypes.func,
};

module.exports = KeyboardComponent;
