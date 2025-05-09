import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './styles/Dashboard.css';

const Dashboard = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web apps built with modern frameworks.',
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform mobile apps using Flutter or React Native.',
    },
    {
      title: 'API & Backend Services',
      description: 'Robust APIs with Node.js, Python, or Go. Scalable and secure.',
    },
    {
      title: 'Tech Consulting',
      description: 'Advice on architecture, scaling, and digital strategy.',
    },
    {
      title: 'Project/Product Management',
      description: 'From idea to launch—focused on user-centric products.',
    },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Select Your Service</h1>
      <section className="select-service-section">
        {services.map((service, index) => (
          <div
            key={index}
            className={`selectable-card ${selectedService === index ? 'selected' : ''}`}
            onClick={() => setSelectedService(index)}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
      {/* Upgrade Subscription Link */}
           <div className="upgrade-section">
        <Link to="/payment" className="upgrade-button">
          Upgrade Subscription
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;