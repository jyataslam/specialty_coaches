import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import axios from 'axios';

import './form.scss';

class Form extends Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: "",
        error: false,
        displaySuccess: false,
        visibility: 'fadeOutClass'
    }

    handleFormSubmit = async (event) => {
        const { name, email, subject, message } = this.state;
        event.preventDefault();
        await axios({
            method: 'POST',
            url: '/api/mail_handler.php',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: `name=${name}&email=${email}&subject=${subject}&message=${message}`
        })
            .then(resp => {
                if (resp.data.success === true) {
                    this.setState({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                        displaySuccess: true,
                        visibility: 'fadeInClass'
                    });
                    setTimeout(
                        function() {
                            this.setState({
                                visibility: "fadeOutClass"
                            });
                        }
                        .bind(this),
                        4000
                    );
                    setTimeout(
                        function() {
                            this.setState({
                                displaySuccess: false
                            });
                        }.bind(this),
                        5500
                    )
                } else {
                    this.setState({
                        error: true,
                        visibility: 'fadeInClass'
                    });
                    setTimeout(
                        function() {
                            this.setState({
                                visibility: 'fadeOutClass'
                            });
                        }
                        .bind(this),
                        4000
                    );
                    setTimeout(
                        function() {
                            this.setState({
                                error: false
                            });
                        }.bind(this),
                        5500
                    )
                }
            })
    };

    render() {
        const { name, email, subject, message, error, displaySuccess, visibility } = this.state;

        return (
            <Fade>
            <div id="contact-form" className="primary-container">
                <div className="container special-form-container">
                    <div className="row form-header-row">
                        <div className="col s12">
                            <h2 className="form-main-text">Contact</h2>
                            <h3 className="form-description">Get in touch with us</h3>
                        </div>
                    </div>
                    <Fade bottom>
                    <div className="row">
                        <div className="col s12">
                            <div className="row first-form-row">
                                <div className="input-field col s12 m6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input name="name" id="name" type="text" value={name} onChange={e => this.setState({ name: e.target.value })} />
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="input-field col s12 m6 email-input-field">
                                    <i className="material-icons prefix">email</i>
                                    <input name="email" id="email" type="email" value={email} className="validate" onChange={e => this.setState({ email: e.target.value })} />
                                    <label htmlFor="email">Email</label>
                                    <span className="helper-text" data-error="Please enter a valid email address" data-success="✓"></span>
                                </div>
                            </div>
                            <div className="row third-form-row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">subject</i>
                                    <input name="subject" id="subject" type="text" value={subject} onChange={e => this.setState({ subject: e.target.value })} />
                                    <label htmlFor="subject">Subject</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">mode_edit</i>
                                    <textarea name="message" id="message" className="materialize-textarea custom-textarea" value={message} onChange={e => this.setState({ message: e.target.value })}></textarea>
                                    <label htmlFor="message">Message</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 form-btn-container">
                                    <a href="" className="waves-effect waves-light btn custom-form-btn" onClick={e => this.handleFormSubmit(e)}>Submit</a>
                                </div>
                            </div>
                            {error &&
                                <div className={`error-message-container ${visibility}`}>
                                    <h3 className="error-message">Oops, something went wrong</h3>
                                </div>
                            }
                            {displaySuccess &&
                                <div className={`success-message-container ${visibility}`}>
                                    <h3 className="success-message">Your message has been sent! We'll get back to you shortly.</h3>
                                </div>
                            }
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>
            </Fade>
        )
    }
}

export default Form;