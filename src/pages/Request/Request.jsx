import React, { useState } from 'react';
import './Request.css';
import { assets, service_list_cat } from '../../assets/assets';

const categories = service_list_cat.map(item => item.service_name);

const RequestForm = () => {
  const [formData, setFormData] = useState({
    heading: '',
    description: '',
    address: '',
    category: '',
    date: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.heading) newErrors.heading = 'Heading is required.';
    if (!formData.description) newErrors.description = 'Description is required.';
    if (!formData.address) newErrors.address = 'Address is required.';
    if (!formData.category) newErrors.category = 'Category is required.';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data submitted:', formData);
      // Handle form submission, e.g., send data to the server
      // Reset form after submission
      setFormData({
        heading: '',
        description: '',
        address: '',
        category: '',
        date: ''
      });
      setErrors({});
    }
  };

  return (
    <div className='request-form-container-background'>
      <div className="request-form-container">
        <h2>Post Your Request</h2>
        <form onSubmit={handleSubmit} className="request-form">
          <div className={`form-group ${errors.heading ? 'error' : ''}`}>
            <label htmlFor="heading">Title</label>
            <input
              type="text"
              id="heading"
              name="heading"
              value={formData.heading}
              onChange={handleChange}
            />
            {errors.heading && <span className="error-message">{errors.heading}</span>}
          </div>

          <div className={`form-group ${errors.description ? 'error' : ''}`}>
            <label htmlFor="description">Detailed Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
            {errors.description && <span className="error-message">{errors.description}</span>}
          </div>

          <div className={`form-group ${errors.address ? 'error' : ''}`}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <span className="error-message">{errors.address}</span>}
          </div>

          <div className={`form-group ${errors.category ? 'error' : ''}`}>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            {errors.category && <span className="error-message">{errors.category}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="submit-button">Submit Request</button>
          </div>
        </form>
      </div>
      <div className="content-section">
        <h2>Get the Services You Need on ReqSer</h2>
        <div className="content-item">
          <h3>Wide Range of Services</h3>
          <p>Choose from a variety of services offered by professionals in your area.</p>
        </div>
        <div className="content-item">
          <h3>Easy and Convenient</h3>
          <p>Post your service request and get responses from service providers quickly and efficiently.</p>
        </div>
        <div className="content-item">
          <h3>Competitive Pricing</h3>
          <p>Find the best value for your money with our transparent pricing and reliable service providers.</p>
        </div>
        <div className="content-item">
          <img src={assets.request_image} width="360px" />
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
