import React from 'react';
import {Link} from 'react-router';
export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panels: [
        { title: "Snap & Snack",
          imgclassname: "snapnsnackimg",
          link: "snapnsnack"
        },
        { title: "threeD Maze",
          imgclassname: "threedimg",
          link: "https://onlythis.github.io/three3d/"
        },
        { title: "Simplify",
          imgclassname: "musicimg",
          link: "music"
        },
      ]
    };
  }

  render() {
    var panels = this.state.panels;
    return (
      <div>
        <div className="col-md-6">
          <div className="panel panel-default panel-frontpage">
            <Link to={panels[0].link} className="frontpage-link"><p className="panel-header">{panels[0].title}</p></Link>
            <hr />
            <Link to={panels[0].link}><div className={`panel-img ${panels[0].imgclassname}`}>
            </div></Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="panel panel-default panel-frontpage">
            <a href={panels[1].link} className="frontpage-link"><p className="panel-header">{panels[1].title}</p></a>
            <hr />
            <a href={panels[1].link}><div className={`panel-img ${panels[1].imgclassname}`}>
            </div></a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="panel panel-default panel-frontpage">
            <Link to={panels[2].link} className="frontpage-link"><p className="panel-header">{panels[2].title}</p></Link>
            <hr />
            <Link to={panels[2].link}><div className={`panel-img ${panels[2].imgclassname}`}>
            </div></Link>
          </div>
        </div>
      </div>
    )
  }
}
