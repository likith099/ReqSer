import React from 'react';
import './ExploreServices.css';
import { service_list_cat } from '../../assets/assets';

const ExploreServices = ({category,setCategory}) => {
  return (
    <div className='explore-services' id='explore-services'>
      <h2>Explore Services</h2>
      <div className='explore-services-list'>
        {service_list_cat.map((item, index) => (
          <div onClick={() => setCategory(prev=>prev === item.service_name?"All":item.service_name)} key={index} className='explore-services-list-items'>
            <p className = {category === item.service_name?"active":" "}>{item.service_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreServices;
