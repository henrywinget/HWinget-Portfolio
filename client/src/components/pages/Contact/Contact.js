import React, { Component } from 'react';
import API from "../../../utils/API";
import './Contact.css';
import Zoom from 'react-reveal/Zoom';
import Wrapper from '../../Wrapper/Wrapper';
import ReactDOM from 'react-dom';

export class Contact extends Component {

    state = {
        name: "",
        phoneNumber: "",
        email: "",
        title: "",
        message: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        if (this.state.name && this.state.email) {
            API.saveContact({
                name: this.state.name,
                phoneNumber: this.state.phoneNumber,
                email: this.state.email,
                title: this.state.title,
                message: this.state.message
            })
                .then("Information sent!")
                // res => console.log(res)
                .catch("Information not sent. We're investigating!");
                // err => console.log(err)
        }
        ReactDOM.render("Thanks for submitting!", document.getElementById("submitting"));
        alert("Thanks for reaching out! Talk to you soon!");
    };


    render() {
        return (
            <Wrapper>
            <div id="contact-form" className="col">
                <Zoom>
                    <p id="contact-henry">Contact Henry</p>
                    <br />
                    <p>Contact me in any way you'd like or enter your information in the form below and I will reach out to you!</p>
                    <br />
                    
                    <form>
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="first-name">Name</label>
                                <input type="text" className="form-control" placeholder="" value={this.state.name} onChange={this.handleInputChange} name="name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="last-name">Phone number</label>
                                <input type="tell" className="form-control" placeholder="" value={this.state.phoneNumber} onChange={this.handleInputChange} name="phoneNumber" />
                            </div>
                            <br />
                            <div className="form-group col">
                                <label htmlFor="exampleFormControlInput1">Email address</label>
                                <input type="email" className="form-control" id="email-input" placeholder="" value={this.state.email} onChange={this.handleInputChange} name="email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="inquiry-title">Title</label>
                                <input id="contact-title" type="text" className="form-control" value={this.state.title} onChange={this.handleInputChange} name="title" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="inquiry-title">Message</label>
                                <textarea id="contact-body" type="text" className="form-control" rows="6" value={this.state.message} onChange={this.handleInputChange} name="message"></textarea>
                            </div>
                        </div>
                        <input className="btn btn-primary float-right" type="submit" value="Submit" disabled={!(this.state.name && this.state.email)}
                            onClick={this.handleFormSubmit} />
                        <p id="submitting">I will get back to you as soon as I can!</p>
                    </form>
                </Zoom>
            </div>
            </Wrapper>
        )
    }
}

export default Contact
