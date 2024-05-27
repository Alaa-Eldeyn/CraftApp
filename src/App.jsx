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

// -------------hoodi-----------
import hfw from "./Assets/items/hfw.png"
import hbw from "./Assets/items/hbw.png"
import HFLB from "./Assets/items/HFLB.png"
import HBLB from "./Assets/items/HBLB.png"
import HFR from "./Assets/items/HFR.png"
import HBR from "./Assets/items/HBR.png"
import HBG from "./Assets/items/hbg.png"
import HFG from "./Assets/items/HFG.png"
import HFB from "./Assets/items/HFB.png"
import HBB from "./Assets/items/HBB.png"
import HFGR from "./Assets/items/HFGR.png"
import HBGR from "./Assets/items/HBGR.png"
import HFLG from "./Assets/items/HFLG.png"
import HBLG from "./Assets/items/HBLG.png"
import HF_BROWN from "./Assets/items/HF BROWN.png"
import HB_BROWN from "./Assets/items/HB BROWN.png"
import HF_MUV from "./Assets/items/HF MUV.png"
import HB_MUV from "./Assets/items/HB MUV.png"
import HF_teal from "./Assets/items/HF teal.png"
import HB_teal from "./Assets/items/HB teal.png"
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
import TB_Teal from "./Assets/items/TB Teal.png"
import TF_teal from "./Assets/items/TF teal.png"
import TF_BROWN from "./Assets/items/TF BROWN.png"
import TB_BROWN from "./Assets/items/TB BROWN.png"
import TF_MUV from "./Assets/items/TF MUV.png"
import TB_MUV from "./Assets/items/TB MUV.png"


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
import WF_BROWN from "./Assets/items/WF BROWN.png"
import WB_BROWN from "./Assets/items/WB BROWN.png"
import WF_MUV from "./Assets/items/WF MUV.png"
import WB_MUV from "./Assets/items/WB MUV.png"
import WF_teal from "./Assets/items/WF teal.png"
import WB_teal from "./Assets/items/WB teal.png"

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
import LF_BROWN from "./Assets/items/LF BROWN.png"
import LB_BROWN from "./Assets/items/LB BROWN.png"
import LF_MUV from "./Assets/items/LF MUV.png"
import LB_MUV from "./Assets/items/LB MUV.png"
import LF_teal from "./Assets/items/LF teal.png"
import LB_teal from "./Assets/items/LB teal.png"
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
import CF_BROWN from "./Assets/items/CF BROWN.png"
import CB_BROWN from "./Assets/items/CB BROWN.png"
import CF_MUV from "./Assets/items/CF MUV.png"
import CB_MUV from "./Assets/items/CB MUV.png"
import CF_teal from "./Assets/items/CF teal.png"
import CB_teal from "./Assets/items/CB teal.png"


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
import BABYF_TEAL from "./Assets/items/BABYF_TEAL.png"
import BABYB_TEAL from "./Assets/items/BABYB_TEAL.png"
import BABYF_MUV from "./Assets/items/BABYF_MUV.png"
import BABYB_MUV from "./Assets/items/BABYB_MUV.png"
import BABYF_BROWN from "./Assets/items/BABYF_BROWN.png"
import BABYB_BROWN from "./Assets/items/BABYB_BROWN.png"


