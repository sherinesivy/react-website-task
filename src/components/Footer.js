
import React from 'react';
import './footer.css'; // Example CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>Company</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/career">Career</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Contact Info</h3>
                <p>39355 California Street, #303,<br/> Fremont, CA 94538</p>
                <p>Email: <a href="mailto:info@urpantech.com">info@urpantech.com</a></p>
                <p>Career Email: <a href="mailto:career@urpantech.com">career@urpantech.com</a></p>
                <p>Phone: <a href="tel:+14087446750">+1 408-744-6750</a></p>
            </div>
            <div className="footer-section">
                <p>&copy; UrpanTech. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;