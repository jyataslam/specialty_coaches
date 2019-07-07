import React, { Component } from 'react';
import './services.scss';

class Services extends Component {

    render() {
        return (
            <div className="jumbotron" id="service">
                <div className="container special-service-container">
                    <div className="row">
                        <div className="col s7">
                            <h2 className="service-main-text">Services</h2>
                            <h3 className="service-description">What we can provide for you</h3>
                            <div className="col s1 service-one-icon">
                                <i className="ti-music"></i>
                            </div>
                            <div className="col s6 service-one-container">
                                <h2 className="services-title">Concert Touring</h2>
                                <p className="service-paragraph">Whether you need a band bus, crew bus, or star coach, we're just a call away.</p>
                            </div>
                            <h2 className="services-title">Corporate Events</h2>
                            <p className="service-paragraph">We're well versed in thinking outside the box. We can provide a solution for your special event or corporate tour including vehicle wrapping.</p>
                            <h2 className="services-title">Dressing Rooms</h2>
                            <p className="service-paragraph">Whether you need a dressing room, production office or need to move around town, we have a coach that can work for you.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;