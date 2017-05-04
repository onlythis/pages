import React from 'react';
import SearchBar from './Searchbar';
import {Link} from 'react-router';
export default class MusicRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      tracklist: ["one", "two", "three"]
    }
  }
  componentWillMount() {
    var tracklist = [];
    for(let i = 0; 10>i; i++){
      tracklist.push(<div className="row popular-rec" key={i}>Chicken and rice</div>);
    }
  }

  handleClick(e, ind) {
    e.preventDefault();
    var active = this.state.active;
    active = ind;
    this.props.onSelect(ind);
    this.setState({active});
  }
  render() {
    var menuItems = this.state.menuItems;
    var sel = this.props.albumSel;
    var albums = this.state.albums;
    var tracklist = this.state.tracklist;
    return (
      <div className = "col-md-2 music-right">
        <div className="affix" style={{background: `linear-gradient(#332222, #141445)`, height: window.innerHeight}}>
          <div className={`album-cover-right ${albums[sel].cover}`} onClick={e => this.albumSelect(e, ind)}>
          </div>
          <div className="album-right-info">
            <div className="row">
              <a className="album-title">{albums[sel].title}</a> • <a className="artist-name">{albums[sel].artist}</a>
            </div>
          </div>
          <div className="album-tracklist">
            {tracklist.map((track, i) => {
              return (
                <div className="row">
                  <a className="album-track">{track}</a>
                </div>
              )
            })}
          </div>
          <hr />
          <p className="similar">Similar</p>
          <div className="album-tracklist">
            {tracklist.map((track, i) => {
              return (
                <div className="row">
                  <a className="album-track">{track}</a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
