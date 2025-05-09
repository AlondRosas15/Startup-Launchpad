import React, { useState } from 'react';
import './styles/ResetPassword.css';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!email) {
      setMessage('❌ Please enter your email address.');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('📩 Password reset email sent! Check your inbox.');
    } catch (error) {
      setMessage(`❌ ${error.message}`);
    }
  };

  return (
    <div className="sign-container">
      <h1 className="sign-header">Reset Password</h1>
      <form className="sign-form" onSubmit={handleReset}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="sign-button">Send Reset Email</button>
      </form>
      {message && <p className="sign-feedback">{message}</p>}
      <p className="sign-footer">
        Remembered your password? <a href="/signin" className="sign-link">Sign In</a>
      </p>
    </div>
  );
};

export default ResetPassword;
