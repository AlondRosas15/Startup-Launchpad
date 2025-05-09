import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Update the user state
      setLoading(false); // Stop loading once the user state is updated
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  return { user, loading };
};

export default useAuth; // Ensure this is a default export