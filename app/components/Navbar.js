import SearchBar from './Searchbar';
import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
       <div className="container">
         <div className="navbar-header">
           <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
             <span className="sr-only">Toggle navigation</span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
           </button>
           <a className="navbar-brand" href="#">
             <span className="glyphicon glyphicon-home"></span>
           </a>
         </div>
         <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
           <SearchBar searchTerm={this.props.searchTerm} />
           </div>
       </div>
     </nav>
    )
  }
}
