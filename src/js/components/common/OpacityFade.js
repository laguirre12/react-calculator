/**
 * A component to perform a fade in/out transition.
 * @module OpacityFade
 * @author laguirre <aguirreluis1234@gmail.com>
 */
const React = require('react');
const PropTypes = require('prop-types');


const FADE_RATE = 0.05;
const TIMER_RATE = 50;
const LOWER_LIMIT = 0.1;
const UPPER_LIMIT = 0.9;
const DEFAULT_LIFE = 2000;


/**
 * A wrapper component that will give it's children a Fade in and Fade out
 * effect by adjusting the opacity of the components. The child component will
 * first fade in, exist at full opacity for a time, then fade out. The
 * FadeComponent can be given a 'life' property to specify how long the
 * component is at full opacity, a 'fadeRate' to specify the transition speed,
 * and functions to occur when the component has fully faded in and faded out.
 */
class OpacityFade extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opacity: 0 };
  }

  componentDidMount() {
    this.fadeIn();
  }

  startLife() {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      this.fadeOut();
      this.props.onFadeOut();
    }, this.props.life);
  }

  fadeIn() {
    let newOpacity = this.state.opacity;
    const timer = setInterval(() => {
      if (newOpacity >= UPPER_LIMIT) {
        clearInterval(timer);
        this.props.onFadeIn();
        this.startLife();
      }
      newOpacity += this.props.fadeRate;
      this.setState({ opacity: newOpacity });
    }, TIMER_RATE);
  }

  fadeOut() {
    let newOpacity = this.state.opacity;
    const timer = setInterval(() => {
      if (newOpacity <= LOWER_LIMIT) {
        clearInterval(timer);
        this.props.onFadeOut();
      }
      newOpacity -= this.props.fadeRate;
      this.setState({ opacity : newOpacity });
    }, TIMER_RATE);
  }

  render() {
    const styling = {opacity: this.state.opacity};
    return <div style={styling} className='fade'>{this.props.children}</div>;
  }
}

OpacityFade.propTypes = {
  life: PropTypes.number,
  children: PropTypes.node,
  onFadeIn: PropTypes.func,
  onFadeOut: PropTypes.func,
  fadeRate: PropTypes.number,
};

OpacityFade.defaultProps = {
  life: DEFAULT_LIFE,
  fadeRate: FADE_RATE,
  onFadeIn: () => {},
  onFadeOut: () => {},
};

module.exports = OpacityFade;
