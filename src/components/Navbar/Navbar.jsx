import React, { useState } from 'react';
import './Navbar.css';
import Mylogo from '../../assets/requestLogo.svg';
import { assets } from '../../assets/assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LocationModal from '../LocationModel/LocationModel';
import { user_list } from '../../assets/users';

const Navbar = ({ setShowRegister, isAuthenticated, setIsAuthenticated, user }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [userLocation, setUserLocation] = useState({ country: '', state: '', city: '' });
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setDropdownOpen(false);
    navigate(`/`);
  };

  const toggleLocationModalOpen = () => {
    setLocationModalOpen(!locationModalOpen);
  }

  const handleLocationSave = (location) => {
    setUserLocation(location);
    setLocationModalOpen(false);
  };

  return (
    <nav className='navbar'>
      <div className='logo-section'>
        <img src={Mylogo} alt="logo" className='logo' />
      </div>
        <div className='navbar-search'>
          <input type='text' placeholder='Find your service here' className='search-bar' />
          <button className='search-button'><div className='search-text'>Search</div></button>
          <a href="#" className='location' onClick={toggleLocationModalOpen}>{userLocation.city && userLocation.state ? `${userLocation.city}, ${userLocation.state}` : 'Your Location'}</a>
        </div>
      
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="search" className='navbar-searchicon' />
        <ul className={`navbar-menu ${sidebarOpen ? 'open' : ''}`}>
          <Link to="/" className='menu-item'>Home</Link>
          <Link to="/request" className='menu-item'>Request</Link>
          <Link to="#offer-service-page" className='menu-item'>Offer Service</Link>
          {!isAuthenticated ? (
            <button onClick={() => setShowRegister(true)} className='signupin'>Sign Up/Sign In</button>
          ) : (
            <div className='profile-menu'>
              <img src={assets.profile_icon} alt="profile" className='profile-icon' onClick={toggleDropdown} />
              {dropdownOpen && (
                <div className='dropdown-menu'>
                  <Link to='/my-profile/1' className='dropdown-item'>My Profile</Link>
                  <Link to="/my-dashboard" className='dropdown-item'>My Dashboard</Link>
                  <button className='dropdown-item' onClick={handleSignOut}>Sign Out</button>
                </div>
              )}
            </div>
          )}      
        </ul>
      </div>
      <div className='hamburger-menu' onClick={toggleSidebar}>
        &#9776;
      </div>
      <LocationModal
        isOpen={locationModalOpen}
        onRequestClose={() => setLocationModalOpen(false)}
        onSave={handleLocationSave}
      />
    </nav>
  );
}

export default Navbar;
