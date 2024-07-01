import React from 'react';
import './Careers.css';

const Careers = () => {
    const handleApply = (jobTitle) => {
        alert(`Applying for ${jobTitle}`);
        // Logic for applying for the job goes here
    };

    return (
        <div className="careers-container">
            <section className="intro-section">
                <div className="intro-content">
                    <h1>Careers at UrpanTech</h1>
                    <p>Explore exciting career opportunities and join our talented team.</p>
                </div>
            </section>
            <section className="cards-section">
                <div className="job-card">
                    <h2>Software Developer</h2>
                    <p><strong>Location:</strong> Remote</p>
                    <p>We are looking for a skilled software developer to join our team and contribute to the development of cutting-edge software solutions.</p>
                    <button onClick={() => handleApply('Software Developer')}>Apply Now</button>
                </div>
                <div className="job-card">
                    <h2>Cloud Engineer</h2>
                    <p><strong>Location:</strong> New York, NY</p>
                    <p>Seeking a cloud engineer with expertise in cloud platforms to manage and optimize our cloud infrastructure.</p>
                    <button onClick={() => handleApply('Cloud Engineer')}>Apply Now</button>
                </div>
                <div className="job-card">
                    <h2>Cybersecurity Analyst</h2>
                    <p><strong>Location:</strong> San Francisco, CA</p>
                    <p>Join our cybersecurity team to monitor and respond to security incidents, conduct risk assessments, and implement security measures.</p>
                    <button onClick={() => handleApply('Cybersecurity Analyst')}>Apply Now</button>
                </div>
            </section>
        </div>
    );
};

export default Careers;
