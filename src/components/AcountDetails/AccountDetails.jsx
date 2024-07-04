import React, { useState } from 'react';
import './AccountDetails.css'
import { useAuth } from '../../context/AuthContext'; // Import useAuth hook

function AccountDetails() {
    const { currentUser, logout } = useAuth(); // Access currentUser and logout from AuthContex

    const [editable, setEditable] = useState({
        firstName: false,
        lastName: false,
        email: false,
        mobileNumber: false,
        country: false,
        address: false,
        description: false,
    });

    if (!currentUser) {
        return <div>User not found</div>;
    }

    const handleEditClick = (field) => {
        setEditable(prev => ({ ...prev, [field]: !prev[field] }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prev => ({ ...prev, [name]: value }));
    };


    return (
        <div className="profile_body_right">
            <div className="profile_tab_content">
                <div className="tab_widget _3hmsj">
                    <h3 className="tab_widget_title">Acount Details</h3>
                    <div className="card_list">
                        <ProfileDataCard
                            title="EMAIL ADDRESS"
                            value={currentUser.email}
                            editable={editable.email}
                            onEdit={() => handleEditClick('email')}
                            onChange={handleChange}
                            name="email"
                        />
                        <ProfileDataCard
                            title="Phone Number"
                            value={currentUser.mobile_number}
                            editable={editable.mobileNumber}
                            onEdit={() => handleEditClick('mobileNumber')}
                            onChange={handleChange}
                            name="mobile_number"
                        />
                        <ProfileDataCard
                            title="RESIDENTIAL ADDRESS"
                            value={currentUser.address}
                            editable={editable.address}
                            onEdit={() => handleEditClick('address')}
                            onChange={handleChange}
                            name="address"
                        />
                        <ProfileDataCard
                            title="Country"
                            value={currentUser.country}
                            editable={editable.country}
                            onEdit={() => handleEditClick('country')}
                            onChange={handleChange}
                            name="country"
                        />
                        <ProfileDataCard
                            title="Description"
                            value={currentUser.description}
                            editable={editable.description}
                            onEdit={() => handleEditClick('description')}
                            onChange={handleChange}
                            name="description"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

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

export default AccountDetails