import React from 'react';

export default class MusicBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1
    }
  }

  progressBar() {
    var width = parseInt(this.state.width);
    const script = document.createElement("script");
    script.src = "scripts/progressBarMove.js";
    script.setAttribute("width", width.toString());
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    var track = this.props.trackInfo;
    return (
      <div className = "music-bottom affix">
        <div className="col-md-3 no-padding">
          <div className={`col-md-4 music-bottom-albumcover ${track[3]}`}>
          </div>
          <div className="col-md-8">
            <div className="row music-bottom-trackname">
              {track[2]}
            </div>
            <div className="row music-bottom-trackartist">
              {track[0]}
            </div>
            <div className="row music-bottom-trackalbum">
              {track[1]}
            </div>
          </div>
        </div>
        <div className="col-md-6 music-bottom-controls">
          <div className="row music-controls-glyphs">
            <span className="glyphicon glyphicon-random"></span>
            <span className="glyphicon glyphicon-step-backward"></span>
            <span className="glyphicon glyphicon-play" onClick={(e) => this.progressBar()}></span>
            <span className="glyphicon glyphicon-step-forward"></span>
            <span className="glyphicon glyphicon-repeat"></span>
          </div>
          <div className="row progress-bar-cont">
            <div className="progress-bar" id="progress-bar"></div>
          </div>
        </div>
        <div className="col-md-3">
          Hello
        </div>
      </div>
    )
  }
}
