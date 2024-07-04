import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ServiceContextProvider from './context/ServiceContents.jsx'
import RequestContextProvider from './context/RequestContents.jsx'
import AuthProvider from './context/AuthContext.jsx'
import DashboardRequestContextProvider from './context/DashboardRequestContents.jsx'
import DashboardServicesContextProvider from './context/DashboardServiceContents.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <DashboardRequestContextProvider>
        <DashboardServicesContextProvider>
          <ServiceContextProvider>
            <RequestContextProvider>
              <App />
            </RequestContextProvider>
          </ServiceContextProvider>
        </DashboardServicesContextProvider>
      </DashboardRequestContextProvider>
    </AuthProvider>
  </BrowserRouter>
)
