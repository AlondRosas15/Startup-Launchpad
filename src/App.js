// src/App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import NavBar from './component/NavBar/NavBar';
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/ResetPassword';
import Payment from './pages/Payment';
import Profile from './pages/Profile';

import useAuth from './hook/useAuth'; // Remove curly braces
import './App.css';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="loading">Loading…</div>;
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />

        <Route
          path="/signin"
          element={!user ? <SignIn /> : <Navigate to="/profile" replace />}
        />
        <Route
          path="/signup"
          element={!user ? <SignUp /> : <Navigate to="/profile" replace />}
        />

        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/signin" replace />}
        />

        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/signin" replace />}
        />

        <Route path="/reset" element={<ResetPassword />} />

        <Route
          path="*"
          element={
            user ? <Navigate to="/profile" replace /> : <Navigate to="/signin" replace />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
