import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="services-container">
            <section className="intro-section">
                <div className="intro-content">
                    <h1>Our Services</h1>
                    <p>Explore the diverse range of IT solutions we offer to drive your business forward</p>
                </div>
            </section>
            <section className="cards-section">
                <div className="card">
                    <h2>Custom Software Development</h2>
                    <p>We design and develop custom software tailored to your business needs, ensuring seamless integration and exceptional performance.</p>
                </div>
                <div className="card">
                    <h2>Cloud Computing</h2>
                    <p>Leverage the power of the cloud with our comprehensive cloud services, including migration, management, and optimization.</p>
                </div>
                <div className="card">
                    <h2>Cybersecurity</h2>
                    <p>Protect your business from cyber threats with our advanced cybersecurity solutions, including risk assessments, monitoring, and incident response.</p>
                </div>
                <div className="card">
                    <h2>Data Analytics</h2>
                    <p>Unlock the potential of your data with our analytics services, providing insights that drive informed decision-making and strategic planning.</p>
                </div>
                <div className="card">
                    <h2>IT Consulting</h2>
                    <p>Our expert consultants provide strategic guidance and innovative solutions to help you navigate the complexities of the IT landscape.</p>
                </div>
                <div className="card">
                    <h2>Managed IT Services</h2>
                    <p>Focus on your core business while we take care of your IT infrastructure with our reliable and efficient managed services.</p>
                </div>
            </section>
        </div>
    );
};

export default Services;
