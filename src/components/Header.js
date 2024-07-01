import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Example CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <h1> URPAN</h1>
                <h2> TECHNOLOGIES</h2>
            </div>
            <nav className="nav-links">
                <ul>
                    <li><Link to="/" className="nav-link">HOME</Link></li>
                    <li><Link to="/about" className="nav-link">ABOUT</Link></li>
                    <li><Link to="/services" className="nav-link">SERVICES</Link></li>
                    <li><Link to="/career" className="nav-link">CAREER</Link></li>
                    <li><Link to="/contact" className="nav-link">CONTACT</Link></li>
                </ul>
            </nav>
            <div className="contact-info">
                <p>Call us today!</p>
                <p><a href="tel:+14087446750" className="phone-number">+1 408-744-6750</a></p>
            </div>
        </header>
    );
};

export default Header;