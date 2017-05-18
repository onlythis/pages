import React from 'react';

export default class MusicBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      albums: [
        { cover: "davidcutterimg",
          title: "S2",
          artist: "David Cutter"
        },
        { cover: "genwhyimg",
          title: "GENERATIONWHY",
          artist: "ZHU"
        },
        { cover: "madeinheightsimg",
          title: "Without My Enemy What Would I Do",
          artist: "Made in Heights"
        }
      ],
      tracklist: [["Melon", "Honey", "Sunroof", "There For You", "The World"], ["Intro (Neon City)", "Cold Blooded", "In the Morning", "Secret Weapon", "Electrify Me", "Numb"], ["Death", "Pirouette", "Murakami", "Mantis", "Panther", "Ghosts", "Lunette"]],
      currTrack: 0,
    }
    this.progressBar();
    window.musicBottom = this;
  }
  progressBar() {
    const script = document.createElement("script");
    script.src = "scripts/progressBarMove.js";
    script.async = true;
    document.body.appendChild(script);
  }
  playButton() {
    if(this.state.playing) {
      window.progressPause();
      this.setState({playing: false});
    } else {
      window.progressResume();
      if(this.state.currTrack==0){
        this.setState({currTrack: new Array(0,0)});
      }
      this.setState({playing: true});
    }
  }
  backTrack() {
    if(this.state.currTrack[1]==0){
      if(this.state.currTrack[0]==2){
        this.setState({currTrack: new Array(1,5)});
      }
      if(this.state.currTrack[0]==1){
        this.setState({currTrack: new Array(0,4)});
      }
      if(this.state.currTrack[0]==0){
        this.setState({currTrack: 0});
      }
    } else {
      this.setState({currTrack: new Array(this.state.currTrack[0], this.state.currTrack[1]-1)});
    }
    window.moveNext(this.state.playing);
  }
  nextTrack() {
      if(this.state.currTrack[0]==2 && this.state.currTrack[1]==6){
        this.setState({currTrack: new Array(3,0)});
      }
      else if(this.state.currTrack[0]==1 && this.state.currTrack[1]==5){
        this.setState({currTrack: new Array(2,0)});
      }
      else if(this.state.currTrack[0]==0 && this.state.currTrack[1]==4){
        this.setState({currTrack: new Array(1,0)});
      }
    else {
      this.setState({currTrack: new Array(this.state.currTrack[0], this.state.currTrack[1]+1)});
    }
    window.moveNext(this.state.playing);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({currTrack: nextProps.trackInfo});
  }
  render() {
    var trackInd = this.state.currTrack;
    try {
      var artist = this.state.albums[trackInd[0]].artist;
      var album = this.state.albums[trackInd[0]].title;
      var song = this.state.tracklist[trackInd[0]][trackInd[1]];
      var cover = this.state.albums[trackInd[0]].cover;
    } catch(e) {
      var artist, album, song, cover = null;
    }
    if(this.state.playing){
      var playButton = <span className="glyphicon glyphicon-pause" onClick={(e) => this.playButton()}></span>;
    } else {
      var playButton = <span className="glyphicon glyphicon-play" onClick={(e) => this.playButton()}></span>;
    }

    return (
      <div className = "music-bottom affix">
        <div className="col-md-4 no-padding">
          <div className={`col-md-4 music-bottom-albumcover ${cover}`}>
          </div>
          <div className="music-bottom-text-cont">
            <div className="row music-bottom-trackname">
              {song}
            </div>
            <div className="row music-bottom-trackartist">
              {artist}
            </div>
            <div className="row music-bottom-trackalbum">
              {album}
            </div>
          </div>
        </div>
        <div className="col-md-4 music-bottom-controls">
          <div className="row music-controls-glyphs">
            <span className="glyphicon glyphicon-random"></span>
            <span className="glyphicon glyphicon-step-backward" onClick={(e) => this.backTrack()}></span>
            {playButton}
            <span className="glyphicon glyphicon-step-forward" onClick={(e) => this.nextTrack()}></span>
            <span className="glyphicon glyphicon-repeat"></span>
          </div>
          <div className="row progress-bar-cont">
            <div className="progress-bar" id="progress-bar"></div>
          </div>
        </div>
        <div className="col-md-4">
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
