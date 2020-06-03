import React, { Component } from 'react';
import './About.css';
import Wrapper from '../../Wrapper/Wrapper';
import Ag from './Abouts/Ag';
import ReactDOM from 'react-dom';
import overLooking from './images/looking2.png';
import Fade from 'react-reveal/Fade';


class About extends Component {

  renderAg = (e) => {
    e.preventDefault();
    ReactDOM.render(<Ag />, document.getElementById("ag"));
  }

  render() {
    console.log(this.state);
    return (
      <div className="about-me">
        <h2 id="about-header">ABOUT</h2><br />
        <Wrapper>
          <div className="row" id="about-me">
            <div id="henry-real" className="col-xs-12 col-lg-5">
              <Fade clear>
                <img src={overLooking} alt="Henry" id="henry-real-img" />
              </Fade>
            </div>
            <div id="first-about" className="col-xs-12 col-lg-7">
                <div style={{ textAlign: 'center'}}>
                * Software Development Engineer
                <br />
                ~ Visual Storage Intelligence
                 <br /><br />
                 * Teaching Assistant
                <br/>
                ~ 2U Education / SMU
                <br/> <br/> <br/>
                </div>
              <p>Coding and teaching others to code in Dallas, TX.
                <br/><br/>
                Got something fun to build? Contact me to learn how we can build it together!
                <br/><br/>
                #BreakIt #FixIt #PushIt
              </p>
            </div>
          </div>
        </Wrapper>
      </div>
    )
  }


}

export default About;