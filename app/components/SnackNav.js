import React from 'react';
import {Link} from 'react-router';

export default class SnackNav extends React.Component {
  constructor(props) {
    super(props);
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

          <div className="snacknav">
            <ul className="nav navbar-nav snacknav-menu">
              <li className="snacknav-menu-item"><Link to="snapnsnack/bubbles">
                Bubbles
              </Link></li>
            <li className="snacknav-menu-item dropdown"><Link to="snapnsnack">
                Snap & Snack
            </Link>
                <ul className="dropdown-menu" id="snack-dropdown">
                  <li><Link to="snapnsnack">menu item</Link></li>
                  <li><Link to="snapnsnack">stuff</Link></li>
                  <li><Link to="snapnsnack">things</Link></li>
                </ul>
              </li>
              <li className="snacknav-menu-item"><Link to="snapnsnack/recipes">
                SlideShow
              </Link></li>
              </ul>
          </div>
        </div>
        </div>
      </nav>
    )
  }
}
