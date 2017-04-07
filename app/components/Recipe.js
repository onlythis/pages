import React from 'react';

export default class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {contents: "chickenpotpie",
          ingredients: ["chicken", "pot", "pie"],
          description: "chicken in a pot or a pie"},
          {contents: "onionsoup",
            ingredients: ["onion","soup"],
            description: "its pretty good"},
            {contents: "garlicbread",
              ingredients: ["garlic","bread"],
              description: "very good"}
            ]
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
        render() {
          var recipes = this.state.recipes;
          var color = this.props.backgroundcolor;
          return (
            <div className = "col-md-7 recipe-list" style={{backgroundColor: `${color}`}}>
              <div className="recipes-list-container">
                {recipes.map((recipe, i) => {
                  return (
                    <div key={i} className="row panel panel-default" style={{margin: 0}}>
                      <p className="panel-header" onClick={(e) => this.handleRemove(e, i)}> {recipe.contents} </p>
                      <hr />
                      <div className="panel-body">
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
