import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import Panel from './components/Panel';

class Reactpage extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        
        <p>hello world</p>
        <Panel/>
      </div>
    );
  }
}

ReactDOM.render(
  <Reactpage />,
  document.getElementById('react-div'));
