import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ServiceContextProvider from './context/ServiceContents.jsx'
import RequestContextProvider from './context/RequestContents.jsx'
import AuthProvider from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
    <ServiceContextProvider>
      <RequestContextProvider>
        <App />
      </RequestContextProvider>
    </ServiceContextProvider>
    </AuthProvider>
  </BrowserRouter>
)
