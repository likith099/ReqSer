import { createContext } from "react";
import { dashboard_services } from  '../assets/dashboardRequestsServices'
import { useAuth } from '../context/AuthContext';


export const DashboardServicesContext = createContext(null)

const DashboardServicesContextProvider = (props) => {

    const { currentUser } = useAuth();
    const userRequests = dashboard_services.filter( service => service.user_id === currentUser?.id);

    const contextValue ={
        dashboard_services:userRequests
    }
    return (
        <DashboardServicesContext.Provider value={contextValue}>
            {props.children}
        </DashboardServicesContext.Provider>
    )
}

export default DashboardServicesContextProvider;