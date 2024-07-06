import React, { useState } from 'react'
import '../ServiceItems/ServiceItems.css'
import ExpandedServiceItem from '../ExpandedServiceItem/ExpandedServiceItem';


const RequestItem = ({ id, title, description, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <div>
      <div className='service-item' onClick={handleExpand}>
        <div className='service-item-img-container'>
          <img className="service-item-image" src={image} alt={title} />
        </div>
        <p className='service-item-title'>{title}</p>
        <p className='service-item-desc'>{description}</p>
      </div>
      {isExpanded && (
        <ExpandedServiceItem
          title={title}
          description={description}
          image={image}
          onClose={handleClose}
        />
      )}
    </div>
  );
};


export default RequestItem