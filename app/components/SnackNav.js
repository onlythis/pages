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
          <div className="snacknav-buttons">
            <div className="btn-group" role="group">
              <Link to="#"><button type="button" className="btn btn-default navbar-btn">
                Snap & Snack
              </button></Link>
            </div>
          </div>
        </div>
        </div>
      </nav>
    )
  }
}
