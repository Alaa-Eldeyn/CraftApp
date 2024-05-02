import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import "./App.css";

import Login from "./Componants/Login/Login";
import Register from "./Componants/Register/Register";
import NotFound from "./Componants/NotFound/NotFound";
import Home from "./Componants/Home/Home";
import Cutomize from "./Componants/Cutomize/Cutomize";
import MyDesign from "./Componants/Editor/MyDesign/MyDesign";
import Layout from "./Componants/Layout/Layout";
import Forget from "./Componants/Forget/Forget";
import Verify from "./Componants/Verify/Verify";
import Editor from "./Componants/Editor/Editor";
import UserTokenProvider from "./Context/TokenContext";
import ProtectRouting from "./Componants/ProtectRouting/ProtectRouting";
// ---------------

import longSleeveFront from "./Assets/images/long sleeve front 1.png";
import longSleeveBack from "./Assets/images/long sleeve back 1.png";

import hoodiback from "./Assets/images/hoodi.svg";
import hoodi from "./Assets/images/hoodiback.svg";

import shortFront from "./Assets/images/AdobeStock_494861273_Preview_result 1.png";
import shortBack from "./Assets/images/shortBack.png";

import pantsFront from "./Assets/images/sports_pants_men_01v_bright_color_0003 1.png";
import pantsBack from "./Assets/images/sweatpantsBack.png";

import poloFront from "./Assets/images/polo front 1.png";
import poloBack from "./Assets/images/polo back 1.png";

import teshertFront from "./Assets/images/z01-1 2.png";
import teshertBack from "./Assets/images/tesheartBack.png";

import tankFront from "./Assets/images/sleeves front 1.png";
import tankBack from "./Assets/images/tank top back 1.png";

import sweaterFront from "./Assets/images/photo2.png";
import sweaterBack from "./Assets/images/sweaterBack.png";
import ViewContextProvider from "./Context/ViewContext";
import Account from "./Componants/Account/Account";
// ---------------


function App() {

  const routers = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <ProtectRouting> <Home /></ProtectRouting>  },
        {
          path: "customize",
          element:<ProtectRouting> <Cutomize /></ProtectRouting> ,
        },
        {
          path: "myDesign",
          element:<ProtectRouting> <MyDesign /></ProtectRouting> ,
        },
        {
          path: "account",
          element:<ProtectRouting> <Account /></ProtectRouting> ,
        },
        { path: "editor/Hoodie", element:<ProtectRouting><Editor hoodibg={hoodi} hoodiback={hoodiback}/></ProtectRouting>  },
        { path: "editor/Sweater", element: <ProtectRouting><Editor hoodibg={sweaterFront} hoodiback={sweaterBack}/></ProtectRouting> },
        { path: "editor/Long_Sleeve_T-shirt", element: <ProtectRouting><Editor hoodibg={longSleeveFront} hoodiback={longSleeveBack}/></ProtectRouting> },
        { path: "editor/Sweatpants", element: <ProtectRouting><Editor hoodibg={pantsFront} hoodiback={pantsBack}/></ProtectRouting> },
        { path: "editor/Half_Sleeve_T-shirt", element: <ProtectRouting><Editor hoodibg={teshertFront} hoodiback={teshertBack}/></ProtectRouting> },
        { path: "editor/Polo_T-shirt", element: <ProtectRouting><Editor hoodibg={poloFront} hoodiback={poloBack}/></ProtectRouting> },
        { path: "editor/Tank_Top", element: <ProtectRouting><Editor hoodibg={tankFront} hoodiback={tankBack}/></ProtectRouting> },
        { path: "editor/Sports_shorts", element: <ProtectRouting><Editor hoodibg={shortFront} hoodiback={shortBack}/></ProtectRouting> },
      ],
    },
    { path: "login", element:<Login /> },
    { path: "register", element: <Register /> },
    { path: "forget", element: <Forget /> },


    { path: "*", element: <NotFound /> },
  ]);
  return (
    <>
    <UserTokenProvider>
      
        <ViewContextProvider>
          
          <RouterProvider router={routers}></RouterProvider>
          
        </ViewContextProvider>
      
    </UserTokenProvider>
    </>
  );
}

export default App;
