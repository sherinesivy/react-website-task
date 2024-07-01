import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="aboutus-container">
            <section className="intro-section">
                <div className="intro-content">
                    <h1>About UrpanTech</h1>
                    <p>Building lasting relationships with businesses through people resources</p>
                </div>
            </section>
            <section className="content-section">
                <div className="card">
                    <h2>High Customer Satisfaction</h2>
                    <p>Quality and Consistency</p>
                    <p>
                        Our focused efforts are directed towards providing businesses with talented resources throughout their project needs and ensure continuous workflow.
                    </p>
                </div>
                <div className="card">
                    <h2>Resourceful Team</h2>
                    <p>Quick and Ingenious</p>
                    <p>
                        Quick on our toes, at UrpanTech, we are adept at providing out-of-the-box and customized solutions to address your resource needs.
                    </p>
                </div>
                <div className="card">
                    <h2>Top Notch Skillset Talent</h2>
                    <p>Suitable and Sustainable</p>
                    <p>
                        UrpanTech is committed to providing talented resources that best suit your business needs and sustain your business growth.
                    </p>
                </div>
            </section>
            <section className="stats-section">
                <div className="stat">
                    <h2>22</h2>
                    <p>Years Of Experience</p>
                </div>
                <div className="stat">
                    <h2>2500</h2>
                    <p>Placements</p>
                </div>
                <div className="stat">
                    <h2>4000</h2>
                    <p>Consultants</p>
                </div>
                <div className="stat">
                    <h2>50</h2>
                    <p>Clients</p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
