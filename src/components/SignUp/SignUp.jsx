import React from 'react'
import './SignUp.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const SignUp = () => {
  const initialValue = {
    country_code:  "",
  }


  return (
    <form>
        <h2>Sign Up</h2>
        <div className="mb-3-first-last-name">
          <input placeholder="First name" type="text" id="formBasicFirstN" className="custom-input-signup firstname" required />
          <input placeholder="Last name" type="text" id="formBasicLastN" className="custom-input-signup lastname" />
        </div>
        <div className="mb-3">
          <input placeholder="Email" type="email" id="formBasicEmail" className="custom-input-signup" />
        </div>
        <div className="mb-3">
          <PhoneInput 
          placeholder="Mobile Number"
          type="text"
          id="formBasicNumber"
          country = {"us"}
          className="custom-input-signup-phonenumber" />
        </div>
        <div className="mb-3">
          <input placeholder="mm/dd/yyyy" type="date" id="formBasicDOB" className="custom-input-signup" />
        </div>
        <div className="mb-3">
          <input placeholder="Password" type="password" id="formBasicPassword" className="custom-input-signup" />
        </div>
        <div className="mb-3">
          <input placeholder="Confirm Password" type="password" id="formBasicRePassword" className="custom-input-signup" />
        </div>
        <div className="mb-3">
          <label>
            <input className="checkbox-input" id="cbxRterms" name="cbxRterms" value="" type="checkbox" />I Agree to ReqSer <a title="Terms and Conditions" href="/" >Terms and Conditions</a> and <a title="Privacy Policy" href="/" target="_blank">Privacy Policy</a></label>
        </div>
        <button type="submit" className="signup-button">Sign Up</button>

      </form>
  )
}

export default SignUp