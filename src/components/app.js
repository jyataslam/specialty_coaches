import React from 'react';
import { Helmet } from 'react-helmet';
import Nav from './nav';
import Header from './landing_header';
import Services from './services';
import About from './about';
import Form from './form';
import Footer from './footer';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';

const App = () => (
    <>
    <Helmet>
        <title>Specialty Coaches LLC - Tour Bus Leasing</title>
        <meta name="generator" content="Jason Yata"/>
        <meta name="description" content="Tour Bus Leasing - Entertainer Coaches in Los Angeles"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Specialty Coaches LLC - Tour Bus Leasing"/>
        <meta property="og:site_name" content="Specialty Coaches LLC"/>
        <meta property="og:url" content="http://www.specialtycoaches.com"/>
        <meta property="og:description" content="Tour Bus Leasing - Entertainer Coaches in Los Angeles"/>
        <meta property="og:image" content="https://i.ibb.co/Qjm87D2/steely3.jpg"/>
    </Helmet>
        <div className="app-container">
            <Nav/>
            <Header id="home" />
            <Services id="service" />
            <About id="about" />
            <Form id="contact-form" />
            <Footer id="footer" />
        </div>
    </>
);

export default App;
