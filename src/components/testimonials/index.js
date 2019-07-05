import React, { Component } from 'react';
import './testimonials.scss';

class Testimonials extends Component {

    render(){
        return (
            <div id ="testimonials" className="jumbotron">
                <div className="container special-test-container">
                    <div className="row center test-header-row">
                        <h3 className="services-description col s12">What our clients are saying about us</h3>
                    </div>
                    <div className="row special-test-row">
                        <div className="test-flexed-item-container col s12 m6 l3">
                            <div className="text-item-container-top">
                                <div className="item-container-photo">
                                    photo goes here
                                </div>
                            </div>
                            <div className="text-item-container-bottom">
                                <p className="item-container-text">text goes here</p>
                            </div>
                        </div>
                        <div className="test-flexed-item-container col s12 m6 l3"></div>
                        <div className="test-flexed-item-container col s12 m6 l3"></div>
                        <div className="test-flexed-item-container col s12 m6 l3"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonials;