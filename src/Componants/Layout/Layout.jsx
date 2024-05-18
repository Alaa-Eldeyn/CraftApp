import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { useContext, useEffect } from "react";
import { userToken } from "../../Context/TokenContext";

export default function Layout() {
  
  let {setToken}= useContext(userToken) 
  useEffect(()=>{
    if(localStorage.getItem('UserToken') !== null){
      setToken(localStorage.getItem('UserToken'))
    }
  },[])

  return (
    <>
        <NavBar />
      <Outlet></Outlet>
    </>
  );
}
