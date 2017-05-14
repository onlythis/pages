import React from 'react';

export default class MusicBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    }
    this.progressBar();
  }
  progressBar() {
    const script = document.createElement("script");
    script.src = "scripts/progressBarMove.js";
    script.async = true;
    document.body.appendChild(script);
  }
  progressPause() {
    window.progressPause();
  }
  progressResume() {
    window.progressResume();
  }
  playButton() {
    if(this.state.playing) {
      this.progressPause();
      this.setState({playing: false});
    } else {
      this.progressResume();
      this.setState({playing: true});
    }
  }
  render() {
    var track = this.props.trackInfo;
    if(this.state.playing){
      var playButton = <span className="glyphicon glyphicon-pause" onClick={(e) => this.playButton()}></span>;
    } else {
      var playButton = <span className="glyphicon glyphicon-play" onClick={(e) => this.playButton()}></span>;
    }

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
            <span className="glyphicon glyphicon-step-backward" onClick={(e) => this.progressPause()}></span>
            {playButton}
            <span className="glyphicon glyphicon-step-forward" onClick={(e) => this.progressResume()}></span>
            <span className="glyphicon glyphicon-repeat"></span>
          </div>
          <div className="row progress-bar-cont">
            <div className="progress-bar" id="progress-bar"></div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="volume">
            <span className="volume-glyph glyphicon glyphicon-volume-up"></span>
            <div className="volume-cont">
              <span className="volume-bar"></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
