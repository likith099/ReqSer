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
        <div className="form-item-names">
          <input placeholder="First name" type="text" id="formBasicFirstN" className="form-input firstname" required />
          <input placeholder="Last name" type="text" id="formBasicLastN" className="form-input lastname"  required/>
        </div>
        <div className="form-item">
          <input placeholder="Email" type="email" id="formBasicEmail" className="form-input" />
        </div>
        <div className="form-item">
          <PhoneInput 
          placeholder="Mobile Number"
          type="text"
          id="formBasicNumber"
          country = {"us"}
          className="form-input-phonenumber" />
        </div>
        <div className="form-item">
          <input placeholder="mm/dd/yyyy" type="date" id="formBasicDOB" className="form-input" />
        </div>
        <div className="form-item">
          <input placeholder="Password" type="password" id="formBasicPassword" className="form-input" />
        </div>
        <div className="form-item">
          <input placeholder="Confirm Password" type="password" id="formBasicRePassword" className="form-input" />
        </div>
        <div className="form-item-checkbox">
          <label>
            <input className="checkbox-input" id="cbxRterms" name="cbxRterms" value="" type="checkbox" />I Agree to ReqSer <a title="Terms and Conditions" href="/" >Terms and Conditions</a> and <a title="Privacy Policy" href="/" target="_blank">Privacy Policy</a></label>
        </div>
        <button type="submit" className="signup-button">Sign Up</button>

      </form>
  )
}

export default SignUp