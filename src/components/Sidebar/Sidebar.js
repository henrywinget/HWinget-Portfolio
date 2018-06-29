import React from 'react';
import './Sidebar.css';
import Zoom from 'react-reveal/Zoom';

const Sidebar = () => {

    return (
      <div className = "sideBar">
       <Zoom>
      {/* <p>Keep up with Henry</p> */}
      <ul className="nav sidebar">
        <li className="nav-item">
          <a href ="https://github.com/henrywinget" target="_blank" rel="noopener noreferrer"><img id ="github" src= "https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-128.png" alt="GitHub Icon"/></a>
        </li>
        <li className="nav-item">
        <a href ="https://www.linkedin.com/in/henry-winget-343240122/" target="_blank" rel="noopener noreferrer"><img id ="linkedin" src= "https://github.com/henrywinget/Bootstrap-Portfolio/blob/master/images/linkedin-icon.png?raw=true" alt="LinkedIn Icon"/></a>
        </li>
        <li className="nav-item">
        <a href ="https://stackoverflow.com/users/8904181/henry-winget" target="_blank" rel="noopener noreferrer"><img id ="stack" src= "https://github.com/henrywinget/Bootstrap-Portfolio/blob/master/images/if_overflow_334695.png?raw=true" alt="StackOverflow Icon"/></a>
        </li>
      </ul>
      </Zoom>
      </div>
    )

  }

export default Sidebar
