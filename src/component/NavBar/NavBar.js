import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import useAuth from '../../hook/useAuth'; // Import the useAuth hook
import './Nav.css'; // Import your CSS file for styling

const NavBar = () => {
  const { user } = useAuth(); // Get the user from the useAuth hook
  const navigate = useNavigate();
  const auth = getAuth();

  const handleAuthAction = async () => {
    if (user) {
      // If the user is signed in, sign them out
      try {
        await signOut(auth);
        navigate('/signin'); // Redirect to the sign-in page
      } catch (error) {
        console.error('Sign-out error:', error);
      }
    } else {
      // If the user is not signed in, navigate to the sign-in page
      navigate('/signin');
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">Startup Launchpad</div>
      <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <button className="auth-btn nav-btn" onClick={handleAuthAction}>
            {user ? 'Sign Out' : 'Sign In'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;