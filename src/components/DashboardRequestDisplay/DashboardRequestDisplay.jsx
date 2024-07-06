import React, { useContext } from 'react'
import { DashboardRequestContext } from '../../context/DashboardRequestContents'
import DashboardItem from '../DashboardItems/DashboardItems'
import './DashboardRequestDisplay.css'
import { assets } from '../../assets/assets'    
import { useNavigate } from 'react-router-dom';

const DashboardRequestDisplay = () => {

    const navigate = useNavigate();
    const navigateToRequest = () => {
        navigate(`/request`);
      };

    const { dashboard_requests } = useContext(DashboardRequestContext);

    return (
        <div className='dashboard-display'>
            <h2>Requested Services</h2>
            <div className="dashboard-display-list">
                {dashboard_requests.map((request, index) => {
                    return <DashboardItem
                        key={index}
                        id={request.id}
                        title={request.request_title}
                        description={request.request_description}
                        image={request.request_image}
                    />


                })}

                <div className='add-item' onClick={navigateToRequest}>
                    <div className='new-item-img-container'>
                        <img className="add-item-image" src={assets.add_icon} />
                        <p className='new-item-title'>Add Requst</p>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default DashboardRequestDisplay