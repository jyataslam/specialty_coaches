import React from "react";
import { Helmet } from "react-helmet";
import Nav from "../components/nav/index";
import Header from "../components/landing_header/index";
import Services from "../components/services";
import About from "../components/about";
import Form from "../components/form";
import Footer from "../components/footer";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import "../assets/css/app.scss";

const HomePage = () => (
    <>
        <Helmet>
            <title>Specialty Coaches LLC - Tour Bus Leasing</title>
            <meta name="generator" content="Jason Yata" />
            <meta
                name="description"
                content="Tour Bus Leasing - Entertainer Coaches in Los Angeles"
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content="Specialty Coaches LLC - Tour Bus Leasing"
            />
            <meta property="og:site_name" content="Specialty Coaches LLC" />
            <meta property="og:url" content="http://www.specialtycoaches.com" />
            <meta
                property="og:description"
                content="Tour Bus Leasing - Entertainer Coaches in Los Angeles"
            />
            <meta
                property="og:image"
                content="https://i.ibb.co/Qjm87D2/steely3.jpg"
            />
        </Helmet>
        <div className="app-container">
            <Nav />
            <Header id="home" />
            <Services id="service" />
            <About id="about" />
            <Form id="contact-form" />
            <Footer id="footer" />
        </div>
    </>
);

export default HomePage;
