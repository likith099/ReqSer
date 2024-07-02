import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = ({ user, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    setIsAuthenticated(false);
    navigate(`/`);
  };

  if (!user) {
    return <div>Please log in to view your dashboard.</div>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {user.first_name} {user.last_name}</h1>
        <button className="logout_btn" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-section">
          <h2>Your Details</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone Number:</strong> {user.mobile_number}</p>
          <p><strong>Country:</strong> {user.country}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Description:</strong> {user.description}</p>
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
