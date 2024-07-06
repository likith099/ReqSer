import React, {useState} from 'react'
import '../ServiceItems/ServiceItems.css'
import DashboardExpandedItem from '../DashboardExpandItem/DashboardExpandedItem'
const DashboardItem = ({ id, title, description, image }) => {

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
        <img className="service-item-image" src={image}/>
    </div>
    <p className='service-item-title'>{title}</p>
    <p className='service-item-desc'>{description}</p>
</div>
{isExpanded && (
        <DashboardExpandedItem
          title={title}
          description={description}
          image={image}
          onClose={handleClose}
        />
      )}
</div>
  )
}

export default DashboardItem