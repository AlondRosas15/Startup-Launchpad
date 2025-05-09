import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth} from '../firebase'; // Import Firebase auth
import { onAuthStateChanged } from 'firebase/auth'; // Import Firebase auth state change listener
import './styles/Profile.css';

const Profile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '123-456-7890',
    bio: 'I am a passionate entrepreneur building innovative solutions.',
    subscription: 'Premium Plan',
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log('Auth State Changed:', currentUser); // Debugging currentUser
        setUser((prevUser) => ({
          ...prevUser,
          name: currentUser.displayName || 'User',
          email: currentUser.email || '',
        }));
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleCancelSubscription = () => {
    alert('Your subscription has been canceled.');
    setUser((prevUser) => ({ ...prevUser, subscription: 'None' }));
  };

  const handleUpgradeSubscription = () => {
    alert('Redirecting to upgrade subscription page...');
  };

  const handleUpdatePassword = () => {
    alert('Redirecting to update password page...');
  };

  return (
    <div className="profile-container">
      <h1 className="profile-header">Your Profile</h1>
      <div className="text-box">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Bio:</strong> {user.bio}</p>
        <p><strong>Subscription:</strong> {user.subscription}</p>
      </div>
      <div className="profile-settings">
        <h2>Settings</h2>
        <button className="profile-button" onClick={handleCancelSubscription}>
          Cancel Subscription
        </button>
        <Link to="/payment" className="profile-button" onClick={handleUpgradeSubscription}>
          Upgrade Subscription
        </Link>
        <button className="profile-button" onClick={handleUpdatePassword}>
          Update Password
        </button>
      </div>
      {/* Add Dashboard Button */}
      <div className="profile-dashboard">
        <Link to="/dashboard" className="profile-button">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Profile;