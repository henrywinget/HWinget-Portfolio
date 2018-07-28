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
      isOpen: false,
      isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
  }

  //Toggles 
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

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 500;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }



  render() {
    return (

        <Navbar light expand="md" id="navbar" className={this.state.isTop ? 'up' : 'down'}>
          <NavbarBrand href="/" className={this.state.isTop ? 'up' : 'down'}><strong>HENRY WINGET</strong></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className={this.state.isTop ? 'up ml-auto navigation' : 'down ml-auto navigation'} navbar>
              <NavItem>
                <NavLink href="#about-me">ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#project-header">PROJECTS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact-form">CONTACT</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default NavTabs;