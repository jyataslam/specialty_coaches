import React, { Component } from 'react';
import Carousel from './landing_carousel';

import './landing_header.scss';

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <Carousel />
                <div className="header-text-container container">
                    <p className="header-text-above col s12">Specialty <span className="coach-letter">C</span>oaches</p>
                    <div className="divider head-divider"></div>
                    <p className="header-text-below col s12">- Transportation At Its Finest -</p>
                </div>
            </div>
        )
    }
}

export default Header;