// --------------bag-----------------
import B_White from "./Assets/items/B_White.png"
import B_Bray from "./Assets/items/B-Bray.png"
import B_Black from "./Assets/items/B_Black.png"
import B_Rose from "./Assets/items/B_Rose.png"
import B_Blue from "./Assets/items/B_Blue.png"
import B_Green from "./Assets/items/B_Green.png"
import B_Grey from "./Assets/items/B_Grey.png"
import BAG_TEAL from "./Assets/items/BAG_TEAL.png"
import BAG_MUV from "./Assets/items/BAG_MUV.png"
import BAG_BROWN from "./Assets/items/BAG_BROWN.png"
// -------------COVER------------
import PC_White from "./Assets/items/PC_White.png"
import PC_Grey from "./Assets/items/PC_Grey.png"
import PC_Black from "./Assets/items/PC_Black.png"
import PC_Rose from "./Assets/items/PC_Rose.png"
import PC_Blue from "./Assets/items/PC_Blue.png"
import PC_Green from "./Assets/items/PC_Green.png"
import PC_LightBlue from "./Assets/items/PC_LightBlue.png"
import PC_TEAL from "./Assets/items/PC_TEAL.png"
import PC_MUV from "./Assets/items/PC_MUV.png"
import PC_BROWN from "./Assets/items/PC_BROWN.png"
import Reset from "./Componants/Reset/Reset";

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
        { path: "/contact" , element: <Account/> },
        { 
          path: "customize/Hoodie", 
          element: (
            <ProtectRouting> <Editor
                hoodifront={
                  indColor === 0 ? hfw :
                  indColor === 2 ? HFG:
                  indColor === 1 ? HFB :
                  indColor === 3 ? HFR :
                  indColor === 4 ? HFLB :
                  indColor === 6 ? HFLG :
                  indColor === 5 ? HFGR :
                  indColor === 7 ? HF_teal :
                  indColor === 8 ? HF_MUV :
                  indColor === 9 ? HF_BROWN :
                  HFG
                }
                hoodiback={
                  indColor === 0 ? hbw :
                  indColor === 2 ? HBG :
                  indColor === 1 ? HBB :
                  indColor === 3 ? HBR :
                  indColor === 4 ? HBLB :
                  indColor === 6 ? HBLG :
                  indColor === 5 ? HBGR :
                  indColor === 7 ? HB_teal :
                  indColor === 8 ? HB_MUV :
                  indColor === 9 ? HB_BROWN :
                  HBG
                }
              />
            </ProtectRouting>
          )
        },

        { path: "customize/T-shirt Men", element:   <ProtectRouting><Editor 
        hoodifront={
          indColor === 0 ? TWF : 
          indColor === 2 ? TGF :
          indColor === 1 ? TBF :
          indColor === 3 ? TRF :
          indColor === 4 ? TLF :
          indColor === 6 ? TF :
          indColor === 5 ? TGRF :
          indColor === 7 ? TF_teal :
          indColor === 8 ? TF_MUV :
          indColor === 9 ? TF_BROWN :

          TGF
        }
        hoodiback={
          indColor === 0 ? TWB : 
          indColor === 2 ? TGB :
          indColor === 1 ? TBB :
          indColor === 3 ? TRB:
          indColor === 4 ? TLB :
          indColor === 6 ? TB :
          indColor === 5 ? TGRB :
          indColor === 7 ? TB_Teal :
          indColor === 8 ? TB_MUV :
          indColor === 9 ? TB_BROWN :
          TGB
        }
        /> </ProtectRouting>},

        { path: "customize/Long Sleeve Woman", element:   <ProtectRouting><Editor 
        hoodifront={
          indColor === 0 ? LSWF_White : 
          indColor === 2 ? LSWF_Grey :
          indColor === 1 ? LSWF_Black :
          indColor === 3 ? LSWF_Rose :
          indColor === 4 ? LSWF_Blue :
          indColor === 6 ? LSWF_LightBlue :
          indColor === 5 ? LSWF_Green :
          indColor === 7 ? LF_teal :
          indColor === 8 ? LF_MUV :
          indColor === 9 ? LF_BROWN :
          LSWF_Grey
        }
        hoodiback={
          indColor === 0 ? LSWB_White : 
          indColor === 2 ? LSWB_Grey :
          indColor === 1 ? LSWB_Black :
          indColor === 3 ? LSWB_Rose:
          indColor === 4 ? LSWB_Blue :
          indColor === 6 ? LSWB_LightBlue :
          indColor === 5 ? LSWB_Green :
          indColor === 7 ? LB_teal :
          indColor === 8 ? LB_MUV :
          indColor === 9 ? LB_BROWN :
          LSWB_Grey
        }/> </ProtectRouting>},

        { path: "customize/T-shirt Woman", element: <ProtectRouting><Editor 
        hoodifront={
          indColor === 0 ? FSWW : 
          indColor === 2 ? FSWG :
          indColor === 1 ? FSWB :
          indColor === 3 ? FSWR :
          indColor === 4 ? FSWLB :
          indColor === 6 ? FSWL :
          indColor === 5 ? FSWGR :
          indColor === 7 ? WF_teal :
          indColor === 8 ? WF_MUV :
          indColor === 9 ? WF_BROWN :
          FSWG
        }
        hoodiback={
          indColor === 0 ? BSWW : 
          indColor === 2 ? BSWG :
          indColor === 1 ? BSWB :
          indColor === 3 ? BSWR:
          indColor === 4 ? BSWLB :
          indColor === 6 ? BSWL :
          indColor === 5 ? BSWGR :
          indColor === 7 ? WB_teal :
          indColor === 8 ? WB_MUV :
          indColor === 9 ? WB_BROWN :
          BSWG
        }
        />   </ProtectRouting>},

        { path: "customize/Baby t-shirt", element:  <ProtectRouting> <Editor 
        hoodifront={
          indColor === 0 ? CWF : 
          indColor === 2 ? CGF :
          indColor === 1 ? CBF :
          indColor === 3 ? CRF :
          indColor === 4 ? CLF :
          indColor === 6 ? CLGF:
          indColor === 5 ? CGRF :
          indColor === 7 ? CF_teal :
          indColor === 8 ? CF_MUV :
          indColor === 9 ? CF_BROWN :
          CGF
        }
        hoodiback={
          indColor === 0 ? CWB : 
          indColor === 2 ? CGB :
          indColor === 1 ? CBB :
          indColor === 3 ? CRB:
          indColor === 4 ? CLB :
          indColor === 6 ? CLGB :
          indColor === 5 ? CGRB :
          indColor === 7 ? CB_teal :
          indColor === 8 ? CB_MUV :
          indColor === 9 ? CB_BROWN :
          CGB
        }
        /> </ProtectRouting> },

        { path: "customize/Baby BodySuit", element:   <ProtectRouting><Editor 
        hoodifront={
          indColor === 0 ? pfw : 
          indColor === 2 ? pfg :
          indColor === 1 ? pfb :
          indColor === 3 ? bfp :
          indColor === 4 ? pfb2 :
          indColor === 6 ? graybabyf :
          indColor === 5 ? pgf :
          indColor === 7 ? BABYF_TEAL :
          indColor === 8 ? BABYF_MUV :
          indColor === 9 ? BABYF_BROWN :
          pfg
        }
        hoodiback={
          indColor === 0 ? pbw : 
          indColor === 2 ? pbg :
          indColor === 1 ? pbb :
          indColor === 3 ? pbp:
          indColor === 4 ? pbb2 :
          indColor === 6 ? graybabyb :
          indColor === 5 ? pgb :
          indColor === 7 ? BABYB_TEAL :
          indColor === 8 ? BABYB_MUV :
          indColor === 9 ? BABYB_BROWN :
          pbg
        }
        /> </ProtectRouting>},

        { path: "customize/Bag", element:   <ProtectRouting><Editor
        hoodifront={
          indColor === 0 ? B_White : 
          indColor === 2 ? B_Bray :
          indColor === 1 ? B_Black :
          indColor === 3 ? B_Rose :
          indColor === 4 ? B_Blue :
          indColor === 6 ? B_Grey :
          indColor === 5 ? B_Green :
          indColor === 7 ? BAG_TEAL :
          indColor === 8 ? BAG_MUV :
          indColor === 9 ? BAG_BROWN :
          B_Bray
        }
        /> </ProtectRouting>},
        
        { path: "customize/Cover", element: <ProtectRouting><Editor
        hoodifront={
          indColor === 0 ? PC_White : 
          indColor === 2 ? PC_Grey :
          indColor === 1 ? PC_Black :
          indColor === 3 ? PC_Rose :
          indColor === 4 ? PC_Blue :
          indColor === 5 ? PC_Green :
          indColor === 6 ? PC_LightBlue :
          indColor === 7 ? PC_TEAL :
          indColor === 8 ? PC_MUV :
          indColor === 9 ? PC_BROWN :

          PC_Grey
        }
        />   </ProtectRouting>},
      ],
      
    },
    { path: "/changePass", element: <ProtectRouting><ChangePass /></ProtectRouting>  },
    { path: "/login", element:<Login /> },
    { path: "/register", element: <Register /> },
    { path: "/forget", element: <Forget /> },
    { path: "/reset", element: <Reset /> },
    { path: "*", element: <NotFound /> },
    
  ]);

  return (
    <>

      <RouterProvider router={routers}></RouterProvider>

    </>
  );
}

export default App;
