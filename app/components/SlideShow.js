import React from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Motion, spring} from 'react-motion';
export default class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.refresh();
  }
  refresh() {
    const script = document.createElement("script");
    script.src = "scripts/Slides.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    var ReactCSStransitionGroup = require('react-addons-css-transition-group');
    return (
      <div>
        <img src="../img/onion-soup.JPG" />
          <ReactCSSTransitionGroup transitionName = "example"
                 transitionAppear = {true} transitionAppearTimeout = {500}
                 transitionEnter = {false} transitionLeave = {false}>

                 <h1>My Element...</h1>
              </ReactCSSTransitionGroup>
              <Motion defaultStyle={{x: 0}} style={{x: spring(100)}}>
  {value => <div>{value.x}</div>}
</Motion>
        <div className="slideshow-container">

        <div className="mySlides">
          <div className="numbertext">1 / 3</div>
          <img src="../img/onion-soup.JPG" />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src="../img/garlic-bread.JPG" />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src="../img/chicken-pot-pie.JPG" />
          <div className="text">Caption Three</div>
        </div>

        <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a className="next" onclick="plusSlides(1)">&#10095;</a>

        </div>
        <br />

        <div className="center">
          <span className="dot" onclick="currentSlide(1)"></span>
          <span className="dot" onclick="currentSlide(2)"></span>
          <span className="dot" onclick="currentSlide(3)"></span>
        </div>
        </div>
    )
  }
}
