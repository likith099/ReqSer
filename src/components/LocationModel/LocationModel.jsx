import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './LocationModel.css';
import { countries, stateData, cityData } from '../../assets/yourLocation';

Modal.setAppElement('#root');

const LocationModal = ({ isOpen, onRequestClose, onSave }) => {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

//   const countries = ['USA', 'Canada']; // Example country data
//   const stateData = {
//     USA: ['California', 'Texas', 'New York'],
//     Canada: ['Ontario', 'Quebec', 'British Columbia'],
//   };
//   const cityData = cityData
//   {
//     'California': ['Los Angeles', 'San Francisco', 'San Diego'],
//     'Texas': ['Houston', 'Dallas', 'Austin'],
//     'New York': ['New York City', 'Buffalo', 'Rochester'],
//     'Ontario': ['Toronto', 'Ottawa', 'Hamilton'],
//     'Quebec': ['Montreal', 'Quebec City', 'Laval'],
//     'British Columbia': ['Vancouver', 'Victoria', 'Richmond'],
//   };

  useEffect(() => {
    if (country) {
      setStates(stateData[country]);
      setState('');
      setCity('');
    }
  }, [country]);

  useEffect(() => {
    if (state) {
      setCities(cityData[state]);
      setCity('');
    }
  }, [state]);

  const handleSave = () => {
    onSave({ country, state, city });
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Select Location"
      className="location-modal"
      overlayClassName="location-modal-overlay"
    >
      <h2>Select Your Location</h2>
      <div className="modal-content">
        <div className="modal-field">
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
        <div className="modal-field">
          <select value={state} onChange={(e) => setState(e.target.value)} disabled={!country}>
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
        <div className="modal-field">
          <select value={city} onChange={(e) => setCity(e.target.value)} disabled={!state}>
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <div className='location-buttons'>
        <button className = "save-button" onClick={handleSave}>Save</button>
        <button className = "cancel-button" onClick={onRequestClose}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default LocationModal;
