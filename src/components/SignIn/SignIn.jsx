import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext'; // Import useAuth hook
import { useNavigate } from 'react-router-dom';

const SignIn = ({ setShowRegister, setIsAuthenticated, setUser }) => {
  const { login } = useAuth(); // Use the login function from AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await login(email, password); // Call login function from AuthContext
      setIsAuthenticated(true);
      setShowRegister(false);
      navigate(`/my-profile`); // Navigate to the user's profile or dashboard
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <h2>Sign In</h2>
        <div className="mb-3-first-last-name">
          <input
            placeholder="Email address"
            type="text"
            id="formBasicFirstN"
            className="custom-input-signup"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Password"
            type="password"
            id="formBasicPassword"
            className="custom-input-signup"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className='error-message'>{error}</p>}
        <a href='/' className='forgot-password'>Forgot Password?</a>
        <button type="submit" className="signup-button">Sign In</button>
      </form>
    </div>
  )
}

export default SignIn;
