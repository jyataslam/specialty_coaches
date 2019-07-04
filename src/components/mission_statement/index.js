import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './mission_statement.scss';
import whitetourbus from '../../assets/images/white-tourbus.png';
import travis from '../../assets/images/travis-tourbus.jpg';
import interior from '../../assets/images/tourbus-interior.jpg';

class Mission extends Component {
    render() {
        return (
            <>
                <div className="jumbotron" id="mission-statement">
                    <div className="container special-mission-container">
                        <div className="row center mission-header-row">
                            <h2 className="services-text">SERVICES</h2>
                            <h3 className="services-description">What we can provide for you</h3>
                        </div>

                        {/* First Mission Statement Item */}
                        <Fade>
                            <div className="row special-row">
                                <div className="first-statement-photo col s12 m6">
                                    <div className="empty-photo-border"></div>
                                    <img src={whitetourbus} alt="white tour bus" className="first-bus-photo"/>
                                </div>
                                <div className="first-statement-text center col s12 m6">
                                    <p className="description-title">Concert Touring</p>
                                    <p className="description-text">
                                        Whether you need a band bus, crew bus, or star coach, we're just a call away.
                            </p>
                                </div>
                            </div>
                        </Fade>

                        {/* Second Mission Statement Item */}
                        <Fade>
                            <div className="row special-row">
                                <div className="first-statement-text-left center col s12 m6">
                                    <p className="description-title">Corporate Events</p>
                                    <p className="description-text">
                                        We're well versed in thinking outside the box. We can provide a solution for your special event or corporate tour including vehicle wrapping.
                            </p>
                                </div>
                                <div className="second-statement-photo col s12 m6">
                                    <div className="empty-photo-border"></div>
                                    <img src={travis} alt="travis barker" className="second-bus-photo"/>
                                </div>
                            </div>
                        </Fade>

                        {/* Third Mission Statement Item */}
                        <Fade>
                            <div className="row special-row">
                                <div className="third-statement-photo col s12 m6">
                                    <div className="empty-photo-border"></div>
                                    <img src={interior} alt="white tour bus" className="third-bus-photo"/>
                                </div>
                                <div className="first-statement-text center col s12 m6">
                                    <p className="description-title">Dressing Rooms</p>
                                    <p className="description-text">
                                        Whether you need a dressing room, production office or need to move around town, we have a coach that can work for you.
                            </p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </>
        )
    }
}

export default Mission;