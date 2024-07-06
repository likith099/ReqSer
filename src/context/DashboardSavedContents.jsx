import React, { createContext, useState, useContext } from "react";
import { dashboard_saved } from  '../assets/dashboardRequestsServices'
import { useAuth } from './AuthContext'


export const DashboardSavedContext = createContext(null)

const DashboardSavedContextProvider = (props) => {

    const { currentUser } = useAuth();
    const userRequests = dashboard_saved.filter( saved => saved.user_id === currentUser?.id);


    const contextValue ={
        dashboard_saved:userRequests
    }
    return (
        <DashboardSavedContext.Provider value={contextValue}>
            {props.children}
        </DashboardSavedContext.Provider>
    )
}

export default DashboardSavedContextProvider;