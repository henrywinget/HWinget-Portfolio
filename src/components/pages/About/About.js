import React, { Component } from 'react';
import './About.css';
import Hobbies from "../../Hobbies/Hobbies";
import Zoom from 'react-reveal/Zoom';
import Typed from 'typed.js';
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
      <div className="about-me">
      <Zoom>
          <p>Hello there! <br /></p>
          <p>My name is Henry Winget, I'm from Dallas, TX, and I am a <strong>Full-Stack Web Developer.</strong><br/><br/> I specialize in Front-End development, am proficient in HTML, CSS, and Javascript, and have experience using React, Node.js, MySQL, Mongo, and many other technologies and frameworks.<br/><br/> In fact, this website is built from the ground up with React!</p>
          
            <p className="about-me-buttons" onClick={this.renderAg}>Hi Henry!<br/> What else do you do?</p>
          </Zoom>
          <div className = "about-components" id="ag">
        </div>
          <div className = "about-components" id="ears">
          </div>
          <div className = "about-components" id="geek">
        </div>
      </div>
    )
  }


}

export default About;