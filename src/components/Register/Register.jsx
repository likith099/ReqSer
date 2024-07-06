import React, { useState } from 'react'
import './Register.css'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import { assets } from '../../assets/assets'


const Register = ({ setShowRegister, setIsAuthenticated }) => {

  const [view, setView] = useState('signin')
  return (
    <div className='form-section'>
      <div className="form-container">
        <div className='corss-button' onClick={() => setShowRegister(false)}>
          <img  src={assets.cross} width="20px" height="20px" />
        </div>
        <div className='form-body'>
          <div className='signup-signin-view-toggle-buttons'>
            <button
              className={view === "signin" ? "active" : ""}
              onClick={() => setView("signin")}
            >
              Sign In
            </button>
            <button
              className={view === "signup" ? "active" : ""}
              onClick={() => setView("signup")}
            >
              Sign Up
            </button>
          </div>

          <div className='signup-signin-form-container'>
            {view === "signin" ? (<SignIn setShowRegister={setShowRegister} setIsAuthenticated={setIsAuthenticated} />) : (<SignUp />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register