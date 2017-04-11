import React from 'react';

export default class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {contents: "Chicken Pot Pie",
          ingredients: ["chicken", "pot", "pie"],
          description: "chicken in a pot or a pie"},
        {contents: "Onion Soup",
          ingredients: ["onion","soup"],
          description: "its pretty good"},
        {contents: "Garlic Bread",
          ingredients: ["garlic","bread"],
          description: "very good"}
        ],
      backgroundColors: ['rgba(80,20,20,20)','rgba(20,80,20,20)', 'rgba(20,20,80,20)'],
      hidden: [0,1,1],
      favs: [1,0,0],
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
  render() {
    var tabindex = this.props.tabindex;
    let favsindex = this.state.favs;
    let favsbuttoncolor = [];
    favsindex.map((fav) => {
      if(fav) {
        favsbuttoncolor.push("btn btn-default interact-but fav-but fav-red");
      } else {
        favsbuttoncolor.push("btn btn-default interact-but fav-but");
      }
    });
    var recipes = this.state.recipes;
    var panelhide = [];
    if(tabindex == 0) {
      favsindex.map((fav) => {
        if(fav) {
          panelhide.push("row panel panel-default");
        } else {
          panelhide.push("row panel panel-default hide");
        }
      });
    } else {
      favsindex.map((fav) => {
        panelhide.push("row panel panel-default");
      });
    }
    var color = this.state.backgroundColors[tabindex];
    let hidden = this.state.hidden;
    let panelbodyclasses = [];
    let hrclasses = [];
    let expandglyph = [];
    hidden.map((hide) => {
      if(hide) {
        panelbodyclasses.push(`panel-body hide`);
        hrclasses.push("panel-body hr-nopad hide");
        expandglyph.push("glyphicon glyphicon-chevron-up");
      } else {
        panelbodyclasses.push(`panel-body nothide`);
        hrclasses.push("panel-body hr-nopad nothide");
        expandglyph.push("glyphicon glyphicon-chevron-down");
      }
    });

    return (
      <div className = "col-md-8 recipe-list" style={{backgroundColor: `${color}`}}>
        <div className="recipes-list-container">
          {recipes.map((recipe, i) => {
            return (
              <div key={i} className={panelhide[i]}>
                <div className="row interact-header-container">
                  <div className="col-md-6">
                  <div className="pull-left">
                    <p className="interact-recipes-panel-header">{recipe.contents}</p>
                  </div>
                  </div>
                    <div className="col-md-2">
                    <button type="button" className="btn btn-default interact-but expand-but" onClick={(e) => this.handleExpand(e, i)}>
                      <span className={expandglyph[i]}></span>
                    </button>
                    </div>
                    <div className="col-md-2">
                    <button type="button" className={favsbuttoncolor[i]} onClick={(e) => this.handleFav(e, i)}>
                      <span className="glyphicon glyphicon-heart"></span>
                    </button>
                    </div>
                    <div className="col-md-2">
                    <button type="button" className="btn btn-default interact-but del-but" onClick={(e) => this.handleRemove(e, i)}>
                      <span className="glyphicon glyphicon-remove"></span>
                    </button>
                  </div>
                </div>
                <hr className={hrclasses[i]}/>
                <div className={panelbodyclasses[i]}>
                  <div className="col-md-3">
                    {recipe.ingredients.map((ingredient, j) => {
                      return (
                        <div key={j} className="row ingredient-row">
                          <div className="pull-left">
                            <p className="ingredient">{ingredient}</p>
                          </div>
                          <div className="pull-right quantity-div">
                            <p className="quantity">4</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="col-md-6">
                    {recipe.description}
                  </div>
                  <div className="col-md-3">
                    pic
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  }
}
