import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import antd from './images/antd.png';
import bootstrap from './images/bootstrap.png';
import css from './images/css.png';
import electron from './images/electron.png';
import express from './images/express.png';
import flask from './images/flask.png';
import gatsby from './images/gatsby.png';
import git from './images/git.png';
// import handlebars from './images/handlebars.png';
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
import sqlserver from './images/sqlserver.png';
import subversion from './images/subversion.png';
import './Skills.css';

const skills = [
    { src: html, title: 'HTML5'},
    { src: css, title: 'CSS'},
    { src: antd, title: 'Ant Design'},
    { src: bootstrap, title: 'Bootstrap'},
    { src: electron, title: 'Electron'},
    { src: express, title: 'Express'},
    { src: flask, title: 'Flask', style: { borderRadius: '100px' }},
    { src: gatsby, title: 'Gatsby', style: { borderRadius: '100px' }},
    { src: git, title: 'Git'},
    { src: js, title: 'JavaScript'},
    { src: mongo, title: 'MongoDB'},
    { src: mongoose, title: 'Mongoose'},
    { src: sqlserver, title: 'MS SQL Server'},
    { src: subversion, title: 'Subversion'},
    { src: mysql, title: 'MySQL'},
    { src: node, title: 'Node.js'},
    { src: npm, title: 'npm'},
    { src: python, title: 'Python'},
    { src: react, title: 'React'},
    { src: sequelize, title: 'Sequelize'},

];

export class Skills extends Component {
    render() {
        return (
            <div className="Skills-section">
                <Container>

                    <Row className="Skills-header-row">
                        <h2 id="skills-header">SKILLS</h2>
                    </Row>
                    <Row className="Skills-icons-board">
                        {skills.map((skill, index) => {
                            return <Col key={skill.title} sm='3' xs='6'>
                                <Row className="Skills-icons-board">
                                    <img className="Skills-icons-img" style={skill.style} src={skill.src} alt={skill.title} />
                                </Row>
                                <Row className="Skills-icons-board">
                                    <p>{skill.title}</p>
                                </Row>
                            </Col>
                        })}
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
