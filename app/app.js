import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import Panel from './components/Panel';
import Banner from './components/Banner';

class Reactpage extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Banner/>
        <Panel/>
      </div>
    );
  }
}

ReactDOM.render(
  <Reactpage />,
  document.getElementById('react-div'));
