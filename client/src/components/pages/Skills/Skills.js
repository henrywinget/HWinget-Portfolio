import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import bootstrap from './images/bootstrap.png';
import css from './images/css.png';
import electron from './images/electron.png';
import express from './images/express.png';
import git from './images/git.png';
import handlebars from './images/handlebars.png';
import html from './images/html.png';
import js from './images/js.png';
import mongo from './images/mongodb.png';
import mysql from './images/mysql.png';
import mongoose from './images/mongoose.png';
import node from './images/node.png';
import npm from './images/npm.png';
import python from './images/python.png';
import react from './images/react.png';
import sequelize from './images/sequelize.png';
import './Skills.css';

export class Skills extends Component {
    render() {
        return (
            <div className="Skills-section">
                <Container>

                    <Row className="Skills-header-row">
                        <h2 id="skills-header">SKILLS</h2>
                    </Row>
                    <Row className="Skills-icons-board">
                        <Col sm='3' xs='6'>
                            <Row className="Skills-icons-board">
                                <img className="Skills-icons-img" src={html} alt="HTML5" />
                            </Row>
                            <Row className="Skills-icons-board">
                                <p>HTML5</p>
                            </Row>
                        </Col>
                        <Col sm='3' xs='6'>
                            <Row className="Skills-icons-board">
                                <img className="Skills-icons-img" src={css} alt="CSS3" />
                            </Row>
                            <Row className="Skills-icons-board">
                                <p>CSS3</p>
                            </Row>
                        </Col>
                        <Col sm='3' xs='6'>
                            <Row className="Skills-icons-board">
                                <img className="Skills-icons-img" src={bootstrap} alt="Bootstrap" />
                            </Row>
                            <Row className="Skills-icons-board">
                                <p>Bootstrap</p>
                            </Row>
                        </Col>
                        <Col sm='3' xs='6'>
                            <Row className="Skills-icons-board">
                                <img className="Skills-icons-img" src={handlebars} alt="Handlebars" />
                            </Row>
                            <Row className="Skills-icons-board">
                                <p>Handlebars</p>
                            </Row>
                        </Col>
                        <Col sm='3' xs='6'>
                            <Row className="Skills-icons-board">
                                <img className="Skills-icons-img" src={electron} alt="Electron" />
                            </Row>
                            <Row className="Skills-icons-board">
                                <p>Electron</p>
                            </Row>
                        </Col>
                        <Col sm='3' xs='6'>
                            <Row className="Skills-icons-board">
                                <img className="Skills-icons-img" src={express} alt="Express" />
                            </Row>
                            <Row className="Skills-icons-board">
                                <p>Express</p>
                            </Row>
                        </Col>
                        <Col sm='3' xs='6'>
                            <Row className="Skills-icons-board">
                                <img className="Skills-icons-img" src={git} alt="Git" />
                            </Row>
                            <Row className="Skills-icons-board">
                                <p>Git</p>
                            </Row>
                        </Col>
                        <Col sm='3' xs='6'>
                            <Row className="Skills-icons-board">
                                <img className="Skills-icons-img" src={js} alt="JavaScript" />
                            </Row>
                            <Row className="Skills-icons-board">
                                <p>JavaScript</p>
                            </Row>
                        </Col>
                        <Col sm='3' xs='6'>
                            <Row className="Skills-icons-board">
                                <img className="Skills-icons-img" src={mongo} alt="MongoDB" />
                            </Row>
                            <Row className="Skills-icons-board">
                                <p>MongoDB</p>
                            </Row>
                        </Col>
                        <Col sm='3' xs='6'>
                            <Row className="Skills-icons-board">
                                <img className="Skills-icons-img" src={mongoose} alt="Mongoose" />
                            </Row>
                            <Row className="Skills-icons-board">
                                <p>Mongoose</p>
                            </Row>
                        </Col>
                        <Col sm='3' xs='6'>
                            <Row className="Skills-icons-board">
                                <img className="Skills-icons-img" src={mysql} alt="MySQL" />
                            </Row>
                            <Row className="Skills-icons-board">
                                <p>MySQL</p>
                            </Row>
                        </Col>
                        <Col sm='3' xs='6'>
                            <Row className="Skills-icons-board">
                                <img className="Skills-icons-img" src={node} alt="Node.js" />
                            </Row>
                            <Row className="Skills-icons-board">
                                <p>Node.js</p>
                            </Row>
                        </Col>
                        <Col sm='3' xs='6'>
                            <Row className="Skills-icons-board">
                                <img className="Skills-icons-img" src={npm} alt="npm" />
                            </Row>
                            <Row className="Skills-icons-board">
                                <p>npm</p>
                            </Row>
                        </Col>
                        <Col sm='3' xs='6'>
                            <Row className="Skills-icons-board">
                                <img className="Skills-icons-img" src={python} alt="Python" />
                            </Row>
                            <Row className="Skills-icons-board">
                                <p>Python</p>
                            </Row>
                        </Col>
                        <Col sm='3' xs='6'>
                            <Row className="Skills-icons-board">
                                <img className="Skills-icons-img" src={react} alt="React.js" />
                            </Row>
                            <Row className="Skills-icons-board">
                                <p>React.js</p>
                            </Row>
                        </Col>
                        <Col sm='3' xs='6'>
                            <Row className="Skills-icons-board">
                                <img className="Skills-icons-img" src={sequelize} alt="Sequelize" />
                            </Row>
                            <Row className="Skills-icons-board">
                                <p>Sequelize</p>
                            </Row>
                        </Col>

                    </Row>
                    <Row>
                        <Col sm='12' className="Skills-icons-board">
                            <p>... and more!</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Skills
