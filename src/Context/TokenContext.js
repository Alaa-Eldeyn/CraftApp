import { createContext, useState } from "react";

export let userToken = createContext();

export default function UserTokenProvider(props){

    
    const [token , setToken] = useState(null)
    
    return <userToken.Provider value={{token , setToken}}>
        {props.children}
    </userToken.Provider>
}