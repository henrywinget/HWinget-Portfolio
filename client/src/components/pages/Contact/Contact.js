import React, { Component } from 'react';
import './Contact.css';
import Slide from 'react-reveal/Slide';
import gitHubLogo from './images/github2.png';
import linkedInLogo from './images/linkedin.png';
import mailLogo from './images/mail.png';

export class Contact extends Component {


    render() {
        return (
            <div div id="contact-form">
                    <h2 id="contact-henry">CONTACT</h2>
                    <br />
                <div className="row">
                    <div className="col-md-5 col-sm-12 col-xs-12" id="henry-head-div">
                        <img src="https://i.imgur.com/zzuqK0a.png" alt="Henry head shot" id="henry-head" />
                    </div>
                    <div className="col-md-7 col-sm-12 col-xs-12 contacts">
                        <Slide right>
                            <div>
                                <a href="https://www.linkedin.com/in/henrywinget/" target="_blank" rel="noopener noreferrer">
                                    <p><img id="linkedin-home" src={linkedInLogo} alt="LinkedIn Icon" />linkedin.com/in/henrywinget</p>
                                </a>
                            </div>
                            <div>
                                <a href="mailto:henrywinget@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <p><img id="stack-home" src={mailLogo} alt="Mail Henry" />henrywinget@gmail.com</p>
                                </a>
                            </div>
                            <div>
                                <a href="https://github.com/henrywinget" target="_blank" rel="noopener noreferrer">
                                    <p><img id="github-home" src={gitHubLogo} alt="GitHub Icon" />github.com/henrywinget</p>
                                </a>
                            </div>
                            <br />
                        </Slide>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
