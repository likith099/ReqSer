import React from 'react'
import './ResetPassword.css'
import { assets } from '../../assets/assets'

function ResetPassword() {
    return (
        <div className='reset-form-body'>
            <div className='reset-password-inner'>
            <div className='reset-form-image'>
                    <img src={assets.reset_password_image} alt="" width="360px"/>
                </div>
            <div className='reset-form-container'>
                <div className='reset-form'>
                    <h2>Reset Password</h2>
                    <p>Please enter your email address and we’ll send you a link to reset your password.</p>
                    <label className='email-section'>Email address
                    <input type='email' placeholder='Email' required/>
                    </label>
                    <button>Submit</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword