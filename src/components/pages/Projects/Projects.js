import React, { Component } from 'react';
import './Projects.css';
import Zoom from 'react-reveal/Zoom';

export class Project extends Component {
  render() {
    return (
      <div className = "row projects">
      <Zoom>
        <div className="card">
         <a href="https://github.com/henrywinget/HarkUp" target="_blank" rel="noopener noreferrer">
          <img className="card-img-top" src="https://i.imgur.com/Ex4JugH.png" target="_blank" rel="noopener noreferrer" alt="HarkUp"/>
          </a>
          <div className="card-body">
            <p className="card-text">A text to speech application that makes browsing the web easy, accessible, and safe on the go.</p>
          </div>
        </div>
        <div className="card">
        <a href="https://github.com/henrywinget/HomeRepair" target="_blank" rel="noopener noreferrer">
          <img className="card-img-top" src="https://i.imgur.com/eBZow86.png" alt="CW Home Repair"/>
          </a>
          <div className="card-body">
            <p className="card-text">A fully functional, business website for CW Home Repair and Remodeling.</p>
          </div>
        </div>
        <div className="card">
        <a href="https://github.com/henrywinget/Star-Wars-Hangman" target="_blank" rel="noopener noreferrer">
          <img className="card-img-top" src="https://i.imgur.com/UnkTLK5.png" alt="Star Wars Hang-Man"/>
          </a>
          <div className="card-body">
            <p className="card-text">Play the age old game of hang-man, with a Star Wars twist on your desktop!</p>
          </div>
        </div>
        </Zoom>
      </div>
    )
  }
}

export default Project;
