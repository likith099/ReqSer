import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import useAuth hook
import './UserDashboard.css';

const UserDashboard = () => {
  const { currentUser, logout } = useAuth(); // Access currentUser and logout from AuthContext
  const navigate = useNavigate();

  const handleSignOut = () => {
    logout(); // Call logout function from AuthContext
    navigate('/');
  };

  if (!currentUser) {
    return <div>Please log in to view your dashboard.</div>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {currentUser.first_name} {currentUser.last_name}</h1>
        <button className="logout_btn" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-section">
          <h2>Your Details</h2>
          <p><strong>Email:</strong> {currentUser.email}</p>
          <p><strong>Phone Number:</strong> {currentUser.mobile_number}</p>
          <p><strong>Country:</strong> {currentUser.country}</p>
          <p><strong>Address:</strong> {currentUser.address}</p>
          <p><strong>Description:</strong> {currentUser.description}</p>
        </div>
        <div className="dashboard-section">
          <h2>Account Settings</h2>
          {/* Add account settings components or links here */}
        </div>
        <div className="dashboard-section">
          <h2>Recent Activity</h2>
          {/* Add recent activity components or links here */}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
