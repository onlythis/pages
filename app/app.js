import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import Panel from './components/Panel';
import Banner from './components/Banner';
import TwoDTreeCanvas from './components/TwoDTreeCanvas';
import ResumeContent from './components/ResumeContent';
import SnackNav from './components/SnackNav';
import SlideShow from './components/SlideShow';
import FadeShow from './components/FadeShow';
import Demo from './components/Demo';
import Recipe from './components/Recipe';
import RecipeLeftSide from './components/RecipeLeftSide';
import MusicFront from './components/MusicFront';
import MusicLeft from './components/MusicLeft';
import MusicRight from './components/MusicRight';
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

class Recipes extends React.Component {
  render () {
    return (
      <div className="nav-padding">
        <SnackNav/>
        <SlideShow/>
      </div>
    )
  }
}

class SnapnSnack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1
    };
  }
  leftClicked(ind){
    var index = this.state.index;
    index=ind;
    this.setState({index});
  }
  render () {
    var index = this.state.index;
    return (
      <div className="nav-padding">
        <SnackNav/>
        <FadeShow/>
        <RecipeLeftSide onSelect={(e) => this.leftClicked(e)}/>
        <Recipe tabindex={index}/>
      </div>
    )
  }
}

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1
    };
  }
  leftClicked(ind){
    var index = this.state.index;
    index=ind;
    this.setState({index});
  }
  albumClicked(i) {
    console.log(i);
  }
  render () {
    var index = this.state.index;
    return (
      <div>
        <MusicLeft onSelect={(e) => this.leftClicked(e)}/>
        <MusicFront tabindex={index} onClick={(i) => this.albumClicked(i)}/>
        <MusicRight/>
      </div>
    )
  }
}

class Bubbles extends React.Component {
  render () {
    return (
      <div className="nav-padding">
        <SnackNav/>
        <Demo/>
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
      <div className="nav-padding">
        <NavBar searchHandler={(e) => this.handleSearch(e)}/>
        <Banner searched={this_search}/>
        <Panel/>
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
      <div className="nav-padding">
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
      <Route path="snapnsnack" component={SnapnSnack}/>
      <Route path="snapnsnack/bubbles" component={Bubbles}/>
      <Route path ="snapnsnack/recipes" component={Recipes}/>
      <Route path="music" component={Music}/>
    </Route>
  </Router>
),document.getElementById('react-div'));
