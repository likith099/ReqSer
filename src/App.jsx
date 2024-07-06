import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home/Home';
import RequestForm from './pages/Request/Request';
import OfferService from './pages/OfferService/OfferService';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import UserProfile from './pages/UserProfile/UserProfile';
import UserDashboard from './pages/UserDashbord/UserDashboard';
import ReqSer from './pages/ReqSer/ReqSer';

import { useAuth } from './context/AuthContext'; // Import useAuth hook
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ProtectedSignIn from './components/ProtectedRoute/ProtectedSignIn';

const App = () => {
  const { currentUser, logout } = useAuth(); // Use currentUser and logout functions from AuthContext
  const [showRegister, setShowRegister] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem('isAuthenticated')) || false
  );

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  // If no user is logged in, redirect to home or login page
  if (!currentUser && isAuthenticated) {
    logout(); // Log out user if isAuthenticated is true but currentUser is null (for safety)
    setIsAuthenticated(false);
  }

  return (
    <>
      {showRegister ? (
        <Register
          setShowRegister={setShowRegister}
          setIsAuthenticated={setIsAuthenticated}
        />
      ) : (
        <></>
      )}
      
      <div className="app">
      <Navbar
        setShowRegister={setShowRegister}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
        <Routes>
          <Route path='/ReqSer' element={<ReqSer />} />
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<ProtectedSignIn setShowRegister={setShowRegister}/>} />
          <Route path="/request" element={<ProtectedRoute element={<RequestForm />} />} />
          <Route path="/offerservice" element={<ProtectedRoute element={<OfferService />} />} />

              <Route
                path="/my-profile"
                element={<UserProfile setIsAuthenticated={setIsAuthenticated}/>} 
              />
              <Route
                path="/my-dashboard"
                element={<UserDashboard user={currentUser} setIsAuthenticated={setIsAuthenticated} />}
              />


        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
