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
      row_counter: [0,1,2],
      tracklist: [["Melon", "Honey", "Sunroof", "There For You", "The World"], ["Intro (Neon City)", "Cold Blooded", "In the Morning", "Secret Weapon", "Electrify Me", "Numb"], ["Death", "Pirouette", "Murakami", "Mantis", "Panther", "Ghosts", "Lunette"]],
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
  SongClicked(e, i, j) {
    e.preventDefault();
    let artist = this.state.albums[i].artist;
    let album = this.state.albums[i].title;
    let song = this.state.tracklist[i][j];
    let cover = this.state.albums[i].cover;
    this.props.TrackSel(artist, album, song, cover);
  }
  render() {
    var tabindex = this.props.tabindex;
    var color_left = this.state.backgroundColors[tabindex];
    var color_right = this.state.backgroundColors[(tabindex+1)%3];
    var albums = this.state.albums;
    var row_counter = this.state.row_counter;
    var shuffled = this.state.shuffled;
    var tracklist = this.state.tracklist;
    var count = 0;
    return (
      <div className = "col-md-8 music-front-container" style={{background: `linear-gradient(to right, ${color_left}, ${color_right})`, height: "2000px"}}>
        <div className="music-nav">
          <div className="row">
            <span className="music-nav-item music-nav-item-active" id="music-nav-item-first">Songs</span>
            <span className="music-nav-item" onClick={(e) => this.AlbumsClicked(e)}>Albums</span>
          </div>
        </div>
        {tracklist.map((artist, i) => {
          return (
            <div key={i}>
              {artist.map((song, j) => {
                count+=1;
                return (
                  <div key={j} className="row song-row" onClick={(e) => this.SongClicked(e, i, j)}>
                    <div className="col-md-1 song-num-button">
                      <div className="rack-count-num" style={{height: "40px"}}><p className="song-track-num">{count}) </p>
                      <span className="glyphicon glyphicon-play song-playbutton"></span></div>
                    </div>
                    <div className="col-md-11">
                      <div className="row">
                        <a className="song-title">{song}</a>
                      </div>
                      <div className="row">
                        <a className="song-artist">{albums[i].artist} •</a> <a className="song-album">{albums[i].title}</a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
          </div>
        )
      }
    }
