/**
 * A component that displays an alert message.
 * @module Alert
 * @author laguirre <aguirreluis1234@gmail.com>
 */
const React = require('react');
const PropTypes = require('prop-types');

/**
 * A functional component for an Alert messages. The alert message can either
 * be of type 'failure', 'success', or 'neutral', which affects the className
 * and allow for different stylings. The alert div will have the className of
 * 'alert' and 'alert-{props.type}'. A 'msg' property is required.
 */
function Alert(props) {
  return <div className={`alert alert-${props.type}`}>{props.msg}</div>;
}


Alert.propTypes = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'failure', 'neutral']).isRequired,
};

module.exports = Alert;
