import React, { Component } from 'react';
import './Home.css';
import Zoom from 'react-reveal/Zoom';
import Typed from 'typed.js';



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

    // setTimeout(firstTitle(), 4000);
    firstTitle();
  }


  render() {
    return (
      <div className="home" id="begin-content">
      <div id="behind-henry">
        <div id="HenryImage" className = "container">
          <Zoom>
            <div id="typed-strings">
              <p>Full Stack Developer <br /> <br /> Welcome to my site! <br /> Don't mind me, have a <br/>look around and make <br />yourself at home.</p>
            </div>
            <span id="typed"></span>
          </Zoom>
        </div>
        </div>
        {/* <img className = "henry-typing" src = "https://i.imgur.com/r8qFvuE.gif" alt="Henry typing"/> */}
        {/* <Zoom>
          <p className="reactive-p"></p>
        </Zoom> */}
      </div>
    )
  }
}

export default Home;

