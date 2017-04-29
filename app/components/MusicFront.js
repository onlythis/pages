import React from 'react';

export default class MusicFront extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleAdd(e, dirr) {
    e.preventDefault();
    var recipes = this.state.recipes;
    recipes.push({contents: "hello"});
    this.setState({recipes});
  }
  handleRemove(e, i) {
    e.preventDefault();
    var recipes = this.state.recipes;
    var hidden = this.state.hidden;
    var favs = this.state.favs;
    favs.splice(i,1);
    hidden.splice(i,1);
    recipes.splice(i, 1);
    this.setState({recipes, hidden});
  }
  handleExpand(e, i) {
    e.preventDefault();
    var hidden = this.state.hidden;
    hidden[i] = !hidden[i];
    this.setState({hidden});
  }
  handleFav(e, i) {
    e.preventDefault();
    var favs = this.state.favs;
    favs[i] = !favs[i];
    this.setState({favs});
  }
  componentDidUpdate() {
    let panel_h = document.getElementsByClassName('panel-resizable')[0].offsetHeight;
    console.log(panel_h);
  }

  render() {
    return (
      <div className = "col-md-8 music-front-container" style={{background: `linear-gradient(to right, #3ad755, #e44455)`}}>
        <div className="col-md-6">
          <div className="row">
            <div className="davidcutterimg" style={{height: "200px", width: "200px"}}>
              <div className="playbutton">
                <span className="glyphicon glyphicon-play"></span>
              </div>
            </div>
          </div>
          <div className="row">
            David Cutter
          </div>
        </div>
      </div>
    )
  }
}
