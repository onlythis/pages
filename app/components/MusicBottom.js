import React from 'react';

export default class MusicBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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
        <div className="col-md-6">
          Hello
        </div>
        <div className="col-md-3">
          Hello
        </div>
      </div>
    )
  }
}
