import React from 'react';
import {Link} from 'react-router';
export default class FadeShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ height: 0}}>
        <div style={{left: window.innerWidth/2-50, top: "150px"}} className="fadeshow">
          <div className="fade-slide1"></div>
          <div className="fade-slide2"></div>
          <div className="fade-slide3"></div>
        </div>
        <div style={{left: window.innerWidth/2-250}} className="fadeshow-background">
        </div>
      </div>
    )
  }
}
