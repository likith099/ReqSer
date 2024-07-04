import React, { useState } from 'react';
import './UserProfile.css';
import { useAuth } from '../../context/AuthContext'; // Import useAuth hook
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import AccountDetails from '../../components/AcountDetails/AccountDetails';
import AccountSettings from '../../components/AccountSettings/AccountSettings';


const UserProfile = () => {
    const { currentUser, logout } = useAuth(); // Access currentUser and logout from AuthContex


    const [profileView, setProfileView] = useState('profile-details')

    return (
        <div className="profile_main">
            <ProfileHeader heading={"MY ACOUNT"} />
            <div className="profile_body">
                        <div className="profile-sidebar">
                            <div className="profile-view-toggle-buttons">
                                    <button
                                        className={profileView === "profile-details" ? "active" : ""}
                                        onClick={() => setProfileView("profile-details")}
                                    >
                                        Acount Details
                                    </button>
                                    <button
                                        className={profileView === "profile-settings" ? "active" : ""}
                                        onClick={() => setProfileView("profile-settings")}
                                    >
                                        Acount Settings
                                    </button>
                            </div>
                        </div>
                        <div>
                            {profileView === "profile-details" ? (<AccountDetails />) : (<AccountSettings /> // Render RequestDisplay component
                            )}
                        </div>
                    </div>
                </div>
           
        
    );
};


export default UserProfile;
