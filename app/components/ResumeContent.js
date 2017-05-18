import React from 'react';

export default class ResumeContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="panel panel-default">
          <p className="panel-header">OBJECTIVE</p>
          <hr />
          <p className="panel-content" style={{paddingBottom: "10px"}}>
          Looking for an opportunity to learn, challenge myself, be part of a team, and help you succeed. </p>
        </div>
        <div className="panel panel-default">
          <p className="panel-header">TECHNICAL EXPERIENCE</p>
          <hr />
          <p className="panel-content" style={{paddingBottom: "10px"}}>Python, Javascript, HTML/CSS, SQL, Android Studio, Github, Wireshark, Windows, Linux,
            Unity3D, Blender, OpenGL, React.js </p>
        </div>

        <div className="panel panel-default">
          <p className="panel-header">EDUCATION</p>
          <hr />
          <div className="row res-row">
            <div className="col-md-6">
              <p className="panel-header-left p-edu">B.A. in Computer Science <br/> GPA: 3.00</p>
            </div>
            <div className="col-md-6">
              <p className="panel-header-right" id="edu-years">University of Massachusetts, Amherst  <br/> 2013 - 2016</p>
            </div>
          </div>
        </div>
        <div className="row res-row">
          <div className="col-md-6">
            <div className="panel panel-default" id="work-panel">
              <p className="panel-header">Artificial Intelligence</p>
              <hr />
              <p className="panel-content work-content">Constructed database of stock information with <b>SQL</b>, <b>Python</b>. Used <b>scikit-learn</b> and
              other python packages to classify data, and predict changes in price.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default" id="work-panel">
              <p className="panel-header">Human Computer Interaction</p>
              <hr />
              <p className="panel-content work-content">Developed wireframe with <b>HTML/CSS</b> for “Snap n’ Snack” a cooking/recipe website optimizing user
              experience by implementing <b>Norman principles</b>, prototyping, and user testing.</p>
            </div>
          </div>
        </div>
        <div className="row res-row">
          <div className="col-md-6">
            <div className="panel panel-default" id="work-panel">
              <p className="panel-header">Computer Graphics</p>
              <hr />
              <p className="panel-content work-content">Created a stack of multiple objects position, rotation, and scale. Wrote mathematical formula to
              draw <b>parametric curves</b> between points. Ray traced with <b>OpenGL</b> to render reflections and refraction.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default" id="work-panel">
              <p className="panel-header">Mobile Health Sensing</p>
              <hr />
              <p className="panel-content work-content">Produced an app with Android Studio/<b>Java</b> that collected data from cell phone sensors to smooth,
              and denoise. Used <b>DBScan</b> and peak detection to classify data. Displayed graphs of data being captured in real time.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default" id="bottom-work-panel">
              <p className="panel-header">Computer Networks</p>
              <hr />
              <p className="panel-content work-content">Studied <i>Computer Networking: A Top-Down Approach</i> exploring <b>TCP/IP</b>, <b>HTTP</b>,
              routing algorithms to understand how devices are connected. Used Wireshark to analyze network packets.</p>
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <p className="panel-header p-work-exp">WORK EXPERIENCE</p>
        </div>
        <div className="row res-row">
          <div className="col-md-6">
            <div className="panel panel-default" id="work-panel">
              <div className="row res-row">
                <div className="col-md-6">
                  <p className="panel-header-left">Intern at Kiipo <br/> Taipei, Taiwan</p>
                </div>
                <div className="col-md-6">
                  <p className="panel-header-right">Aug 2016 - Sep 2016</p>
                </div>
              </div>
              <hr />
              <p className="panel-content work-content">Tasked with improving a working Android app. Conceived wireframe, and designed page layout and flow.
                Experienced first-hand a small startup company. </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default" id="work-panel">
              <div className="row res-row">
                <div className="col-md-6">
                  <p className="panel-header-left">Research Intern at Beth Isreal Deconess Medical Center <br/> Boston, MA</p>
                </div>
                <div className="col-md-6">
                  <p className="panel-header-right">Jun 2016 - Aug 2016</p>
                </div>
              </div>
              <hr />
              <p className="panel-content work-content">Researched detection of sleeping disorders with ECG wearable monitor. Analyzed data for patterns and
              classifying sleep stages. Discussed system for sleep doctors and patients to be more connected with Chung-Kang Peng (Harvard Medical School). </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default" id="work-panel">
              <div className="row res-row">
                <div className="col-md-6">
                  <p className="panel-header-left">Lifegaurd at Boston Sports Club <br/> Lexington, MA</p>
                </div>
                <div className="col-md-6">
                  <p className="panel-header-right">Jun 2013 - Sep 2014</p>
                </div>
              </div>
              <hr />
              <p className="panel-content work-content">Worked together with a small group of people to maintain the pools and enforce the rules. </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default" id="work-panel">
              <div className="row res-row">
                <div className="col-md-6">
                  <p className="panel-header-left">Cashier at Wilson Farm <br/> Lexington, MA</p>
                </div>
                <div className="col-md-6">
                  <p className="panel-header-right">Jun 2013 - Sep 2014</p>
                </div>
              </div>
              <hr />
              <p className="panel-content work-content">Greeted customers kindly, and assisted them with groceries.  </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
