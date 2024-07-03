import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import Mylogo from '../../assets/requestLogo.svg';
import { assets } from '../../assets/assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LocationModal from '../LocationModel/LocationModel';
import { useAuth } from '../../context/AuthContext'; // Update with your actual path

const Navbar = ({ setShowRegister }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [userLocation, setUserLocation] = useState({ country: '', state: '', city: '' });
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const menuRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSignOut = () => {
    setDropdownOpen(false);
    logout();
    navigate(`/`);
  };

  const toggleLocationModalOpen = () => {
    setLocationModalOpen(!locationModalOpen);
  }

  const handleLocationSave = (location) => {
    setUserLocation(location);
    setLocationModalOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setSidebarOpen(false);
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className='navbar'>
      <div className='hamburger-menu' onClick={toggleSidebar}>
        &#9776;
      </div>
      <div className='logo-section'>
        <img src={Mylogo} alt="logo" className='logo' />
      </div>
        <div className='navbar-search'>
          <input type='text' placeholder='Find your service here' className='search-bar' />
          <button className='search-button'><div className='search-text'>Search</div></button>
          <a href="#" className='location' onClick={toggleLocationModalOpen}>{userLocation.city && userLocation.state ? `${userLocation.city}, ${userLocation.state}` : 'Your Location'}</a>
        </div>
      
      <div className='navbar-right' ref={menuRef}>
        <img src={assets.search_icon} alt="search" className='navbar-searchicon' />
        <ul className={`navbar-menu ${sidebarOpen ? 'open' : ''}`}>
          <Link to="/" className='menu-item' onClick={() => setSidebarOpen(false)}>Home</Link>
          <Link to="/request" className='menu-item' onClick={() => setSidebarOpen(false)}>Request</Link>
          <Link to="#offer-service-page" className='menu-item' onClick={() => setSidebarOpen(false)}>Offer Service</Link>
          </ul>
          {!currentUser ? (
            <button onClick={() => setShowRegister(true)} className='signupin'>Sign In</button>
          ) : (
            <div className='profile-menu'>
              <img src={assets.profile_icon} alt="profile" className='profile-icon' onClick={toggleDropdown} />
              {dropdownOpen && (
                <div className='dropdown-menu'>
                  <Link to={`/my-profile`} className='dropdown-item' onClick={() => setDropdownOpen(false)}>My Profile</Link>
                  <Link to="/my-dashboard" className='dropdown-item' onClick={() => setDropdownOpen(false)}>My Dashboard</Link>
                  <button className='dropdown-item' onClick={handleSignOut}>Sign Out</button>
                </div>
              )}
            </div>
          )}      
        
      </div>
      {/* <div className='hamburger-menu' onClick={toggleSidebar}>
        &#9776;
      </div> */}
      <LocationModal
        isOpen={locationModalOpen}
        onRequestClose={() => setLocationModalOpen(false)}
        onSave={handleLocationSave}
      />
    </nav>
  );
}

export default Navbar;
