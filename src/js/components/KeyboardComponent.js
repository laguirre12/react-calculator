const React = require('react');
const Button = require('./Button');
const PropTypes = require('prop-types');

function KeyboardComponent(props) {
  return (
    <div className='keyboard'>
      <Button val='C' className='other' clickHandler={props.clear}/>
      <Button val='+/-' className='other' clickHandler={props.changeSign}/>
      <Button val='%' className='other' clickHandler={props.more}/>
      <Button val='&divide;' className='operator' clickHandler={props.appendToState}/>

      <Button key='7' val='7' clickHandler={props.appendToState}/>
      <Button key='8' val='8' clickHandler={props.appendToState}/>
      <Button key='9' val='9' clickHandler={props.appendToState}/>
      <Button val='X' className='operator' clickHandler={props.appendToState}/>

      <Button key='4' val='4' clickHandler={props.appendToState}/>
      <Button key='5' val='5' clickHandler={props.appendToState}/>
      <Button key='6' val='6' clickHandler={props.appendToState}/>
      <Button val='-' className='operator' clickHandler={props.appendToState}/>

      <Button key='1' val='1' clickHandler={props.appendToState}/>
      <Button key='2' val='2' clickHandler={props.appendToState}/>
      <Button key='3' val='3' clickHandler={props.appendToState}/>
      <Button val='+' className='operator' clickHandler={props.appendToState}/>

      <Button className='zero' key='0' val='0' clickHandler={props.appendToState}/>
      <Button val='.' clickHandler={props.appendToState}/>
      <Button val='=' className='operator' clickHandler={props.compute}/>
    </div>);
}

KeyboardComponent.propTypes = {
  more: PropTypes.func,
  clear: PropTypes.func,
  compute: PropTypes.func,
  changeSign: PropTypes.func,
  appendToState: PropTypes.func,
};

module.exports = KeyboardComponent;
