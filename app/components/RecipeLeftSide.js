import React from 'react';

export default class RecipeLeftSide extends React.Component {
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
      <div className = "col-md-2 recipe-leftside">
        <ul className = "recipe-sidebar-list-container">
          {menuItems.map((item, i) => {
            if(this.state.active == i){
              var activate = "active";
              var color = this.state.backgroundColors[i];
            }
            else { var activate = "not-active"; var color = "transparent";}
            return (
              <div key={i} className = "row" >
                <li className={`recipe-sidebar-p ${activate}`} style={{backgroundColor: `${color}`}} onClick={(e) => this.handleClick(e, i)}> {item} </li>
              </div>
            )
          }
        )}
      </ul>
    </div>
  )
}
}
