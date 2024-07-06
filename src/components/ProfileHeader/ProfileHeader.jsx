import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './ProfileHeader.css'

function ProfileHeader({heading, header_link, header_link_name}) {

    const { currentUser, logout } = useAuth(); // Access currentUser and logout from AuthContext
    const navigate = useNavigate();


    const handleSignOut = () => {
        logout(); // Call logout function from AuthContext
        navigate('/');
    };

  return (
    <div className="profile_main">
            <div className="profile_header">
                <div className="profile_container">
                    <div className="profile_header_top">
                        <h2>{heading}</h2>
                    </div>
                    <div className="profile_header_bottom">
                        <div className="header_left">
                            <span className="user_badge">{currentUser.first_name[0]}{currentUser.last_name[0]}</span>
                            <span className="user_name">{currentUser.first_name} {currentUser.last_name}</span>
                        </div>
                        <div className="header_right">
                        <Link to={header_link} className='dropdown-item'>{header_link_name}</Link>
                            <button className="logout_btn" onClick={handleSignOut}>
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
  )
}

export default ProfileHeader