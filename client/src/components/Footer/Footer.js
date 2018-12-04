import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import gitHubLogo from './images/github2.png';
import linkedInLogo from './images/linkedin.png';
import mailLogo from './images/mail.png';
import './Footer.css';
import henryDev from './images/henrydevsquare.gif'

export class Footer extends Component {
    render() {
        return (
            <div className="Footer_div">
                <Row className="Icon_row">
                    <Col sm='5' className="Icon-col">
                        <a href="https://www.linkedin.com/in/henrywinget" target="_blank" rel="noopener noreferrer"><img id="linkedin-home" src={linkedInLogo} alt="LinkedIn Icon" /></a>
                        <a href="mailto:henrywinget@gmail.com" target="_blank" rel="noopener noreferrer"><img id="stack-home" src={mailLogo} alt="Mail Henry" /></a>
                        <a href="https://github.com/henrywinget" target="_blank" rel="noopener noreferrer"><img id="github-home" src={gitHubLogo} alt="GitHub Icon" /></a>
                    </Col>
                    <Col sm='7' className="typing-gif-col">
                        <img src={henryDev} alt="Henry Typing" className="typing-gif" />
                    </Col>
                </Row>
                {/* <Row className="Icon_row" style={{}}>
                    <p style={{ color: 'white' }}>Made by Henry Winget, powered by React.js</p>
                </Row> */}
            </div>
        )
    }
}

export default Footer
