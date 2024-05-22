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
import ChangePass from "./Componants/ChangePass/ChangePass";
import { useContext } from "react";
import { ViewContext } from "./Context/ViewContext";

// BA2I 2 ITEMS 
// -------------hoodi-----------
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
// -----------MEN ----------------

import TWF from "./Assets/items/TWF.png"
import TWB from "./Assets/items/TWB.png"
import TGF from "./Assets/items/TGF.png"
import TGB from "./Assets/items/TGB.png"
import TBF from "./Assets/items/TBF.png"
import TBB from "./Assets/items/TBB.png"
import TRF from "./Assets/items/TRF.png"
import TRB from "./Assets/items/TRB.png"
import TLF from "./Assets/items/TLF.png"
import TLB from "./Assets/items/TLB.png"
import TF from "./Assets/items/TF.png"
import TB from "./Assets/items/TB.png"
import TGRF from "./Assets/items/TGRF.png"
import TGRB from "./Assets/items/TGRB.png"

// --------------woman shirt------

import FSWW from "./Assets/items/front tshirt woman 7.png"
import FSWG from "./Assets/items/front tshirt woman 4.png"
import FSWB from "./Assets/items/front tshirt woman 5.png"
import FSWR from "./Assets/items/front tshirt woman 9.png"
import FSWLB from "./Assets/items/front tshirt woman 8.png"
import FSWL from "./Assets/items/front tshirt woman 10.png"
import FSWGR from "./Assets/items/front tshirt woman 6.png"
import BSWW from "./Assets/items/back tshirt woman 4.png"
import BSWG from "./Assets/items/back tshirt woman 1.png"
import BSWB from "./Assets/items/back tshirt woman 2.png"
import BSWR from "./Assets/items/back tshirt woman 6.png"
import BSWLB from "./Assets/items/back tshirt woman 5.png"
import BSWL from "./Assets/items/back tshirt woman 7.png"
import BSWGR from "./Assets/items/back tshirt woman 3.png"
// -----------woman --------------
import LSWF_White from "./Assets/items/LSWF_White.png"
import LSWF_Grey from "./Assets/items/LSWF_Grey.png"
import LSWF_Black from "./Assets/items/LSWF_Black.png"
import LSWF_Rose from "./Assets/items/LSWF_Rose.png"
import LSWF_Blue from "./Assets/items/LSWF_Blue.png"
import LSWF_LightBlue from "./Assets/items/LSWF_LightBlue.png"
import LSWF_Green from "./Assets/items/LSWF_Green.png"
import LSWB_White from "./Assets/items/LSWB_White.png"
import LSWB_Grey from "./Assets/items/LSWB_Grey.png"
import LSWB_Black from "./Assets/items/LSWB_Black.png"
import LSWB_Rose from "./Assets/items/LSWB_Rose.png"
import LSWB_Blue from "./Assets/items/LSWB_Blue.png"
import LSWB_LightBlue from "./Assets/items/LSWB_LightBlue.png"
import LSWB_Green from "./Assets/items/LSWB_Green.png"
// ------------Child--------------

import CWF from "./Assets/items/CWF.png"
import CWB from "./Assets/items/CWB.png"
import CGF from "./Assets/items/CGF.png"
import CGB from "./Assets/items/CGB.png"
import CBF from "./Assets/items/CBF.png"
import CBB from "./Assets/items/CBB.png"
import CRF from "./Assets/items/CRF.png"
import CRB from "./Assets/items/CRB.png"
import CLB from "./Assets/items/CLB.png"
import CLF from "./Assets/items/CLF.png"
import CLGF from "./Assets/items/CLGF.png"
import CLGB from "./Assets/items/CLGB.png"
import CGRF from "./Assets/items/CGRF.png"
import CGRB from "./Assets/items/CGRB.png"

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
// --------------bag-----------------
import B_White from "./Assets/items/B_White.png"
import B_Bray from "./Assets/items/B-Bray.png"
import B_Black from "./Assets/items/B_Black.png"
import B_Rose from "./Assets/items/B_Rose.png"
import B_Blue from "./Assets/items/B_Blue.png"
import B_Green from "./Assets/items/B_Green.png"
import B_Grey from "./Assets/items/B_Grey.png"

// -------------COVER------------
import PC_White from "./Assets/items/PC_White.png"
import PC_Grey from "./Assets/items/PC_Grey.png"
import PC_Black from "./Assets/items/PC_Black.png"
import PC_Rose from "./Assets/items/PC_Rose.png"
import PC_Blue from "./Assets/items/PC_Blue.png"
import PC_Green from "./Assets/items/PC_Green.png"
import PC_LightBlue from "./Assets/items/PC_LightBlue.png"
// ----------------------------

