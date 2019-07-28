import React, { Component, Fragment } from 'react';
import SideNav from './sidenav';
import { Link, animateScroll as scroll } from "react-scroll";

import './nav.scss';

class Nav extends Component {
    state = {
        navClass: 'notactive',
        textClass: 'top',
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
            textClass: 'bottom',
        })
    }

    onTop() {
        this.setState({
            navClass: 'notactive',
            textClass: 'top',
        })
    }

    scrollToTop = () => {
        scroll.scrollToTop(); 
    };

    renderSidenavLinks() {
        return (
            <>
                <li className="sidenav-coaches-title">
                    <p>Specialty <span className="coach-letter">C</span>oaches</p>
                </li>
                <li className="sidenav-circles-container">
                    <div className="sidenav-circle"></div>
                    <div className="sidenav-circle"></div>
                    <div className="sidenav-circle"></div>
                </li>
                <li className="sidenav-close first-link">
                    <a onClick={this.scrollToTop}><span className="desktop-link">Home</span></a>
                </li>
                <li><div className="divider lightgrey"></div></li>
                <li className="sidenav-close">
                    <a href="#service"><span className="desktop-link">Services</span></a>
                </li>
                <li><div className="divider lightgrey"></div></li>
                <li className="sidenav-close">
                    <a href="#about"><span className="desktop-link">About Us</span></a>
                </li>
                <li><div className="divider lightgrey"></div></li>
                <li className="sidenav-close">
                    <a href="#contact"><span className="desktop-link">Contact</span></a>
                </li>
            </>
        )
    }

    renderLinks() {
        const text = this.state.textClass;

        return (
            <>
                <li className="sidenav-close pr-20">
                    <a onClick={this.scrollToTop}><span className={`desktop-link ${text}`}>Home</span></a>
                </li>
                <li className="sidenav-close pr-20 pl-20">
                    <Link to="service" spy={true} smooth={true} offset={0} duration={600}><span className={`desktop-link ${text}`}>Services</span></Link>
                </li>
                <li className="sidenav-close pr-20 pl-20">
                    <Link to="about" spy={true} smooth={true} offset={0} duration={600}><span className={`desktop-link ${text}`}>About Us</span></Link>
                </li>
                <li className="sidenav-close pl-20">
                    <Link to="contact" spy={true} smooth={true} duration={600}><span className={`desktop-link ${text}`}>Contact</span></Link>
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
                            <span className={`brand-logo ${text}`} onClick={this.scrollToTop}>Specialty Coaches</span>
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