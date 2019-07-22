import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from "react-scroll";
import stormtrooperOutside from '../../assets/images/stormtrooper-outside.jpg';
import stormtrooperInside from '../../assets/images/stormtrooper-inside.png';
import stormtrooperDressing from '../../assets/images/stormtrooper-bedroom.jpg';
import './services.scss';

class Services extends Component {

    render() {
        return (
            <Fade>
                <div className="primary-container" id="service">
                    <div className="container special-service-container">
                        <Fade>
                            <div className="row services-header-row">
                                <div className="col s12">
                                    <h2 className="service-main-text">Services</h2>
                                    <h3 className="service-description">What we can provide for you</h3>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="row special-services-row">
                                <div className="col s12 m5 service-explanation">
                                    <div className="service-photo-temp">
                                        <img className="services-bus-photo" src={stormtrooperOutside} alt="Outside Image of Tour Bus" />
                                    </div>
                                    <h2 className="services-title">Concert Touring</h2>
                                    <p className="service-paragraph mb-5em">Whether you need a band bus, crew bus, or star coach, we're just a call away.</p>
                                </div>
                                <div className="col s12 m5 offset-m1 service-explanation explanation-pg2">
                                    <div className="service-photo-temp">
                                        <img src={stormtrooperInside} alt="Inside of Tour Bus" />
                                    </div>
                                    <h2 className="services-title">Corporate Events</h2>
                                    <p className="service-paragraph">We're well versed in thinking outside the box. We can provide a solution for your special event or corporate tour including vehicle wrapping.</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="row special-flex-row">
                                <div className="col s12 service-explanation-flexed center">
                                    <div className="service-photo-temp">
                                        <img src={stormtrooperDressing} alt="Tour Bus Dressing Room" />
                                    </div>
                                    <h2 className="services-title">Dressing Rooms</h2>
                                    <p className="service-paragraph">Whether you need a dressing room, production office or need to move around town, we have a coach that can work for you.</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade>
                            <div className="row custom-tagline-row">
                                <div className="services-bottom-tagline col s12 m9">
                                    <h3 className="services-tagline">Contact us for our full range of amenities</h3>
                                </div>
                                <div className="services-bottom-btn col s12 m3">
                                    <Link to="contact" spy={true} smooth={true} duration={600}>
                                        <a href="" className="waves-effect waves-light btn custom-services-btn">Learn More</a>
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </Fade>
        )
    }
}

export default Services;