function App() {

  
  
  let {indColor}= useContext(ViewContext)

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
          path: "customize/Hoodie", 
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

        { path: "customize/T-shirt Men", element:   <ProtectRouting><Editor 
        hoodifront={
          indColor === 0 ? TWF : 
          indColor === 1 ? TGF :
          indColor === 2 ? TBF :
          indColor === 3 ? TRF :
          indColor === 4 ? TLF :
          indColor === 5 ? TF :
          indColor === 6 ? TGRF :
          TGF
        }
        hoodiback={
          indColor === 0 ? TWB : 
          indColor === 1 ? TGB :
          indColor === 2 ? TBB :
          indColor === 3 ? TRB:
          indColor === 4 ? TLB :
          indColor === 5 ? TB :
          indColor === 6 ? TGRB :
          TGB
        }

        /> </ProtectRouting>},

        { path: "customize/Long Sleeve Woman", element:   <ProtectRouting><Editor 
        hoodifront={
          indColor === 0 ? LSWF_White : 
          indColor === 1 ? LSWF_Grey :
          indColor === 2 ? LSWF_Black :
          indColor === 3 ? LSWF_Rose :
          indColor === 4 ? LSWF_Blue :
          indColor === 5 ? LSWF_LightBlue :
          indColor === 6 ? LSWF_Green :
          LSWF_Grey
        }
        hoodiback={
          indColor === 0 ? LSWB_White : 
          indColor === 1 ? LSWB_Grey :
          indColor === 2 ? LSWB_Black :
          indColor === 3 ? LSWB_Rose:
          indColor === 4 ? LSWB_Blue :
          indColor === 5 ? LSWB_LightBlue :
          indColor === 6 ? LSWB_Green :
          LSWB_Grey
        }/> </ProtectRouting>},

        { path: "customize/T-shirt Woman", element: <ProtectRouting><Editor 
        hoodifront={
          indColor === 0 ? FSWW : 
          indColor === 1 ? FSWG :
          indColor === 2 ? FSWB :
          indColor === 3 ? FSWR :
          indColor === 4 ? FSWLB :
          indColor === 5 ? FSWL :
          indColor === 6 ? FSWGR :
          FSWG
        }
        hoodiback={
          indColor === 0 ? BSWW : 
          indColor === 1 ? BSWG :
          indColor === 2 ? BSWB :
          indColor === 3 ? BSWR:
          indColor === 4 ? BSWLB :
          indColor === 5 ? BSWL :
          indColor === 6 ? BSWGR :
          BSWG
        }

        />   </ProtectRouting>},

        { path: "customize/Baby t-shirt", element:  <ProtectRouting> <Editor 
        hoodifront={
          indColor === 0 ? CWF : 
          indColor === 1 ? CGF :
          indColor === 2 ? CBF :
          indColor === 3 ? CRF :
          indColor === 4 ? CLF :
          indColor === 5 ? CLGF:
          indColor === 6 ? CGRF :
          CGF
        }
        hoodiback={
          indColor === 0 ? CWB : 
          indColor === 1 ? CGB :
          indColor === 2 ? CBB :
          indColor === 3 ? CRB:
          indColor === 4 ? CLB :
          indColor === 5 ? CLGB :
          indColor === 6 ? CGRB :
          CGB
        }

        /> </ProtectRouting> },

        { path: "customize/Baby BodySuit", element:   <ProtectRouting><Editor 
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

        { path: "customize/Bag", element:   <ProtectRouting><Editor
        hoodifront={
          indColor === 0 ? B_White : 
          indColor === 1 ? B_Bray :
          indColor === 2 ? B_Black :
          indColor === 3 ? B_Rose :
          indColor === 4 ? B_Blue :
          indColor === 5 ? B_Grey :
          indColor === 6 ? B_Green :
          B_Bray
        }
        /> </ProtectRouting>},
        
        { path: "customize/Cover", element: <ProtectRouting><Editor
        hoodifront={
          indColor === 0 ? PC_White : 
          indColor === 1 ? PC_Grey :
          indColor === 2 ? PC_Black :
          indColor === 3 ? PC_Rose :
          indColor === 4 ? PC_Blue :
          indColor === 6 ? PC_Green :
          indColor === 5 ? PC_LightBlue :
          PC_Grey
        }
        />   </ProtectRouting>},
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
