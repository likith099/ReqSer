import React from 'react'
import './ServiceItems.css'

const ServiceItems = ({ id, title, description, image }) => {


    return (
        <div className='service-item'>
            <div className='service-item-img-container'>
                <img className="service-item-image" src={image}/>
            </div>
            <p className='service-item-title'>{title}</p>
            <p className='service-item-desc'>{description}</p>
        </div>
    )
}

export default ServiceItems