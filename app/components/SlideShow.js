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
          <Motion style={{x: spring(this.state.imgindex, { stiffness: 230, damping: 30 })}}>
            {({x}) => <div>
                      <div style={{  left: x*window.innerWidth/2-150, position: 'absolute'}} className="demo1-ball slide-circle-first"> </div>
                      <div style={{  left: (x-1)*window.innerWidth/2-150, position: 'absolute'}} className="demo1-ball slide-circle-second"></div>
                      <div style={{  left: (x-2)*window.innerWidth/2-150, position: 'absolute'}} className="demo1-ball slide-circle-third"> </div>
                      </div>}
        </Motion>
        <a className="btn btn-default slide-prev" onClick={(e) => this.handleNext(e,-1)}>
          &#10094;
        </a>
        <a className="btn btn-default slide-next" onClick={(e) => this.handleNext(e, 1)}>
          &#10095;
        </a>
      </div>
      <div className="slideshow-cover" style={{width:window.innerWidth/2-150}}></div>
      <div className="slideshow-cover" style={{width:window.innerWidth/2-150, right: 0}}></div>
      <div className="slideshow-pic-back" style={{left: window.innerWidth/2-150}}></div>
    </div>
  )
}
}
