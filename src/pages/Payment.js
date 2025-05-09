import React, { useState } from 'react';
import './styles/SignIn.css'; 

const Payment = () => {
  const [message, setMessage] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    setMessage('✅ Payment successful! Thank you for upgrading to the Pro plan.');
  };

  return (
    <div className="sign-container">
      <h1 className="sign-header">Complete Your Payment</h1>
      <form className="sign-form" onSubmit={handlePayment}>
        <label htmlFor="card-number">Card Number:</label>
        <input
          type="text"
          id="card-number"
          placeholder="Enter your card number"
          required
        />

        <label htmlFor="expiry-date">Expiry Date:</label>
        <input
          type="text"
          id="expiry-date"
          placeholder="MM/YY"
          required
        />

        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          placeholder="Enter CVV"
          required
        />

        <button type="submit" className="sign-button">Pay Now</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Payment;