import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from "react-scroll";
import './services.scss';

class Services extends Component {

    render() {
        return (
            <Fade>
            <div className="jumbotron" id="service">
                <div className="container special-service-container">
                    <Fade>
                        <div className="row services-header-row">
                            <div className="col s7">
                                <h2 className="service-main-text">Services</h2>
                                <h3 className="service-description">What we can provide for you</h3>
                            </div>
                        </div>
                    </Fade>
                    <div className="row special-services-row">
                        <Fade left>
                            <div className="col s1 first-service-icon">
                                <i className="material-icons custom-services-icon">music_note</i>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col s7 service-explanation">
                                <h2 className="services-title">Concert Touring</h2>
                                <p className="service-paragraph">Whether you need a band bus, crew bus, or star coach, we're just a call away.</p>
                            </div>
                        </Fade>
                    </div>
                    <div className="row special-services-row-mid">
                        <Fade left>
                            <div className="col s1 first-service-icon">
                                <i className="material-icons custom-services-icon">people</i>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col s8 service-explanation">
                                <h2 className="services-title">Corporate Events</h2>
                                <p className="service-paragraph">We're well versed in thinking outside the box. We can provide a solution for your special event or corporate tour including vehicle wrapping.</p>
                            </div>
                        </Fade>
                    </div>
                    <div className="row special-services-row-last">
                        <Fade left>
                            <div className="col s1 first-service-icon">
                                <i className="material-icons custom-services-icon">airport_shuttle</i>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col s6 service-explanation">
                                <h2 className="services-title">Dressing Rooms</h2>
                                <p className="service-paragraph">Whether you need a dressing room, production office or need to move around town, we have a coach that can work for you.</p>
                            </div>
                        </Fade>
                    </div>
                    <Fade>
                        <Link to="contact" spy={true} smooth={true} duration={600}>
                            <a href="" className="waves-effect waves-light btn custom-services-btn">Contact Us To Learn More</a>
                        </Link>
                    </Fade>
                </div>
            </div>
            </Fade>
        )
    }
}

export default Services;