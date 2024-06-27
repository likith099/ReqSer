import { createContext } from "react";
import { service_list } from "../assets/assets";

export const ServiceContext = createContext(null)

const ServiceContextProvider = (props) => {

    const contextValue ={
        service_list
    }
    return (
        <ServiceContext.Provider value={contextValue}>
            {props.children}
        </ServiceContext.Provider>
    )
}

export default ServiceContextProvider;