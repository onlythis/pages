import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import Panel from './components/Panel';
import Banner from './components/Banner';
import TwoDTreeCanvas from './components/TwoDTreeCanvas';
import ResumeContent from './components/ResumeContent';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

class App extends React.Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

class Reactpage extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    searched: "Daniel Chu Snyder"
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
        <TwoDTreeCanvas/>
      </div>
    );
  }
}

class Resume extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    searched: "Daniel Chu Snyder"
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
        <ResumeContent/>
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* Show the Feed at / */}
      <IndexRoute component={Reactpage} />
      <Route path="resume" component={Resume} />
    </Route>
  </Router>
),document.getElementById('react-div'));