import React, { useContext } from 'react'
import { DashboardServicesContext } from '../../context/DashboardServiceContents'
import DashboardItem from '../DashboardItems/DashboardItems'
import '../DashboardRequestDisplay/DashboardRequestDisplay.css'
import { assets } from '../../assets/assets'


const DashboardServiceDisplay = () => {


    const { dashboard_services } = useContext(DashboardServicesContext);

    return (
        <div className='dashboard-display'>
            <h2>Your Services</h2>
            <div className="dashboard-display-list">
                {dashboard_services.map((item, index) => {
                    return <DashboardItem
                        key={index}
                        id={item.id}
                        title={item.service_title}
                        description={item.service_description}
                        image={item.service_image}
                    />


                })}

                <div className='add-item'>
                    <div className='new-item-img-container'>
                        <img className="add-item-image" src={assets.add_icon} />
                        <p className='new-item-title'>Add Service</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default DashboardServiceDisplay