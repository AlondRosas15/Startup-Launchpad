import React from 'react';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-header">Welcome to Startup Launchpad</h1>
      
      <section className="services-section">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>Custom websites and web apps built with modern frameworks.</p>
        </div>
        <div className="service-card">
          <h3>Mobile App Development</h3>
          <p>Cross-platform mobile apps using Flutter or React Native, optimized for performance.</p>
        </div>
        <div className="service-card">
          <h3>API & Backend Services</h3>
          <p>Robust APIs with Node.js, Python, or Go. Scalable, secure, and cloud-ready.</p>
        </div>
        <div className="service-card">
          <h3>Tech Consulting</h3>
          <p>Guidance on software architecture, stack selection, scaling, and digital strategy.</p>
        </div>
        <div className="service-card">
          <h3>Project/Product Management</h3>
          <p>Strategic planning and execution of software projects—from idea to launch—focused on delivering user-centric, scalable, and impactful products.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
