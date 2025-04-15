// src/pages/SignIn.js
import React from 'react'
import './styles/SignIn.css'

const SignIn = () => {
  return (
<div className="sign-container">
      <h1 className="sign-header">Sign In</h1>
      <form className="sign-form">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />

        <button type="submit" className="sign-button">Sign In</button>
      </form>
      <p className="sign-footer">
        Don't have an account? <a href="/signup" className="sign-link">Sign Up</a>
      </p>
    </div>
  );
};

export default SignIn
