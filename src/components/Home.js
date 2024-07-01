import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className='hero'>
              <h2> INNOVATIVE IT SOLUTIONS </h2>
            </div>
            <div className="cards-container">
                <div className="card">
                    <h2>Innovative IT Solutions</h2>
                    <p>
                        At Urpan Technologies, we provide cutting-edge IT services that empower your business to thrive in the digital age.
                    </p>
                </div>
                <div className="card">
                    <h2>Our Expertise</h2>
                    <p>
                        Our expertise spans across custom software development, cloud computing, cybersecurity, and data analytics.
                    </p>
                </div>
                <div className="card">
                    <h2>Dedicated Professionals</h2>
                    <p>
                        Our team of skilled professionals is dedicated to delivering innovative and reliable solutions that meet your unique business needs.
                    </p>
                </div>
                <div className="card">
                    <h2>Transform Your Business</h2>
                    <p>
                        Partner with Urpan Technologies and experience the future of IT solutions. Contact us today to learn how we can help you achieve your business objectives.
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;
