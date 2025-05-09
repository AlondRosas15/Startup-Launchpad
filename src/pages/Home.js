import React from 'react';
import { Link } from 'react-router-dom'; // Use Link here
import './styles/Home.css';


const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-header">Welcome to Startup Launchpad</h1>

      <div className="text-box">
  <p>
    Startup Launchpad helps individuals and businesses accelerate their growth
    through expert technical services and consulting. Whether you're launching
    a product or scaling operations, we provide the tools and guidance to bring
    your ideas to life.
  </p>
</div>

      {/* Plans Section */}
      <section className="plans-section">
        <h2 className="plans-heading">Choose Your Plan</h2>
        <div className="plans-container">
          <div className="plan-card">
            <h3>Premium</h3>
            <p className="plan-price">Free</p>
            <ul>
              <li>Basic support</li>
              <li>Access to service dashboard</li>
              <li>1 project slot</li>
            </ul>
            {/* Use Link to navigate */}
            <Link to="/signup" className="select-plan">Get Started</Link>
          </div>
          <div className="plan-card pro">
            <h3>Pro</h3>
            <p className="plan-price">$12/month</p>
            <ul>
              <li>Priority support</li>
              <li>Unlimited projects</li>
              <li>Advanced analytics</li>
            </ul>
            {/* Use Link to navigate */}
            <Link to="/signin" className="select-plan">Upgrade</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
