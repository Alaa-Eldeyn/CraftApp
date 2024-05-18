import { RouterProvider,createBrowserRouter } from "react-router-dom";

import Login from "./Componants/Login/Login";
import Register from "./Componants/Register/Register";
import NotFound from "./Componants/NotFound/NotFound";
import Home from "./Componants/Home/Home";
import Cutomize from "./Componants/Cutomize/Cutomize";
import MyDesign from "./Componants/Editor/MyDesign/MyDesign";
import Layout from "./Componants/Layout/Layout";
import Forget from "./Componants/Forget/Forget";
import Editor from "./Componants/Editor/Editor";
import ProtectRouting from "./Componants/ProtectRouting/ProtectRouting";

// -------------------
import Account from "./Componants/Account/Account";
import {  useQuery } from "react-query";
import axios from "axios";
import ChangePass from "./Componants/ChangePass/ChangePass";
import { useContext } from "react";
import { ViewContext } from "./Context/ViewContext";

// ---------------
import hfw from "./Assets/items/hfw.png"
import hbw from "./Assets/items/hbw.png"
// import hb from "./Assets/items/hb.png"
// import hb from "./Assets/items/hb.png"
// import hb from "./Assets/items/hb.png"
// import hb from "./Assets/items/hb.png"
// import hb from "./Assets/items/hb.png"
// import hb from "./Assets/items/hb.png"
// import hb from "./Assets/items/hb.png"
// import hb from "./Assets/items/hb.png"
// import hb from "./Assets/items/hb.png"
// import hb from "./Assets/items/hb.png"
// import hb from "./Assets/items/hb.png"
// import hb from "./Assets/items/hb.png"

// ------------baby---------------
import pbw from "./Assets/items/pbw.png"
import pfw from "./Assets/items/pfw.png"
import pfg from "./Assets/items/pfg.png"
import pbg from "./Assets/items/pbg.png"
import pfb from "./Assets/items/pfb.png"
import pbb from "./Assets/items/pbb.png"
import bfp from "./Assets/items/bfp.png"
import pbp from "./Assets/items/pbp.png"
import pfb2 from "./Assets/items/pfb (2).png"
import pbb2 from "./Assets/items/pbb (2).png"
import graybabyf from "./Assets/items/graybabyf.png"
import graybabyb from "./Assets/items/graybabyb.png"
import pgf from "./Assets/items/pgf.png"
import pgb from "./Assets/items/pgb.png"
// ---------------


function App() {

  
  
  let {indColor}= useContext(ViewContext)
    
  // function getItems(){
  //   return axios.get(`http://customcrafttt.somee.com/api/ColoredItem/GetItems`)
  // }

  // let {data } = useQuery('ItemsColors', getItems , {
  //   refetchOnMount:false,
  //   // refetchInterval: 30000
  // })
  // setUrlColor(data);


  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element:  <Home />  },
        {
          path: "/customize",
          element: <ProtectRouting><Cutomize /></ProtectRouting> ,
        },
        {
          path: "/myDesign",
          element: <ProtectRouting><MyDesign /> </ProtectRouting>,
        },
        { path: "/contact" , element:   <ProtectRouting><Account/> </ProtectRouting>},
        { 
          path: "editor/Hoodie", 
          element: (
            <ProtectRouting>
              <Editor
                hoodifront={
                  indColor === 0 ? hfw : ''
                  // indColor === 1 ? urlColor?.data[2]?.url :
                  // indColor === 2 ? urlColor?.data[4]?.url :
                  // indColor === 3 ? urlColor?.data[6]?.url :
                  // indColor === 4 ? urlColor?.data[8]?.url :
                  // indColor === 5 ? urlColor?.data[10]?.url :
                  // indColor === 6 ? urlColor?.data[12]?.url :
                  // urlColor?.data[2]?.url 
                }
                hoodiback={
                  indColor === 0 ?hbw : ''
                  // indColor === 1 ? urlColor?.data[3]?.url :
                  // indColor === 2 ? urlColor?.data[5]?.url :
                  // indColor === 3 ? urlColor?.data[7]?.url :
                  // indColor === 4 ? urlColor?.data[9]?.url :
                  // indColor === 5 ? urlColor?.data[11]?.url :
                  // indColor === 6 ? urlColor?.data[13]?.url :
                  // urlColor?.data[3]?.url
                }
              />
            </ProtectRouting>
          )
        },
        { path: "editor/T-shirt Men", element:   <ProtectRouting><Editor hoodifront={''} hoodiback={''}/> </ProtectRouting>},
        { path: "editor/Long Sleeve Woman", element:   <ProtectRouting><Editor hoodifront={''} hoodiback={''}/> </ProtectRouting>},
        { path: "editor/T-shirt Woman", element: <ProtectRouting><Editor hoodifront={''} hoodiback={''}/>   </ProtectRouting>},
        { path: "editor/Baby t-shirt", element:  <ProtectRouting> <Editor hoodifront={''} hoodiback={''}/> </ProtectRouting> },
        { path: "editor/Baby BodySuit", element:   <ProtectRouting><Editor 
        hoodifront={
          indColor === 0 ? pfw : 
          indColor === 1 ? pfg :
          indColor === 2 ? pfb :
          indColor === 3 ? bfp :
          indColor === 4 ? pfb2 :
          indColor === 5 ? graybabyf :
          indColor === 6 ? pgf :
          pfg
        }
        hoodiback={
          indColor === 0 ? pbw : 
          indColor === 1 ? pbg :
          indColor === 2 ? pbb :
          indColor === 3 ? pbp:
          indColor === 4 ? pbb2 :
          indColor === 5 ? graybabyb :
          indColor === 6 ? pgb :
          pbg
        }
        /> </ProtectRouting>},
        { path: "editor/Bag", element:   <ProtectRouting><Editor hoodifront={''} hoodiback={''}/> </ProtectRouting>},
        { path: "editor/Cover", element: <ProtectRouting><Editor hoodifront={''} hoodiback={''}/>   </ProtectRouting>},
      ],
    },
    { path: "/login", element:<Login /> },
    { path: "/register", element: <Register /> },
    { path: "/forget", element: <Forget /> },
    { path: "/changePass", element: <ProtectRouting><ChangePass /></ProtectRouting>  },

    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>

            <RouterProvider router={routers}></RouterProvider>

    </>
  );
}

export default App;
