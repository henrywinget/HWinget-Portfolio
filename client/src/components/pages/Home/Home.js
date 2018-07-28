import React, { Component } from 'react';
import './Home.css';
import Zoom from 'react-reveal/Zoom';
import Typed from 'typed.js';
import Fade from 'react-reveal/Fade';
import Spin from 'react-reveal/Spin';
import Jump from 'react-reveal/Jump';
import gitHubLogo from'./images/github2.png';
import linkedInLogo from'./images/linkedin.png';
import stackOverflowLogo from'./images/stackoverflow.png';
import mailLogo from './images/mail.png';
import arrow from './images/arrow.png';



class Home extends Component {

  componentDidMount() {
    const firstTitle = () => {
      const options = {
        stringsElement: '#typed-strings',
        typeSpeed: 70,
        backSpeed: 50,
        showCursor: true,
        cursorChar: '|',
        startDelay: 1000,
      };

      const typed = new Typed('#typed', options);
    }

    setTimeout(firstTitle(), 2000);

  }


  render() {
    return (
      <div className="home" id="behind-henry">
        <Fade top>
        <h1 id="henry-winget">HENRY WINGET</h1>
        </Fade>
        <div id="typed-strings">
        <p>Hi! </p><h1>I'm <strong>Henry Winget.</strong></h1>
        <p>Full-Stack Web Developer.</p>
        </div>
              <div id ="henrys-links">
        <Spin>
        <a href ="https://www.linkedin.com/in/henry-winget-343240122/" target="_blank" rel="noopener noreferrer"><img id ="linkedin-home" src= {linkedInLogo} alt="LinkedIn Icon"/></a>
        <a href ="https://stackoverflow.com/users/8904181/henry-winget" target="_blank" rel="noopener noreferrer"><img id ="stack-home" src= {mailLogo} alt="StackOverflow Icon"/></a>
        <a href ="https://github.com/henrywinget" target="_blank" rel="noopener noreferrer"><img id ="github-home" src= {gitHubLogo} alt="GitHub Icon"/></a>
        </Spin>
        </div>
            <div id="typed" className="col">
              {/* <h1 className = "ui large header">Henry Winget</h1>
              <h1 className = "ui large header">Full-Stack Web Developer</h1> */}
            </div>
        <div id = "arrow">
        <Zoom>
        <a href ="#about-me" target="_blank" rel="noopener noreferrer"><img id = "arrow-down" src={arrow} alt="arrow"/></a>
        </Zoom>
        </div>
      </div>
    )
  }
}

export default Home;

