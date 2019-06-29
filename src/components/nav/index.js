import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import SideNav from './sidenav';

import './nav.scss';

class Nav extends Component {
    state = {
        navClass: 'notactive',
        textClass: 'top'
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            if (window.scrollY < 10){
                this.onTop();
            } else {
                this.notTop();
            }
        });
    }


    notTop(){
        this.setState({
            navClass: 'active',
            textClass: 'bottom'
        })
    }

    onTop() {
        this.setState({
            navClass: 'notactive',
            textClass: 'top'
        })
    }

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
        const text = this.state.textClass;

        return (
            <>
                <li className="sidenav-close pr-20">
                    <Link to="/"><span className={`desktop-link ${text}`}>Home</span></Link>
                </li>
                <li className="sidenav-close pr-20 pl-20">
                    <Link to="/about"><span className={`desktop-link ${text}`}>About Us</span></Link>
                </li>
                <li className="sidenav-close pl-20">
                    <Link to="/contact"><span className={`desktop-link ${text}`}>Contact</span></Link>
                </li>
            </>
        )
    }

    render() {
        const links = this.renderLinks();
        const sidenavLinks = this.renderSidenavLinks();
        const nav = this.state.navClass;
        const text = this.state.textClass;

        return (
            <>
                <div className="navbar-fixed">
                    <nav className={`top-nav ${nav}`}>
                        <div className="nav-wrapper">
                            <span className={`brand-logo ${text}`}>Specialty Coaches</span>
                            <a href="#" id="sidenav-trig" data-target="sidenav" className={`sidenav-trigger ${text}`}>
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className="right hide-on-med-and-down desktop-links-container">{links}</ul>
                        </div>
                    </nav>
                </div>
                <SideNav links={sidenavLinks} />
            </>
        )
    }
}

export default Nav;