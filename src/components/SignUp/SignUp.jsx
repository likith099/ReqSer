import React, { useState } from 'react';
import './SignUp.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dob: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phoneNumber: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First name is required.';
    if (!formData.lastName) newErrors.lastName = 'Last name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required.';
    if (!formData.dob) newErrors.dob = 'Date of birth is required.';
    if (!formData.password) newErrors.password = 'Password is required.';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions.';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form data submitted:', formData);
      // Handle form submission, e.g., send data to the server
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div className="form-item-names">
        <input
          placeholder="First name"
          type="text"
          id="formBasicFirstN"
          name="firstName"
          className={`form-input firstname ${errors.firstName ? 'error' : ''}`}
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        <input
          placeholder="Last name"
          type="text"
          id="formBasicLastN"
          name="lastName"
          className={`form-input lastname ${errors.lastName ? 'error' : ''}`}
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        {errors.lastName && <span className="error-message">{errors.lastName}</span>}
      </div>
      <div className="form-item">
        <input
          placeholder="Email"
          type="email"
          id="formBasicEmail"
          name="email"
          className={`form-input ${errors.email ? 'error' : ''}`}
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="form-item">
        <PhoneInput
          placeholder="Mobile Number"
          type="text"
          id="formBasicNumber"
          country="us"
          className={`form-input-phonenumber ${errors.phoneNumber ? 'error' : ''}`}
          value={formData.phoneNumber}
          onChange={handlePhoneChange}
          required
        />
        {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
      </div>
      <div className="form-item">
        <input
          placeholder="mm/dd/yyyy"
          type="date"
          id="formBasicDOB"
          name="dob"
          className={`form-input ${errors.dob ? 'error' : ''}`}
          value={formData.dob}
          onChange={handleChange}
          required
        />
        {errors.dob && <span className="error-message">{errors.dob}</span>}
      </div>
      <div className="form-item">
        <input
          placeholder="Password"
          type="password"
          id="formBasicPassword"
          name="password"
          className={`form-input ${errors.password ? 'error' : ''}`}
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <span className="error-message">{errors.password}</span>}
      </div>
      <div className="form-item">
        <input
          placeholder="Confirm Password"
          type="password"
          id="formBasicRePassword"
          name="confirmPassword"
          className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
      </div>
      <div className="form-item-checkbox">
        <label>
          <input
            className="checkbox-input"
            id="cbxRterms"
            name="termsAccepted"
            type="checkbox"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
          />
          I Agree to ReqSer <a title="Terms and Conditions" href="/">Terms and Conditions</a> and <a title="Privacy Policy" href="/" target="_blank">Privacy Policy</a>
        </label>
        {errors.termsAccepted && <span className="error-message">{errors.termsAccepted}</span>}
      </div>
      <button type="submit" className="signup-button">Sign Up</button>
    </form>
  );
};

export default SignUp;
