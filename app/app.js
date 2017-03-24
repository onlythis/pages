import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import Panel from './components/Panel';
import Banner from './components/Banner';

class Reactpage extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    searched: "Daniel C Snyder"
  };
}
  handleSearch(e) {
    var searched=this.state.searched;
    var updated=e;
    this.setState({searched:updated});
  }
  render() {
    var this_search = this.state.searched;
    return (
      <div>
        <NavBar searchHandler={(e) => this.handleSearch(e)}/>
        <Banner searched={this_search}/>
        <Panel/>
      </div>
    );
  }
}

ReactDOM.render(
  <Reactpage />,
  document.getElementById('react-div'));
