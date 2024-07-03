import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreServices from '../../components/ExploreServices/ExploreServices'
import ServiceDisplay from '../../components/ServiceDisplay/ServiceDisplay'
import RequestDisplay from '../../components/RequestDisplay/RequestDisplay'


const Home = () => {

  const [category, setCategory] = useState("All")
  const [view, setView] = useState('services')

  return (
    <div >
      
      <div className='view-toggle-buttons'>
        <button
        className={view === "services" ? "active" : ""}
        onClick={() => setView("services")}
        >
          Services
        </button>
        <button 
          className={view === "requests" ? "active" : ""}
          onClick={() => setView("requests")}
        >
          Requests
        </button>
      </div>




      <div className='explore-display-srvice-sections'>
        <div className='explore-services-section'><ExploreServices category={category} setCategory={setCategory} /></div>
        <div className='service-display-section'>
        {view === "services" ? (<ServiceDisplay category={category} />) : (<RequestDisplay category={category} /> // Render RequestDisplay component
          )}
        </div>
      </div>
    </div>
  )
}

export default Home