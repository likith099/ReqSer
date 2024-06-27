import React, { useContext } from 'react'
import './ServiceDisplay.css'
import { ServiceContext } from '../../context/ServiceContents'
import ServiceItems from '../ServiceItems/ServiceItems'

const ServiceDisplay = ({category}) => {

    const { service_list } = useContext(ServiceContext);

      // Filter services based on the selected category
  const filteredServices = category === "All" ? service_list : service_list.filter(service => service.category === category);

    return (
        <div className='service-display' id='service-display'>
            <h2>Top Services Near You</h2>
            <div className="service-display-list">
                {service_list.map((item, index) => {
                    if(category==="All" || category===item.category){
                        return <ServiceItems
                    key={index}
                    id={item._id}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    />
                    }
                    
                })}
            </div>

        </div>
    )
}

export default ServiceDisplay