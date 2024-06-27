import { createContext } from "react";
import { request_list } from "../assets/assets";

export const RequestContext = createContext(null)

const RequestContextProvider = (props) => {

    const contextValue ={
        request_list
    }
    return (
        <RequestContext.Provider value={contextValue}>
            {props.children}
        </RequestContext.Provider>
    )
}

export default RequestContextProvider;