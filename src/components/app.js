import React from 'react';
import Nav from './nav';
import Header from './landing_header';
import Mission from './mission_statement';
import Services from './services';
import Testimonials from './testimonials';
import About from './about';
import Footer from './footer';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';

const App = () => (
    <>
        <div className="app-container">
            <Nav/>
            <Header id="home" />
            {/* <Mission id="services" /> */}
            <Services id="service" />
            <About id="about" />
            {/* <Testimonials/> */}
            <Footer id="contact" />
        </div>
    </>
);

export default App;
