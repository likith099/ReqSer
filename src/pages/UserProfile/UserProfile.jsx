import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { user_list } from '../../assets/users';
import './UserProfile.css';
import { assets } from '../../assets/assets';

const UserProfile = ({setIsAuthenticated}) => {
    const { id } = useParams();
    const user = user_list.find(user => user.id === parseInt(id));
    const navigate = useNavigate();

    const [editable, setEditable] = useState({
        firstName: false,
        lastName: false,
        email: false,
        mobileNumber: false,
        country: false,
        address: false,
        description: false,
    });

    const [userInfo, setUserInfo] = useState(user);

    if (!user) {
        return <div>User not found</div>;
    }

    const handleEditClick = (field) => {
        setEditable(prev => ({ ...prev, [field]: !prev[field] }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleSignOut = () => {
        setIsAuthenticated(false);
        navigate(`/`);
      };



    return (
        <div className="profile_main">
            <div className="profile_header">
                <div className="profile_container">
                    <div className="profile_header_top">
                        <div className="header_back">
                            <a className="profileBackBtn">
                                <h1>My Account</h1>
                            </a>
                        </div>
                    </div>
                    <div className="profile_header_bottom">
                        <div className="header_left">
                            <span className="user_badge">{userInfo.first_name[0]}{userInfo.last_name[0]}</span>
                            <span className="user_name">{userInfo.first_name} {userInfo.last_name}</span>
                        </div>
                        <div className="header_right">
                        <Link to="/my-dashboard" className='dropdown-item'>My Dashboard</Link>
                            <button className="logout_btn" onClick={handleSignOut}>
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile_body">
                <div className="profile_container">
                    <div className="profile_body_inner">
                        <div className="profile_body_left">
                            <div className="left_navigation _3hmsj">
                                <ul>
                                    <li className="nav-item">
                                        <a className="nav-link active" id="personal_details" href="/./account/profile">Acount Details</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="profile_body_right">
                            <div className="profile_tab_content">
                                <div className="tab_widget _3hmsj" id="personal_details_tab">
                                    <h3 className="tab_widget_title">Acount Details</h3>
                                    <div className="card_list">
                                        <ProfileDataCard
                                            title="EMAIL ADDRESS"
                                            value={userInfo.email}
                                            editable={editable.email}
                                            onEdit={() => handleEditClick('email')}
                                            onChange={handleChange}
                                            name="email"
                                        />
                                        <ProfileDataCard
                                            title="Phone Number"
                                            value={userInfo.mobile_number}
                                            editable={editable.mobileNumber}
                                            onEdit={() => handleEditClick('mobileNumber')}
                                            onChange={handleChange}
                                            name="mobile_number"
                                        />
                                        <ProfileDataCard
                                            title="RESIDENTIAL ADDRESS"
                                            value={userInfo.address}
                                            editable={editable.address}
                                            onEdit={() => handleEditClick('address')}
                                            onChange={handleChange}
                                            name="address"
                                        />
                                        <ProfileDataCard
                                            title="Country"
                                            value={userInfo.country}
                                            editable={editable.country}
                                            onEdit={() => handleEditClick('country')}
                                            onChange={handleChange}
                                            name="country"
                                        />
                                        <ProfileDataCard
                                            title="Description"
                                            value={userInfo.description}
                                            editable={editable.description}
                                            onEdit={() => handleEditClick('description')}
                                            onChange={handleChange}
                                            name="description"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProfileDataCard = ({ title, value, editable, onEdit, onChange, name }) => (
    <div className="profileDataCard">
        <div className="profileDataCard__header">
            <label className="profileDataCard__header-title">{title}</label>
            <button className="profileDataCard__header-actionBtn" onClick={onEdit}>{editable ? 'Save' : 'Edit'}</button>
        </div>
        <div className="profileDataCard__body">
            {editable ? (
                <input type="text" name={name} value={value} onChange={onChange} />
            ) : (
                <span className="profileDataCard__body-content">{value}</span>
            )}
        </div>
    </div>
);

export default UserProfile;
