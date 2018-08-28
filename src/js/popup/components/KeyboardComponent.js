/**
 * A module containing a Keyboard component consisting of buttons.
 * @module KeyboardComponent
 * @author laguirre <aguirreluis1234@gmail.com>
 */
const React = require('react');
const Button = require('./Button');
const PropTypes = require('prop-types');

/**
 * A functional component containing the buttons for a calculator's keyboard.
 * @param {object} props the properties of the Keyboard
 * @returns {jsx} returns a jsx string for rendering the keyboard
 */
function KeyboardComponent(props) {
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


/**
 * @property {function} clear the function to perform when the 'C' key is
 * pressed
 * @property {function} append the function to perform when a calculator key
 * is pressed
 * @property {function} calculate the function to perform when the '=' key is
 * pressed
 * @property {function} changeSign the function to perform when the '+/-' key
 * is pressed
 */
KeyboardComponent.propTypes = {
  clear: PropTypes.func,
  append: PropTypes.func,
  calculate: PropTypes.func,
  changeSign: PropTypes.func,
};

module.exports = KeyboardComponent;
