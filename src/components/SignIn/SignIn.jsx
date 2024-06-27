import React, { useState } from 'react';

import './SignIn.css'
import { user_list } from '../../assets/users';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

const SignIn = ({ setShowRegister, setIsAuthenticated, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();



  const handleSignIn = (e) => {
    e.preventDefault();

  //   signInWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   setIsAuthenticated(true);
  //   setIsAuthenticated(true);
  //   setShowRegister(false);  
  //   navigate(`/my-profile`);
  //   setUser(user);
  //   // console.log(user);
  // })
  // .catch((error) => {
  //   setError('Invalid email or password');
  // });

    const user = user_list.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setIsAuthenticated(true);
      setShowRegister(false);  
      navigate(`/my-profile/${user.id}`);
      setUser(user);
    } else {
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
          required />
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

export default SignIn