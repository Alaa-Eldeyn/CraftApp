import { Navigate } from "react-router-dom"

export default function ProtectRouting(props){

    if (localStorage.getItem('UserToken')!== null) {
        return props.children
    }
    else{
        return <Navigate to={'/login'}/>
    }
}
