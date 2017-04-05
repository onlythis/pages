import React from 'react';
import {StaggeredMotion, spring, presets} from 'react-motion';

const Demo = React.createClass({
  getInitialState() {
    return {x: 250, y: 300};
  },

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('touchmove', this.handleTouchMove);
  },
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener('touchmove', this.handeTouchMove);
  },

  handleMouseMove({pageX: x, pageY: y}) {
    this.setState({x, y});
  },

  handleTouchMove({touches}) {
    this.handleMouseMove(touches[0]);
  },

  getStyles(prevStyles) {
    // `prevStyles` is the interpolated value of the last tick
    const endValue = prevStyles.map((_, i) => {
      return i === 0
        ? this.state
        : {
            x: spring(prevStyles[i - 1].x, presets.gentle),
            y: spring(prevStyles[i - 1].y, presets.gentle),
          };
    });
    return endValue;
  },

  render() {
    return (
      <StaggeredMotion
        defaultStyles={[1,2,3,4,5,6].map(() => ({x: 0, y: 0}))}
        styles={this.getStyles}>
        {balls =>
          <div className="demo1">
            {balls.map(({x, y}, i) =>
              <div
                key={i}
                className={`demo1-ball ball-${i}`}
                style={{
                  WebkitTransform: `translate3d(${x - 30}px, ${y - 70}px, 0)`,
                  zIndex: balls.length - i,
                }} />
            )}
          </div>
        }
      </StaggeredMotion>
    );
  },
});

export default Demo;
