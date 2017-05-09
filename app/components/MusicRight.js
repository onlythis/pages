import React from 'react';
import SearchBar from './Searchbar';
import {Link} from 'react-router';
import ReactDOM from 'react-dom';
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
      tracklist: [["Melon", "Honey", "Sunroof", "There For You", "The World"], ["Intro (Neon City)", "Cold Blooded", "Innnnnnnnnnnnnnnnnnnnnnnnnnnnnn the Morning", "Secret Weapon", "Electrify Me", "Numb"], ["Death", "Pirouette", "Murakami", "Mantis", "Panther", "Ghosts", "Lunette"]],
      similar: ["One", "Two", "Three"]
    }
  }
  componentWillMount() {
    var tracklist = [];
    for(let i = 0; 10>i; i++){
      tracklist.push(<div className="row popular-rec" key={i}>Chicken and rice</div>);
    }
  }
  componentDidMount() {
    let icon = this.refs.mycomponent;
    const domNode = ReactDOM.findDOMNode(icon);
    domNode.getBoundingClientRect()
    console.log(domNode);
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
    var similar = this.state.similar;
    var margin = (((window.innerWidth-17)/6)-(window.innerWidth*.135))/2;
    return (
      <div className = "col-md-2 music-right" ref="mycomponent">
        <div className="affix" style={{background: `linear-gradient(#332222, #141445)`, height: window.innerHeight}}>
          <div className={`album-cover-right ${albums[sel].cover}`} style={{marginLeft: margin, marginRight: margin}}>
          </div>
          <div className="album-right-info" style={{marginLeft: margin, marginRight: margin}}>
            <div className="row">
              <p className="album-title-right pull-left">{albums[sel].title}</p> • <p className="artist-name-right pull-right">{albums[sel].artist}</p>
            </div>
          </div>
          <div className="album-tracklist" style={{marginLeft: margin, marginRight: margin}}>
            {tracklist[sel].map((track, i) => {
              return (
                <div key={i} className="row album-tracklist-row" >
                  <div className="pull-left col-md-1" style={{padding: 0, marginTop: "2px", height: "20px"}}><p className="album-track-num">{i+1}.</p>
                  <span className="glyphicon glyphicon-play track-playbutton"></span></div>
                  <div className="pull-right col-md-11 album-tracklist-right" style={{padding: 0, paddingLeft: "10px"}}><p className="album-track">{track}</p></div>
                </div>
              )
            })}
          </div>
          <hr />
          <div className="album-similar" style={{marginLeft: margin, marginRight: margin}}>
            <p className="similar">Similar</p>
            {similar.map((track, i) => {
              return (
                <div key={i} className="row">
                  <p className="similar-track">{track}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
