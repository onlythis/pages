import React from 'react';

export default class TwoDTreeCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      widthValue: 64,
      heightValue: 64
    };
    this.refresh();
  }
  refresh() {
    var width = parseInt(this.state.widthValue);
    var height = parseInt(this.state.heightValue);
    if(width>512 || width < 1){
      console.log("invalid input");
    }
    const script = document.createElement("script");
    script.src = "scripts/TreeTwoD.js";
    script.setAttribute("width", width.toString());
    script.setAttribute("height", height.toString());

    script.async = true;
    document.body.appendChild(script);
  }
  handleRefresh(e) {
  e.preventDefault();
  this.refresh();
  var count = this.state.count;
  this.setState({count: count+1});
  }
  handleKeyUpWidth(e) {
    e.preventDefault();
    this.setState({widthValue: e.target.value})
  }
  handleKeyUpHeight(e) {
    e.preventDefault();
    this.setState({heightValue: e.target.value})
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
                  <button type="button" className="btn btn-default refresh" onClick={(e) => this.handleRefresh(e)}>
                    Refresh
                  </button>
                </div>
                <div className="btn-group panel-footer-btn" role="group">
                  Width:
                  <input type="text" className="panel-input"  onKeyUp={(e) => this.handleKeyUpWidth(e)} />
                </div>
                <div className="btn-group panel-footer-btn" role="group">
                  Height:
                  <input type="text" className="panel-input"  onKeyUp={(e) => this.handleKeyUpHeight(e)} />
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
