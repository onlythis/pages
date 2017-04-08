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
      hidden: [1,1,1]
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
    recipes.splice(i, 1);
    this.setState({recipes});
  }
  handleExpand(e, i) {
    e.preventDefault();
    var hidden = this.state.hidden;
    hidden[i] = !hidden[i];
    this.setState({hidden});
  }
  handleDelete(e) {
    e.preventDefault();
  }
  render() {
    var recipes = this.state.recipes;
    var color = this.props.backgroundcolor;
    let hidden = this.state.hidden;
    let panelbodyclasses = [];
    let hrclasses = [];
    let expandglyph = [];
    hidden.map((hide) => {
      if(hide) {
        panelbodyclasses.push(`panel-body hide`);
        hrclasses.push("panel-body hide");
        expandglyph.push("glyphicon glyphicon-chevron-up");
      } else {
        panelbodyclasses.push(`panel-body nothide`);
        hrclasses.push("panel-body nothide");
        expandglyph.push("glyphicon glyphicon-chevron-down");
      }
    })
    let buttonMargin = ((window.innerWidth/12*8-40)/2 - 35*3)/3;
    return (
      <div className = "col-md-8 recipe-list" style={{backgroundColor: `${color}`}}>
        <div className="recipes-list-container">
          {recipes.map((recipe, i) => {
            return (
              <div key={i} className="row panel panel-default">
                <div className="row interact-header-container">
                  <div className="pull-left">
                    <p className="interact-recipes-panel-header">{recipe.contents}</p>
                  </div>
                  <div className="interact-right-buttons">
                    <button type="button" className="btn btn-default interact-but expand-but" onClick={(e) => this.handleExpand(e, i)} style={{marginRight: `${buttonMargin}`}}>
                      <span className={expandglyph[i]}></span>
                    </button>
                    <button type="button" className="btn btn-default interact-but fav-but" onClick={(e) => this.handleDelete(e)} style={{marginRight: `${buttonMargin}`}}>
                      <span className="glyphicon glyphicon-heart"></span>
                    </button>
                    <button type="button" className="btn btn-default interact-but del-but" onClick={(e) => this.handleRemove(e, i)} style={{marginRight: `${buttonMargin}`}}>
                      <span className="glyphicon glyphicon-remove"></span>
                    </button>
                  </div>
                </div>
                <hr className={hrclasses[i]}/>
                <div className={panelbodyclasses[i]}>
                  <div className="col-md-4">
                    {recipe.ingredients.map((ingredient, j) => {
                      return (
                        <div key={j} className="row ingredient-row">
                          <div className="pull-left">
                            <p className="ingredient">{ingredient}</p>
                          </div>
                          <div className="pull-right">
                            <p className="quantity">4</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="col-md-5">
                    {recipe.description}
                  </div>
                  <div className="col-md-3">
                    Ingredients, quantities, times, portions, pic, description, notes
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
