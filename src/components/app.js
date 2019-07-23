import React from 'react';
import Nav from './nav';
import Header from './landing_header';
import Services from './services';
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
            <Services id="service" />
            <About id="about" />
            <Footer id="contact" />
        </div>
    </>
);

export default App;
