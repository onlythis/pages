import SearchBar from './Searchbar';
import React from 'react';

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
            <a className="navbar-brand" href="#">
              <span className="glyphicon glyphicon-home"></span>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <div className="nav navbar-nav navbar-left">
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-default navbar-btn">
                    Home
                  </button>
                </div>
                <div className="btn-group" role="group">
                <ul className="nav nav-pills dropdown-ul">
                  <li className="dropdown">
                    <a href="#" data-toggle="dropdown" className="dropdown-toggle">Menu</a>
                    <ul className="dropdown-menu" id="menu1">
                      <li>
                        <a href="#">2-level Menu <i className="icon-arrow-right"></i></a>
                        <ul className="dropdown-menu sub-menu">
                          <li><a href="#">Action</a></li>
                        </ul>
                      </li>
                      <li className="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
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
