import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './about.scss';

class About extends Component {

    render(){
        return (
            <Fade>
            <div className="primary-container" id="about">
                <div className="container special-about-container">
                    <div className="row">
                        <div className="col s12 m7 l5 ipadpro-col">
                            <Fade>
                                <>
                            <h2 className="about-text">
                                About Us
                            </h2>
                                </>
                            </Fade>
                            <Fade>
                                <>
                            <h3 className="about-description">Who we are</h3>
                                </>
                            </Fade>
                            <Fade bottom>
                                <>
                            <p className="about-paragraph">
                                <span className="indent-pg">Specialty Coaches was established in 2014 by veterans of the touring world to provide a top of the line coach option based in the greater Los Angeles area. Through our growth we have received warm welcome to many who look to begin and end their tours in Southern California.</span><br></br><br></br>
                            </p>
                            <p className="about-paragraph">
                                <span className="indent-pg">We pride ourselves in comfort and safety. All drivers adhere to all DOT regulations, are randomly drug tested and are willing to provide a top level of service. We are fully insured and DOT compliant.</span><br></br><br></br>
                            </p>
                            <p className="about-paragraph">
                                <span className="indent-pg">We strive to provide a quality product and we will do what it takes to provide our clients with a comfortable ride and a fully functional vehicle. We are always upgrading our equipment and make adjustments based on suggestions of our clients.</span><br></br>
                            </p>
                            <a href="mailto:nick@specialtycoaches.com" className="waves-effect waves-light btn custom-button">Email Us For More Info</a>
                                </>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
        )
    }
}

export default About;
