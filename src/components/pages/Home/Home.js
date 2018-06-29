import React, { Component } from 'react';
import './Home.css';
import Zoom from 'react-reveal/Zoom';
import Typed from 'typed.js';



class Home extends Component {

  componentDidMount() {
    const firstTitle = () => {
      const options = {
        stringsElement: '#typed-strings',
        typeSpeed: 60,
        backSpeed: 50,
        showCursor: true,
        cursorChar: '|'
      };

      const typed = new Typed('#typed', options);
    }

    firstTitle();

  }

  render() {
    return (
      <div className="home">
        <div id="HenryImage">
          <Zoom>
            <div id="typed-strings">
              <p>Henry Winget <br /> Full Stack Developer <br /> <br /> Welcome to my site! <br /> Have a look around <br /> and make yourself <br /> at home.</p>
            </div>
            <span id="typed"></span>
          </Zoom>
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

