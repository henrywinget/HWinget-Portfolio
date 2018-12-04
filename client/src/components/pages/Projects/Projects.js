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
            <Slide left>
              <div className="col-lg-4">
                <a href="https://hark-up.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <Card inverse>
                    <CardImg width="100%" src="https://i.imgur.com/4zCYXAh.png" target="_blank" rel="noopener noreferrer" alt="HarkUp" />
                    <CardImgOverlay>
                      <CardTitle>HarkUp</CardTitle>
                    </CardImgOverlay>
                  </Card>
                </a>
                <CardText>Text to speech application. Paste your article's URL in the space and let HarkUp read it for you! *Handlebars/ MySQL /Cheerio</CardText>
              </div>
            </Slide>
            <Slide up>
              <div className="col-lg-4">
                <a href="http://watson.cleari.ai:8080/" target="_blank" rel="noopener noreferrer">
                  <Card inverse>
                    <CardImg width="100%" src="https://i.imgur.com/eukDyTt.png" alt="Clear Intelligence Restaurant" />
                    <CardImgOverlay>
                      <CardTitle>Clear Intelligence Food-to-Table Experience</CardTitle>
                    </CardImgOverlay>
                  </Card>
                </a>
                <CardText>Powered by IBM Watson, a food-to-fork experience designed to promote customer knowledge of the food they are served, as well as provide the restaurant with valuable analytics to promote business growth. *React.js/ Express/ Node/ MongoDB</CardText>
              </div>
            </Slide>
            <Slide right>
              <div className="col-lg-4">
                <a href="https://github.com/henrywinget/Star-Wars-Hangman" target="_blank" rel="noopener noreferrer">
                  <Card inverse>
                    <CardImg width="100%" src="https://i.imgur.com/kHxuipe.png" alt="Star Wars Hang-Man" />
                    <CardImgOverlay>
                      <CardTitle>Star Wars Hangman</CardTitle>
                    </CardImgOverlay>
                  </Card>
                </a>
                <CardText>Play the age old game of hangman, with a Star Wars twist on your desktop! *HTML /Javascript</CardText>
              </div>
            </Slide>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default Project;
