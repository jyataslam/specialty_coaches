import React, { Component } from 'react';
import axios from 'axios';

import './form.scss';

class Form extends Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }

    handleFormSubmit = event => {
        const { name, email, subject, message } = this.state;
        event.preventDefault();
        axios({
            method: 'POST',
            url: 'http://localhost:8888/api/mail_handler.php',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: `name=${name}&email=${email}&subject=${subject}&message=${message}`
        })
        .then(resp => {
            if (resp.data.success === true){
                console.log('it worked');
            } else {
                console.log('did not work');
            }
        })};
       
    render() {
        const { name, email, subject, message } = this.state;

        return (
            <div id="form" className="primary-container">
                <div className="container special-form-container">
                    <div className="row form-header-row">
                        <div className="col s12">
                            <h2 className="form-main-text">Contact</h2>
                            <h3 className="form-description">Get in touch</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <div className="row">
                                <div className="input-field col s12 m6">
                                    <input name="name" id="name" type="text" className="validate" value={name} onChange={e => this.setState({ name: e.target.value })}/>
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="input-field col s12 m6">
                                    <i className="mdi-content-mail prefix"></i>
                                    <input name="email" id="email" type="email" className="validate" value={email} onChange={e => this.setState({ email: e.target.value })}/>
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="subject" id="subject" type="text" className="validate" value={subject} onChange={e => this.setState({ subject: e.target.value })}/>
                                    <label htmlFor="subject">Subject</label>
                                </div>
                            </div>
                            <div class="row">
                                <div className="input-field col s12">
                                    <textarea name="message" id="message" className="materialize-textarea validate" value={message} onChange={e => this.setState({ message: e.target.value })}></textarea>
                                    <label htmlFor="message">Message</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 form-btn-container">
                                    <a href="" className="waves-effect waves-light btn custom-form-btn" onClick={e => this.handleFormSubmit(e)}>Submit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;