import React, { createContext, useState, useContext } from "react";
import { dashboard_requests } from  '../assets/dashboardRequestsServices'
import { useAuth } from './AuthContext'


export const DashboardRequestContext = createContext(null)

const DashboardRequestContextProvider = (props) => {

    const { currentUser } = useAuth();
    const userRequests = dashboard_requests.filter( request => request.user_id === currentUser?.id);


    const contextValue ={
        dashboard_requests:userRequests
    }
    return (
        <DashboardRequestContext.Provider value={contextValue}>
            {props.children}
        </DashboardRequestContext.Provider>
    )
}

export default DashboardRequestContextProvider;