import React, { Component } from 'react';
import './Projects.css';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import Wrapper from '../../Wrapper/Wrapper';
import Slide from 'react-reveal/Slide';
import henryDev from './images/henrydevsquare.gif';

export class Project extends Component {
  render() {
    return (
      <div id="all-projects">
        <Wrapper>
          <h2 id="project-header">PROJECTS</h2>
          <div className="row projects">
            <div className="project-cards col-sm-6">
              <Slide left>
                <div className="col-sm-6 col-lg-3">
                  <a href="https://hark-up.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <Card inverse>
                      <CardImg width="100%" src="https://i.imgur.com/4zCYXAh.png" target="_blank" rel="noopener noreferrer" alt="HarkUp" />
                      <CardImgOverlay>
                        <CardTitle>HarkUp</CardTitle>
                        <CardText>Text to speech application. Paste your article's URL in the space and let HarkUp read it for you!</CardText>
                        {/* <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText> */}
                      </CardImgOverlay>
                    </Card>
                  </a>
                </div>
              </Slide>
              <Slide left>
                <div className="col-sm-6 col-lg-3">
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
              </Slide>
              </div>
            <div id="HenryImage" className="col-xs-12 col-lg-6">
              <img src={henryDev} alt="Henry Typing" id="henry-gif" />
            </div>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default Project;
