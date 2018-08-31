/**
 * A component to display the ViewSection of the OptionsMenu, which contains
 * a color preview and a possible alert message.
 * @module ViewSection
 * @author laguirre <aguirreluis1234@gmail.com>
 */
const React = require('react');
const PropTypes = require('prop-types');
const Alert = require('../common/Alert');
const ColorPreview = require('./ColorPreview');
const OpacityFade = require('../common/OpacityFade');


/**
 * A functional component that displays a preview of color palette and a
 * possible alert message.
 */
function ViewSection(props) {
  let alert;
  if (props.alert.display) {
    alert = (
      <OpacityFade>
        <Alert msg={props.alert.msg} type={props.alert.type}/>
      </OpacityFade>
    );
  }

  return (
    <div className='view-section'>
      <ColorPreview colors={props.colors}/>
      {alert}
    </div>
  );
}

ViewSection.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  alert: PropTypes.shape({
    display: PropTypes.bool,
    msg: PropTypes.string,
    type: PropTypes.oneOf(['success', 'failure', 'neutral'])
  }),
};

ViewSection.defaultProps = {
  alert: { display: false, msg: '', type: 'neutral' },
};

module.exports = ViewSection;
