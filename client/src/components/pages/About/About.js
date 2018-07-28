import React, { Component } from 'react';
import './About.css';
import Zoom from 'react-reveal/Zoom';
import Wrapper from '../../Wrapper/Wrapper';
import Ag from './Abouts/Ag';
import ReactDOM from 'react-dom';
import Slide from 'react-reveal/Slide';
import henryDev from './images/henrydevsquare.gif';


class About extends Component {

  renderAg = (e) => {
    e.preventDefault();
    ReactDOM.render(<Ag />, document.getElementById("ag"));
  }

  render() {
    console.log(this.state);
    return (
        <div>

        <div className="about-me">
            <Wrapper>
            <div className="row" id="about-me">
              <div id="first-about" className="col-xs-12 col-lg-8">
              <Slide right>
              <h2 id="about-header">About</h2><br />
              </Slide>
              <Slide left>
                <p>My name is Henry Winget, I'm from Dallas, TX and I am a <strong>Full-Stack Web Developer.</strong>                  I'm here to spread my desire for creativity and joy of creating to the world!
                <br /><br />
                 With a certificate in Full-Stack Web Development from <strong>Southern Methodist University</strong>, I specialize in Front-End development, am proficient in HTML, CSS, Javascript, and use React, Node.js, MySQL, MongoDB, and many other technologies and frameworks daily.
                 <br /><br />
                 I also do A LOT more than that. Contact me to find out more.
                 <br/><br/>
                  Let's build something!</p>
                {/* <p className="about-me-buttons" onClick={this.renderAg}>Hi Henry!<br/> What else do you do?</p> */}
              </Slide>
              </div>
              <div id="HenryImage" className="col-xs-12 col-lg-4">
                <img src={henryDev} alt="Henry Typing" id="henry-gif"/>
                </div>
            </div>
            </Wrapper>

          
          {/* <div className = "about-components" id="ag">
        </div>
          <div className = "about-components" id="ears">
          </div>
          <div className = "about-components" id="geek">
        </div> */}
        </div>
        </div>
    )
  }


}

export default About;