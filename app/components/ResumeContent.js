import React from 'react';

export default class ResumeContent extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    value: 0
  };
}

  handleRefresh(e) {
  e.preventDefault();
  var value=this.state.value;
    this.setState({value: value + 1});
  }
  render() {
    var value = this.state.value;
    return (
    <div className="col-md-12">
    <div className="panel panel-default">
      <p className="panel-header">Objective</p>
      <hr />
        Find a job
        <div className="panel-footer">
          <div className="row">
            <div className="col-md-12">
              <div className="btn-group panel-footer-btn" role="group">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      )
    }
  }
