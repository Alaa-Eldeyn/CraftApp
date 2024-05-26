import { createContext, useState } from "react";

export let userToken = createContext();

export default function UserTokenProvider(props){

    
    const [token , setToken] = useState(null)
    const [token2 , setToken2] = useState(null)
    const [email , setEmail] = useState(null)

    let [pic , setPic] = useState('')

    
    return <userToken.Provider value={{token , setToken ,token2 , setToken2 , email , setEmail ,pic, setPic}}>
        {props.children}
    </userToken.Provider>
}