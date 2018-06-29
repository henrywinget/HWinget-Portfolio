import React from "react";
import { Link } from "react-router-dom";
import './NavTabs.css';
import Zoom from 'react-reveal/Zoom';

const NavTabs = () => (
  <div className = "container">
  <Zoom>
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"  
        }
      >
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/about"
        className={
          window.location.pathname === "/about" ? "nav-link active" : "nav-link"  
        }
      >
        About Me
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/contact"
        className={
          window.location.pathname === "/contact" ? "nav-link active" : "nav-link" 
        }
      >
        Contact
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/projects"
        className={
          window.location.pathname === "/projects" ? "nav-link active" : "nav-link"  
        }
      >
        Projects
      </Link>
    </li>
  </ul> 
  </Zoom>
  </div>

);

export default NavTabs;