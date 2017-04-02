import React from 'react';
import {Link} from 'react-router';

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
    return (
      <div>
        <div className="slideshow-container">

        <div className="mySlides fade">
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

        <div >
          <span className="dot" onclick="currentSlide(1)"></span>
          <span className="dot" onclick="currentSlide(2)"></span>
          <span className="dot" onclick="currentSlide(3)"></span>
        </div>
        </div>
    )
  }
}
