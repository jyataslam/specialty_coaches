import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './footer.scss';

class Footer extends Component {

    scrollToTop = () => {
        scroll.scrollToTop(); 
    };

    render(){
        return (
            <div className="primary-container" id="contact">
                <div className="container">
                    <ul className="row" id="footer-links-row">
                        <li className="col s12 m1 offset-m4">
                            <a onClick={this.scrollToTop}>Home</a>
                        </li>
                        <li className="col s12 m1">
                            <Link to="service" spy={true} smooth={true} offset={-40} duration={600}>Services</Link>
                        </li>
                        <li className="col s12 m1">
                            <Link to="about" spy={true} smooth={true} offset={-50} duration={600}>About Us</Link>
                        </li>
                        <li className="col s12 m1">
                            <Link to="contact" spy={true} smooth={true} duration={600}>Contact</Link>
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
                    <div className="row" id="phone-email">
                        <p className="col s12">
                            <a href="tel:714-232-8668">714-232-8668</a>
                            <br></br>
                            <a href="mailto:jasonyata@gmail.com">Email Specialty Coaches</a>
                        </p>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <ul id="social">
                                {/* <li>
                                    <a href="" className="social" id="social-li" alt="LinkedIn" target="_blank">
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path id="social-svg" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                    </a>
                                </li> */}
                                <li>
                                    <a href="https://www.facebook.com/specialtycoaches/" className="social" id="social-fb" alt="Facebook" target="_blank">
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook icon</title><path id="social-svg" d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/></svg>
                                    </a>
                                </li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row copyright-row">
                        <div className="col s12">
                            <p id="copyright">
                                Copyright © 2019 Specialty Coaches, LLC. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;