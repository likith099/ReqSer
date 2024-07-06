import React, { useContext } from 'react'
import { DashboardSavedContext } from '../../context/DashboardSavedContents'
import DashboardItem from '../DashboardItems/DashboardItems'
import '../DashboardRequestDisplay/DashboardRequestDisplay.css'
import { assets } from '../../assets/assets'


const DashboardSavedDisplay = () => {


    const { dashboard_saved } = useContext(DashboardSavedContext);

    return (
        <div className='dashboard-display'>
            <h2>Saved Services</h2>
            <div className="dashboard-display-list">
                {dashboard_saved.map((item, index) => {
                    return <DashboardItem
                        key={index}
                        id={item.id}
                        title={item.service_title}
                        description={item.service_description}
                        image={item.service_image}
                    />


                })}

                
            </div>

        </div>
    )
}

export default DashboardSavedDisplay