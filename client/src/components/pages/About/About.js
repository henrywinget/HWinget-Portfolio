import React, { Component } from 'react';
import './About.css';
import Zoom from 'react-reveal/Zoom';
import Wrapper from '../../Wrapper/Wrapper';
import Ag from './Abouts/Ag';
import ReactDOM from 'react-dom';


class About extends Component {

  renderAg = (e) => {
    e.preventDefault();
    ReactDOM.render(<Ag />, document.getElementById("ag"));
  }

  render() {
    console.log(this.state);
    return (
      <Wrapper>
        <div id="about-scroll"></div>
        <div className="about-me">
          <Zoom>

            <p id="about-header">About me <br /></p>
            <div className="row">
              <div className="col-md-4 col-sm-12 col-xs-12" id="henry-head-div">
                <img src="https://i.imgur.com/Ak6P5dP.png" alt="Henry head shot" id="henry-head" />
              </div>
              <div id="first-about" className="col-md-8 col-sm-12 col-xs-12">
                <p>My name is Henry Winget, I'm from Dallas, TX and I am a <strong>Full-Stack Web Developer.</strong><br /><br /> I specialize in Front-End development, am proficient in HTML, CSS, Javascript, and use React, Node.js, MySQL, Mongo, and many other technologies and frameworks daily.<br /><br /> This page is built in MERN stack.<br /><br /> Let's build something!</p>


                {/* <p className="about-me-buttons" onClick={this.renderAg}>Hi Henry!<br/> What else do you do?</p> */}
              </div>
            </div>
          </Zoom>
          {/* <div className = "about-components" id="ag">
        </div>
          <div className = "about-components" id="ears">
          </div>
          <div className = "about-components" id="geek">
        </div> */}
        </div>
      </Wrapper>
    )
  }


}

export default About;