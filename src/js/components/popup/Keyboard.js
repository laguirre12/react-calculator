/**
 * A component for displaying a calculators keyboard consisting of buttons.
 * @module Keyboard
 * @author laguirre <aguirreluis1234@gmail.com>
 */
const React = require('react');
const PropTypes = require('prop-types');
const Button = require('../common/Button');

/**
 * A functional component containing the buttons for a calculators keyboard.
 * The calculators keyboard requires functions to perform when each kind of key
 * is pressed.
 *
 * Props:
 *  clear - clickHandler for the 'C' button
 *  calculate - clickHandler for the '=' button
 *  changeSign - clickHandler for the '+/-' button
 *  append - clickHandler for number, token and decimal buttons
 */
function Keyboard(props) {
  return (
    <div className='keyboard'>
      <Button label='C' className='other' clickHandler={props.clear}/>
      <Button label='+/-' className='other' clickHandler={props.changeSign}/>
      <Button label='^' className='other' clickHandler={props.append}/>
      <Button label='/' className='operator' clickHandler={props.append}/>

      <Button label='7' clickHandler={props.append}/>
      <Button label='8' clickHandler={props.append}/>
      <Button label='9' clickHandler={props.append}/>
      <Button label='*' className='operator' clickHandler={props.append}/>

      <Button label='4' clickHandler={props.append}/>
      <Button label='5' clickHandler={props.append}/>
      <Button label='6' clickHandler={props.append}/>
      <Button label='-' className='operator' clickHandler={props.append}/>

      <Button label='1' clickHandler={props.append}/>
      <Button label='2' clickHandler={props.append}/>
      <Button label='3' clickHandler={props.append}/>
      <Button label='+' className='operator' clickHandler={props.append}/>

      <Button label='0' className='zero' clickHandler={props.append}/>
      <Button label='.' className='dot' clickHandler={props.append}/>
      <Button label='=' className='equal operator' clickHandler={props.calculate}/>
    </div>);
}

Keyboard.propTypes = {
  clear: PropTypes.func.isRequired,
  append: PropTypes.func.isRequired,
  calculate: PropTypes.func.isRequired,
  changeSign: PropTypes.func.isRequired,
};

module.exports = Keyboard;
