import React, { Component } from 'react';
import carouselPhoto1 from '../../assets/images/landing-background-1-edit.jpg';
import carouselPhoto2 from '../../assets/images/steely1-dark.jpg';
import carouselPhoto3 from '../../assets/images/steely3-dark.jpg';
import "./landing_header.scss";

class Carousel extends Component {
    componentDidMount() {
        M.Slider.init(this.slider);
    }

    render() {

        return (
            <div id="slider" ref={(element) => {this.slider = element}} className="slider">
                <ul className="slides">
                    <li>
                        <img src={carouselPhoto1} alt="stormtrooper bus" className="carousel-photo-bottom" />
                    </li>
                    <li>
                        <img src={carouselPhoto2} alt="stormtrooper bus" className="carousel-photo" />
                    </li>
                    <li>
                        <img src={carouselPhoto3} alt="another bus" className="carousel-photo" />
                    </li>
                </ul>
            </div>
        )
    }
}

export default Carousel;
