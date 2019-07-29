import React, { Component } from 'react';
import './form.scss';

class Form extends Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: "",
        mailSent: false,
        error: null
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log('state', this.state);
    }

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
                                    <input id="name" type="text" className="validate" value={name} onChange={e => this.setState({ name: e.target.value })}/>
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="input-field col s12 m6">
                                    <i className="mdi-content-mail prefix"></i>
                                    <input id="email" type="email" className="validate" value={email} onChange={e => this.setState({ email: e.target.value })}/>
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="subject" type="text" className="validate" value={subject} onChange={e => this.setState({ subject: e.target.value })}/>
                                    <label htmlFor="subject">Subject</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <textarea id="message" className="materialize-textarea" value={message} onChange={e => this.setState({ message: e.target.value })}></textarea>
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