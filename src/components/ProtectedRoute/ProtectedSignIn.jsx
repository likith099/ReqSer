import React from 'react'
import './ProtectedSignIn.css'
import { assets } from '../../assets/assets'

function ProtectedSignIn( {setShowRegister} ) {
  return (
    <div className='protected-signin-body'>
        <div className="protected-signin-container">
            <h1>Sign In to your Acccount</h1>
            <img src={assets.waiting} alt="" width={"260px"} />

        <button onClick={() => setShowRegister(true)} className='signupin'>Sign In</button>

        </div>
    </div>
  )
}

export default ProtectedSignIn