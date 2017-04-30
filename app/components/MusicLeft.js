import React from 'react';
import SearchBar from './Searchbar';
export default class MusicLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: ["Favorites", "New", "Browse"],
      active: 1,
      backgroundColors: ["rgba(80,20,20,20)",'rgba(20,80,20,20)', 'rgba(20,20,80,20)'],
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
    return (
      <div className = "col-md-2 music-left">
        <div className="affix" style={{background: `linear-gradient(#332222, #141445)`, height: window.innerHeight}}>
          <span id="music-icon-check" className="glyphicon glyphicon-ok"></span>
          <hr />
          <div className="music-search-cont navbar">
            <SearchBar searchHandler={(e) => this.searchHandler(e)} music="true"/>
          </div>
          <hr />
          <ul className = "music-left-list-container">
            {menuItems.map((item, i) => {
              if(this.state.active == i){
                var activate = "active";
                var color = this.state.backgroundColors[i];
              }
              else { var activate = "not-active"; var color = "transparent";}
              return (
                <div key={i} className = "row" >
                  <li className={`music-left-p ${activate}`} style={{backgroundColor: `${color}`}} onClick={(e) => this.handleClick(e, i)}> {item} </li>
                </div>
              )
            }
          )}
          </ul>
        </div>
      </div>
  )
}
}
