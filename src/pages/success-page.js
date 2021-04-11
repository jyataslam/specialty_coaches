import React from "react";
import { Link } from "react-router-dom";
import "../components/success/success.scss";

const SuccessPage = () => {
    return (
        <>
            <section className="success">
                <div className="success-message-container">
                    <h1>Specialty Coaches</h1>
                    <h3>Your message has been sent!</h3>
                    <h5>We'll get back to you as soon as we can.</h5>
                    <Link to="/" className="custom-button">
                        Back To Home
                    </Link>
                </div>
            </section>
        </>
    );
};

export default SuccessPage;
