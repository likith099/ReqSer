import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import useAuth hook
import './UserDashboard.css';
import DashboardRequestDisplay from '../../components/DashboardRequestDisplay/DashboardRequestDisplay'
import DashboardServiceDisplay from '../../components/DashboardServiceDisplay/DashboardServiceDisplay'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';

const UserDashboard = () => {
  const { currentUser, logout } = useAuth(); // Access currentUser and logout from AuthContext
  const navigate = useNavigate();


  if (!currentUser) {
    return <div>Please log in to view your dashboard.</div>;
  }

  const [dashboardView, setDashboardView] = useState('dashboard-requests')



  return (
    <div className='dashboard-page'>
      <ProfileHeader heading={"MY DASHBOARD"} />
      <div className='dashboard-body'>
        <div className="dashboard-sidebar">
          <div className='dashboard-view-toggle-buttons'>
            <button
              className={dashboardView === "dashboard-requests" ? "active" : ""}
              onClick={() => setDashboardView("dashboard-requests")}
            >
              Requests
            </button>
            <button
              className={dashboardView === "dashboard-services" ? "active" : ""}
              onClick={() => setDashboardView("dashboard-services")}
            >
              Services
            </button>
          </div>
        </div>

        <div className='service-display-section'>
          {dashboardView === "dashboard-requests" ? (<DashboardRequestDisplay />) : (<DashboardServiceDisplay /> // Render RequestDisplay component
          )}
        </div>
      </div>


    </div>
  );
};

export default UserDashboard;
