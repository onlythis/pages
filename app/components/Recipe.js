import React from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Motion, spring, Spring, StaggeredMotion, presets} from 'react-motion';

export default class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {contents: "chickenpotpie"},
        {contents: "onionsoup"},
        {contents: "garlicbread"}
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
    return (
      <div>
        <button type="button" className="btn btn-default" onClick={(e) => this.handleAdd(e)}>
          Add
        </button>
        {recipes.map((recipe, i) => {
          // i is comment's index in comments array
          return (
            <div key={i} className="row" style={{margin: 0}}>
              <ul key={i} className="recipes-list-container">
                <li key={i} id={i} className="recipe-item" onClick={(e) => this.handleRemove(e, i)}> {recipe.contents} </li>
              </ul>
            </div>
          );
        })}
        <br/>

      </div>
    )
  }
}
