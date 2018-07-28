import React, { Component } from 'react';
import './Projects.css';
import Zoom from 'react-reveal/Zoom';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Row, Col } from 'reactstrap';
import Wrapper from '../../Wrapper/Wrapper';

export class Project extends Component {
  render() {
    // return (
    //     <div id="all-projects">
    //       <Zoom>
    //       <Wrapper>
    //       <h2 id="project-header">Projects</h2>
    //       <div className="row projects">


    //         <div className="card">
    //           <a href="https://github.com/henrywinget/HarkUp" target="_blank" rel="noopener noreferrer">
    //             <img className="card-img-top" src="https://i.imgur.com/Ex4JugH.png" target="_blank" rel="noopener noreferrer" alt="HarkUp" />
    //           </a>
    //           <div className="card-body">
    //             <p className="card-text">A text to speech application that makes browsing the web easy, accessible, and safe on the go.</p>
    //           </div>
    //         </div>
    //         <div className="card">
    //           <a href="https://github.com/henrywinget/HomeRepair" target="_blank" rel="noopener noreferrer">
    //             <img className="card-img-top" src="https://i.imgur.com/eBZow86.png" alt="CW Home Repair" />
    //           </a>
    //           <div className="card-body">
    //             <p className="card-text">A fully functional, business website for CW Home Repair and Remodeling.</p>
    //           </div>
    //         </div>
    //         <div className="card">
    //           <a href="https://github.com/henrywinget/Star-Wars-Hangman" target="_blank" rel="noopener noreferrer">
    //             <img className="card-img-top" src="https://i.imgur.com/UnkTLK5.png" alt="Star Wars Hang-Man" />
    //           </a>
    //           <div className="card-body">
    //             <p className="card-text">Play the age old game of hang-man, with a Star Wars twist on your desktop!</p>
    //           </div>
    //         </div>
            
    //     </div>
    //     </Wrapper>
    //     </Zoom>
    //     </div>
    // )

    return (
    <div id="all-projects">
    <Wrapper>
    <h2 id="project-header">Projects</h2>
    <div className="row projects">
      <div>
      <a href="https://github.com/henrywinget/HarkUp" target="_blank" rel="noopener noreferrer">
      <Card inverse>
        <CardImg width="100%" src="https://i.imgur.com/4zCYXAh.png" target="_blank" rel="noopener noreferrer" alt="HarkUp"/>
        <CardImgOverlay>
          <CardTitle>HarkUp</CardTitle>
          <CardText>Text to speech application that makes browsing the web easy, accessible, and safe on the go.</CardText>
          {/* <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText> */}
        </CardImgOverlay>
      </Card>
      </a>
      </div>
      <div>
      <a href="https://github.com/henrywinget/Star-Wars-Hangman" target="_blank" rel="noopener noreferrer">
      <Card inverse>
        <CardImg width="100%" src="https://i.imgur.com/kHxuipe.png" alt="Star Wars Hang-Man" />
        <CardImgOverlay>
          <CardTitle>Star Wars Hangman</CardTitle>
          <CardText>Play the age old game of hangman, with a Star Wars twist on your desktop!</CardText>
          {/* <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText> */}
        </CardImgOverlay>
      </Card>
      </a>
      </div>
    </div>
    </Wrapper>
    </div>
    );
  }
}

export default Project;
