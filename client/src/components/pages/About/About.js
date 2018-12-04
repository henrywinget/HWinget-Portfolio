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
              <p>I'm a <strong>full-stack web developer</strong> and coding enthusiast living in Dallas, TX.
                <br /><br />
                I'm probably spending my time learning something new and creating something fun. You might also find me spending time in my garden, running through another classic RPG playthrough, or traveling the world.
                 <br /><br />
                I also do much more than that. Contact me to find out more.
                <br /> <br />Let's build something!</p>
              {/* <p className="about-me-buttons" onClick={this.renderAg}>Hi Henry!<br/> What else do you do?</p> */}
            </div>

            {/* <div id="HenryImage" className="col-xs-12 col-lg-6">
              <img src={henryDev} alt="Henry Typing" id="henry-gif" />
            </div> */}
          </div>
        </Wrapper>


        {/* <div className = "about-components" id="ag">
        </div>
          <div className = "about-components" id="ears">
          </div>
          <div className = "about-components" id="geek">
        </div> */}
      </div>
    )
  }


}

export default About;