import React, { Component } from 'react';
import './Projects.css';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import Wrapper from '../../Wrapper/Wrapper';
import Slide from 'react-reveal/Slide';
const projects = [
  {
    title: 'Clear Intelligence Watson Build',
    link: 'http://watson.cleari.ai:8080/',
    description: 'Providing restaurants with valuable analytics to promote business growth, powered by IBM Watson.',
    tech: 'React.js/ Express/ Node/ MongoDB',
    image: 'https://i.imgur.com/eukDyTt.png',
  },
  {
    title: '',
    link: 'https://hark-up.herokuapp.com/',
    description: 'Text to speech application designed for online news articles.',
    tech: 'Handlebars/ MySQL /Cheerio',
    image: 'https://i.imgur.com/4zCYXAh.png',
  },
  {
    title: '',
    link: 'https://henrywinget.github.io/itisyourbirthday.//',
    description: 'It\'s a statement of fact; a stylized birthday card in homage to the No. 1 streamed show on Netflix.',
    tech: 'CSS / HTML5',
    image: 'https://i.imgur.com/iFgTuOv.png',
  },
];

const revealStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export class Project extends Component {
  
  render() {
    const cardTitleStyle = { background: 'rgba(0, 0, 0, 0.25)', padding: 5 };
    
    return (
      <div id="all-projects">
        <Wrapper>
          <h2 id="project-header">PROJECTS</h2>
          <div className="row projects">
            {projects.map((project, index) => {
              return <Slide left={index === 0} up={index === 1} right={index === 2} key={project.title}  style={revealStyle}>
                <div className="col-lg-4" style={{ width: '100%' }}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <CardText style={{ textAlign: 'center' }}>{project.tech}</CardText>
                    <Card inverse>
                      <CardImg style={{width: '100%'}} src={project.image} target="_blank" rel="noopener noreferrer" alt={project.title} />
                      <CardImgOverlay>
                        <CardTitle style={project.title ? cardTitleStyle : null}>{project.title}</CardTitle>
                      </CardImgOverlay>
                    </Card>
                  </a>
                  <CardText>{project.description}</CardText>
                </div>
              </Slide>
            })}
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default Project;
