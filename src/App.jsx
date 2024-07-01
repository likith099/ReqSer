import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Request from './pages/Request/Request'
import OfferService from './pages/OfferService/OfferService'
import Footer from './components/Footer/Footer'
import Register from './components/Register/Register'
import UserProfile from './pages/UserProfile/UserProfile'
import { user_list } from './assets/users'
import UserDashboard from './pages/UserDashbord/UserDashboard'


const App = () => {

  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem('isAuthenticated')) || false
  );

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);
  

  return (

    <>
    {showRegister? <Register setShowRegister ={setShowRegister} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />:<></>}
    <Navbar setShowRegister ={setShowRegister} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
    <div className='app'>
      
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/request' element = {<Request />} />
        <Route path='/offerservice' element = {<OfferService />} />
        <Route path='/my-profile/:id' element = {<UserProfile setIsAuthenticated={setIsAuthenticated}/>}/>
        <Route path='/my-dashboard/:id' element = {<UserDashboard />}/>
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App