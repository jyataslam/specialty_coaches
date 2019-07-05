import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {

    render(){
        return (
            <div className="jumbotron" id="footer">
                <div className="container">
                    <ul className="row">
                        <li className="col s12 m1 offset-m4">
                            <a href="#home">Home</a>
                        </li>
                        <li className="col s12 m1">
                            <a href="#services">Services</a>
                        </li>
                        <li className="col s12 m1">
                            <a href="#about">About Us</a>
                        </li>
                        <li className="col s12 m1">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <div className="row" id="company">
                        <div className="col s12">
                            <p className="company-name">Specialty Coaches</p>
                        </div>
                    </div>
                    <div className="row" id="tagline">
                    <div className="col s12">
                            <p className="company-tagline">- Transportation At Its Finest -</p>
                        </div>
                    </div>
                    <div className="row" id="address">
                        <div className="address col s12 m6 offset-m3">
                            <p className="address-header">Orange County Office</p>
                            <a href="https://goo.gl/maps/LV7Ey4pbNmWV2ypM6" target="_blank">
                                5791 Machine Dr.<br></br>
                                Huntington Beach, CA 92649
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <ul id="social">
                                <li>
                                    <a href="" className="social" id="social-li" alt="LinkedIn" target="_blank">
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path id="social-svg" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                    </a>
                                </li>
                                <li>
                                    
                                </li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;