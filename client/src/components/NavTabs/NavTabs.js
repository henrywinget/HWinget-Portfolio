import React, { Component } from "react";
// import { Link } from "react-router-dom";
import './NavTabs.css';
import Zoom from 'react-reveal/Zoom';
import Typed from 'typed.js';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from 'reactstrap';



export class NavTabs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    const navType = () => {
      const options = {
        stringsElement: '#typed-nav',
        typeSpeed: 70,
        backSpeed: 50,
        showCursor: false,
        cursorChar: '|'
      };
      const typed = new Typed('#nav-typeout', options);
    }
    navType();
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }


  render() {
    return (
      // <div className = "container">
        <Navbar light expand="md" id="navbar">
        <div className = "container">
          
          <div id = "typed-nav">
          <p>Henry Winget</p>
          </div>
          <NavbarBrand href="/"><span id="nav-typeout"></span></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto navigation" navbar>
              <NavItem>
                <NavLink href="#about-scroll">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#project-header">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact-form">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </div>
        </Navbar>
    );
  }
}

export default NavTabs;