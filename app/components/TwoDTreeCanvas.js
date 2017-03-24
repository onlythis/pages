import React from 'react';

export default class TwoDTreeCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.refresh();
  }
  refresh() {
    const script = document.createElement("script");
    script.src = "scripts/TreeTwoD.js";
    script.async = true;

    document.body.appendChild(script);
  }
  handleRefresh(e) {
  e.preventDefault();
  this.refresh();
  var count = this.state.count;
  this.setState({count: count+1});
  }
  render() {
    var count = this.state.count;
    return (
      <div className="col-md-6">
        <div className="panel panel-default">
          <p className="panel-header">TwoDTree</p>
          <hr />
          <div className="panel-body">
            <canvas width = "512" height = "512" id = "my_Canvas"></canvas>
          </div>
          <div className="panel-footer">
            <div className="row">
              <div className="col-md-12">
                <div className="btn-group panel-footer-btn" role="group">
                  <button type="button" className="btn btn-default" onClick={(e) => this.handleRefresh(e)}>
                    Refresh
                  </button>
                </div>
                <p>Refresh Count: {count}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
