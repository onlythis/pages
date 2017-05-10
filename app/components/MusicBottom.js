import React from 'react';

export default class MusicBottom extends React.Component {
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
      tracklist: [["Melon", "Honey", "Sunroof", "There For You", "The World"], ["Intro (Neon City)", "Cold Blooded", "In the Morning", "Secret Weapon", "Electrify Me", "Numb"], ["Death", "Pirouette", "Murakami", "Mantis", "Panther", "Ghosts", "Lunette"]],

    }
  }


  render() {
    var tabindex = this.props.tabindex;
    var albums = this.state.albums;
    var tracklist = this.state.tracklist;
    var count = 0;
    return (
      <div className = "music-bottom affix">
        <div className="col-md-3">
          Hello
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
