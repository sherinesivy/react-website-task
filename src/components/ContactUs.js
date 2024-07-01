import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us-container">
            <section className="contact-info">
                <div className="address">
                    <h2>Our Address</h2>
                    <p>39355 California Street, #303, Fremont, CA 94538</p>
                    <a
                        href="https://www.google.com/maps/place/39355+California+St+%23303,+Fremont,+CA+94538"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="map-link"
                    >
                        View on Google Maps
                    </a>
                </div>
                <div className="phone">
                    <h2>Phone Number</h2>
                    <p>+1 408-744-6750</p>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
