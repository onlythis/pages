import React from 'react';

export default class Banner extends React.Component {

  render() {
     return (
    <div className="banner">
      <p>{this.props.searched}</p>
    </div>
      )
    }
  }
