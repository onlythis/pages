import React from 'react';

export default class Panel extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    value: "asdf"
  };
}

  handleRefresh(e) {
  e.preventDefault();
  var value=this.state.value;
    this.setState({value: value + "f"});
  }
  render() {
    var value = this.state.value;

    return (
    <div className="col-md-6">
    <div className="panel panel-default">
      <p className="panel-header">TreeTwoD</p>
      <hr />
      <div className="panel-body">
        <div className="row">
          <div className="col-md-12">
            <canvas width = "512" height = "512" id = "my_Canvas"></canvas>
            </div>
          </div>
        </div>
        <div className="panel-footer">
          <div className="row">
            <div className="col-md-12">
              <div className="btn-group panel-footer-btn" role="group">
                <button type="button" className="btn btn-default" onClick={(e) => this.handleRefresh(e)}>
                  Refresh
                </button>
              </div>
              <p>{value}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }
