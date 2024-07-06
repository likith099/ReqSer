import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import useAuth hook
import './UserDashboard.css';
import DashboardRequestDisplay from '../../components/DashboardRequestDisplay/DashboardRequestDisplay'
import DashboardServiceDisplay from '../../components/DashboardServiceDisplay/DashboardServiceDisplay'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import DashboardSavedDisplay from '../../components/DashboardSavedDisplay/DashboardSavedDisplay';

const UserDashboard = () => {
  const { currentUser, logout } = useAuth(); // Access currentUser and logout from AuthContext
  const navigate = useNavigate();


  if (!currentUser) {
    return <div>Please log in to view your dashboard.</div>;
  }

  const [dashboardView, setDashboardView] = useState('dashboard-requests')



  return (
    <div className='dashboard-page'>
      <ProfileHeader heading={"MY DASHBOARD"} header_link={"/my-profile"} header_link_name={"My Profile"}/>
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
            <button
              className={dashboardView === "dashboard-saved" ? "active" : ""}
              onClick={() => setDashboardView("dashboard-saved")}
            >
              Saved
            </button>
          </div>
        </div>

        <div className='service-display-section'>
          {dashboardView === "dashboard-requests" ? (<DashboardRequestDisplay />) : (dashboardView === "dashboard-services" ? (<DashboardServiceDisplay /> ) : (<DashboardSavedDisplay />  )// Render RequestDisplay component
          )}
        </div>
        
      </div>


    </div>
  );
};

export default UserDashboard;
