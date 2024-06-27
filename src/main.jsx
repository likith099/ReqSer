import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ServiceContextProvider from './context/ServiceContents.jsx'
import RequestContextProvider from './context/RequestContents.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ServiceContextProvider>
      <RequestContextProvider>
        <App />
      </RequestContextProvider>
    </ServiceContextProvider>
  </BrowserRouter>
)
