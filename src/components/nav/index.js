import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import SideNav from './sidenav';

import './nav.scss';

class Nav extends Component {

    renderSidenavLinks() {
        return (
            <>
                <li className="sidenav-close first-link">
                    <Link to="/"><span className="desktop-link">Home</span></Link>
                </li>
                <li><div className="divider lightgrey"></div></li>
                <li className="sidenav-close">
                    <Link to="/about"><span className="desktop-link">About Us</span></Link>
                </li>
                <li><div className="divider lightgrey"></div></li>
                <li className="sidenav-close">
                    <Link to="/contact"><span className="desktop-link">Contact</span></Link>
                </li>
            </>
        )
    }

    renderLinks() {
        return (
            <>
                <li className="sidenav-close">
                    <Link to="/"><span className="desktop-link">Home</span></Link>
                </li>
                <li className="sidenav-close">
                    <Link to="/about"><span className="desktop-link">About Us</span></Link>
                </li>
                <li className="sidenav-close">
                    <Link to="/contact"><span className="desktop-link">Contact</span></Link>
                </li>
            </>
        )
    }

    render() {
        const links = this.renderLinks();
        const sidenavLinks = this.renderSidenavLinks();

        return (
            <>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                            <span className="brand-logo">Specialty Coaches</span>
                            <a href="#" id="sidenav-trig" data-target="sidenav" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className="right hide-on-med-and-down desktop-links-container">{links}</ul>
                        </div>
                    </nav>
                </div>
                <SideNav links={sidenavLinks}/>
            </>
        )
    }
}

export default Nav;