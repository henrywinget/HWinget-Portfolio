import React, { Component } from 'react';
import './Contact.css';

export class Contact extends Component {
  render() {
    return (
        <div id="contact-form" className="col">
            <h5 id="contact-henry">Contact Henry</h5>
            <br/>
            <p>Have a look at my resume and contact me any way you'd like or enter your information in the form below and I will reach out to you!</p>
            <br/>
            
            <form>
                <div className="row">
                    <div class="form-group col">
                        <label for="first-name">Name</label>
                        <input type="text" class="form-control" placeholder=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col">
                        <label for="last-name">Phone number</label>
                        <input type="tell" class="form-control" placeholder=""/>
                    </div>
                    <br/>
                    <div className="form-group col">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="email-input" placeholder=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col">
                        <label for="inquiry-title">Title</label>
                        <input id="contact-title" type="text" class="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col">
                        <label for="inquiry-title">Message</label>
                        <textarea id="contact-body" type="text" class="form-control" rows="6"></textarea>
                    </div>
                </div>
                <input className="btn btn-primary float-right" type="submit" value="Submit"/>
                <p>I will get back to you as soon as I can!</p>
            </form>
        </div>
    )
  }
}

export default Contact
