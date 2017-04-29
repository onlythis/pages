import React from 'react';

export default class ResumeContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleRefresh(e) {
    e.preventDefault();
    var value=this.state.value;
    this.setState({value: value + 1});
  }
  render() {
    var value = this.state.value;
    return (
      <div className="col-md-12">
        <div className="panel panel-default">
          <p className="panel-header">OBJECTIVE</p>
          <hr />
          <p className="panel-content">Experience with full stack web development, and motivated to learn and challenge myself.
            I am seeking an opportunity to apply my skills to help your company succeed. </p>
        </div>
        <div className="panel panel-default">
          <p className="panel-header">TECHNICAL EXPERIENCE</p>
          <hr />
          <p className="panel-content">Python, Java, Javascript, C#, HTML/CSS, SQL, Scala, Github, Android Studio, Windows, Excel, Linux, Unity3D, Blender, Wireshark,
            OpenGL, Django, Node.js, React.js, Bootstrap, MongoDB </p>
        </div>
        <div className="panel panel-default">
          <p className="panel-header">WORK EXPERIENCE</p>
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
              <p className="panel-content work-content">Researched detection of sleeping disorders with ECG wearable monitor. Analyzed data for patterns and classifying
                sleep stages. Discussed system for sleep doctors and patients to be more connected with Chung-Kang Peng (Harvard Medical School). </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default" id="bottom-work-panel">
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
        <div className="panel panel-default">
          <p className="panel-header">EDUCATION</p>
          <hr />
          <div className="row res-row">
            <div className="col-md-6">
              <p className="panel-header-left" id="work-panel">B.A. in Computer Science <br/> University of Massachusetts, Amherst <br/> GPA: 3.00</p>
            </div>
            <div className="col-md-6">
              <p className="panel-header-right">2013 - 2016</p>
            </div>
          </div>
        </div>
        <div className="row res-row">
          <div className="col-md-6">
            <div className="panel panel-default" id="work-panel">
              <p className="panel-header">Artificial Intelligence</p>
              <hr />
              <p className="panel-content work-content">Constructed database of stock information with <b>SQL</b>, <b>Python</b>. Used <b>scikit-learn</b> and other python packages to
                classify data, and predict changes in price. Gathered features (price, volume, ebitda, moving average, etc) from each Fortune 500 company. Used
                sqlite3 to store data in a db file. Trained and predicted with neurolab’s neural network, scikit-learn’s naive bayes and support vector machine.   </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default" id="work-panel">
              <p className="panel-header">Human Computer Interaction</p>
              <hr />
              <p className="panel-content work-content">Developed wireframe with <b>HTML/CSS</b> for “Snap n’ Snack” a cooking/recipe website optimizing user experience by
                user testing and feedback to generate new prototypes. Implemented <b>Norman principles</b>: minimize gulf of evaluation (state of a system),
                execution (intentions vs what system allows), feedback, visibility, consistency, etc.     </p>
            </div>
          </div>
        </div>
        <div className="row res-row">
          <div className="col-md-6">
            <div className="panel panel-default" id="work-panel">
              <p className="panel-header">Computer Graphics</p>
              <hr />
              <p className="panel-content work-content">Applied hierarchical modeling, <b>parametric curves</b>, and ray tracing with <b>OpenGL</b> to object inheritance and
                3D geometry. Objects inherit translation, rotation, and scale from their parent object in hierarchical modeling. Wrote program to build B-spline,
                bezier, quadratic curves from points manipulated by clicking. Then rotated the curves 360 degrees to shape an object. Detected collisions from rays
                based on object’s shape and position.  </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default" id="work-panel">
              <p className="panel-header">Mobile Health Sensing</p>
              <hr />
              <p className="panel-content work-content">Produced an app with Android Studio/<b>Java</b> that collected data from cell phone sensors to smooth, denoise, and
                classify data. Used <b>DBScan</b> on GPS locations to find where we spend most of our time. Wrote code to detect steps by peak detection. Sent data to server
                to evaluate with machine learning techniques. Displayed graphs of data in real time. Collaborated with a couple other students and used Github to
                share work on our app that detects steps, speech, heart-rate (PPG), and location. </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default" id="work-panel">
              <p className="panel-header">Computer Networks</p>
              <hr />
              <p className="panel-content work-content">Studied <i>Computer Networking: A Top-Down Approach</i> exploring <b>TCP/IP</b>, <b>HTTP</b>, routing algorithms to understand
                how devices are connected. Used Wireshark to analyze network packets. Other material discussed: Types of packet delay/lost, network security,
                SMTP, DNS, multiplexing, UDP, reliable data transfer, router architecture, and subnetting.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
