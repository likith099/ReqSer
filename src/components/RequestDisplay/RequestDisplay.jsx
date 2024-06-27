import React, { useContext } from 'react'
import './RequestDisplay.css'
import { RequestContext } from '../../context/RequestContents'
import RequestItem from '../RequestItems/RequestItem'

const RequestDisplay = ({category}) => {

    const { request_list } = useContext(RequestContext);

    return (
        <div className='service-display' id='service-display'>
            <h2>Requested Services</h2>
            <div className="service-display-list">
                {request_list.map((item, index) => {
                    if(category==="All" || category===item.category){
                        return <RequestItem
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

export default RequestDisplay