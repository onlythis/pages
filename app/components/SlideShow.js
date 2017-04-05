import React from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Motion, spring, Spring, StaggeredMotion, presets} from 'react-motion';
export default class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgindex: 1
    }
  }

  handleNext(e, dirr) {
    e.preventDefault();
    let imgindex = this.state.imgindex+dirr;
    this.setState({imgindex});
  }
  render() {
    var ReactCSStransitionGroup = require('react-addons-css-transition-group');
    var leftpix=this.state.imgindex;
    return (
      <div>
        <div className="slideshow-container">
          <Motion style={{x: spring(this.state.imgindex*150, { stiffness: 130, damping: 30 })}}>
            {({x}) => <div style={{  left: x, position: 'absolute'}} className="demo1-ball slide-circle">
            <div style={{  left: x/2, position: 'absolute'}} className="demo1-ball slide-circle"></div>
          </div>}
        </Motion>
        <button type="button" className="btn btn-default slide-prev" onClick={(e) => this.handleNext(e,-1)}>
          &#10094;
        </button>
        <button type="button" className="btn btn-default slide-next" onClick={(e) => this.handleNext(e, 1)}>
          &#10095;
        </button>
      </div>
    </div>
  )
}
}
