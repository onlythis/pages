import React from 'react';

export default class Panel extends React.Component {
  render() { return (
    <div className="panel panel-default">
      TreeTwoD
      <div className="panel-body">
        <hr />
        <div className="row">
          <div className="col-md-12">
            <canvas width = "512" height = "512" id = "my_Canvas"></canvas>
            </div>
          </div>
        </div>
        <div className="panel-footer">
          <div className="row">
            <div className="col-md-12">
              panel footer
              </div>
            </div>
            <hr />
          </div>
        </div>
      )
    }
  }
