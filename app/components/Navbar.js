import SearchBar from './Searchbar';
import React from 'react';
import {Link} from 'react-router';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  searchHandler(e) {
    this.props.searchHandler(e);
  }
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fullwidth">
          <div className="navbar-header">
            <Link to='#'><button type="button" className="btn btn-default navbar-btn">
              <span className="glyphicon glyphicon-home"></span>
            </button></Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <div className="nav navbar-nav navbar-left">
                <Link to="resume"><button type="button" className="btn btn-default navbar-btn">
                  Resume
                </button></Link>
                <Link to="snapnsnack"><button type="button" className="btn btn-default navbar-btn">
                  Snap & Snack
                </button></Link>
                <a href="https://onlythis.github.io/three3d/"><button type="button" className="btn btn-default navbar-btn">
                  threeD Maze
                </button></a>
                <Link to="music"><button type="button" className="btn btn-default navbar-btn">
                  Simplify
                </button></Link>
            </div>
            <div className="nav navbar-nav navbar-right">
              <SearchBar searchHandler={(e) => this.searchHandler(e)}/>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
