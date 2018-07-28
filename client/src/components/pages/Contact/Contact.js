import React, { Component } from 'react';
import API from "../../../utils/API";
import './Contact.css';
import Zoom from 'react-reveal/Zoom';
import Wrapper from '../../Wrapper/Wrapper';
import ReactDOM from 'react-dom';

export class Contact extends Component {


    render() {
        return (
            <div id="contact-form" className="col">
                          <div className="col-md-4 col-sm-12 col-xs-12" id="henry-head-div">
                <img src="https://i.imgur.com/Ak6P5dP.png" alt="Henry head shot" id="henry-head" />
              </div>
                    <p id="contact-henry">Let's get in touch!</p>
                    <br />
                    <p>Contact me in any way you'd like or enter your information in the form below and I will reach out to you!</p>
                    <br />
            </div>
        )
    }
}

export default Contact;
