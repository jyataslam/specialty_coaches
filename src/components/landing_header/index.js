import React, { Component } from 'react';

import './landing_header.scss';

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-text-container container">
                    <p className="header-text-above col s12">Specialty Coaches</p>
                    <div className="divider head-divider"></div>
                    <p className="header-text-below col s12">Transportation At Its Finest</p>
                </div>
            </div>
        )
    }
}

export default Header;