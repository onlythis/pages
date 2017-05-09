import React from 'react';

export default class MusicFrontSongs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColors: ['rgba(80,20,20,20)','rgba(20,80,20,20)', 'rgba(20,20,80,20)'],
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
      shuffler: [0,1,2],
      shuffled: [],
      row_counter: [0,1,2]
    }
  }

  componentWillMount() {
    var row_counter = this.state.row_counter;
    var shuffler = this.state.shuffler;
    var shuffled = this.state.shuffled;
    row_counter.map((_, x) => {
      shuffler.map((_, y) => {
        let rand=Math.floor(Math.random() * shuffler.length);
        let temp=shuffler[y];
        shuffler[y]=shuffler[rand];
        shuffler[rand]=temp;
      })
      shuffled.push(new Array(shuffler[0], shuffler[1], shuffler[2]));
    });
    this.setState({shuffled});
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  albumSelect(e, ind) {
    e.preventDefault();
    this.props.onClick(ind);
  }
  AlbumsClicked(e) {
    e.preventDefault();
    this.props.TabSel(1);
  }

  render() {
    var tabindex = this.props.tabindex;
    var color_left = this.state.backgroundColors[tabindex];
    var color_right = this.state.backgroundColors[(tabindex+1)%3];
    var albums = this.state.albums;
    var row_counter = this.state.row_counter;
    var shuffled = this.state.shuffled;
    return (
      <div className = "col-md-8 music-front-container" style={{background: `linear-gradient(to right, ${color_left}, ${color_right})`, height: "2000px"}}>
        <div className="music-nav">
          <div className="row">
            <span className="music-nav-item" id="music-nav-item-first">Songs</span>
            <span className="music-nav-item" onClick={(e) => this.AlbumsClicked(e)}>Albums</span>
          </div>
        </div>
        {row_counter.map((_, x) => {
          return (
            <div key={x} className="row">
              {albums.map((album, i) => {
                let ind = shuffled[x][i];
                return (
                  <div key={i}>
                    <div className="col-md-4 album-cont">
                      <div className="row music-img">
                        <div className={`album-cover ${albums[ind].cover}`} onClick={e => this.albumSelect(e, ind)}>
                          <div className="playbutton">
                            <span className="glyphicon glyphicon-play"></span>
                          </div>
                        </div>
                      </div>
                      <div className="img-info">
                        <div className="row">
                          <a className="album-title">{albums[ind].title}</a> • <a className="artist-name">{albums[ind].artist}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )})}
              </div>
            )})}
          </div>
        )
      }
    }
