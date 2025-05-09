import React, { useState } from 'react';
import './styles/SignIn.css';
import { useNavigate } from 'react-router-dom'; // ✅ import navigate
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // ✅ initialize

  const handleSignIn = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage('✅ Signed in successfully!');
      // Optionally navigate to dashboard
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setMessage('❌ No user found with this email.');
      } else if (error.code === 'auth/wrong-password') {
        setMessage('❌ Incorrect password.');
      } else {
        setMessage(`❌ ${error.message}`);
      }
    }
  };

  const redirectToResetPage = () => {
    navigate('/reset'); // ✅ redirect
  };

  return (
    <div className="sign-container">
      <h1 className="sign-header">Sign In</h1>
      <form className="sign-form" onSubmit={handleSignIn}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="sign-button">Sign In</button>
      </form>



      {message && <p className="sign-feedback">{message}</p>}

      <p className="sign-footer">
  Don't have an account? <a href="/signup" className="sign-link">Sign Up</a><br />
  <a href="/reset" className="sign-link">Forgot Password?</a>
</p>

    </div>
  );
};

export default SignIn;
