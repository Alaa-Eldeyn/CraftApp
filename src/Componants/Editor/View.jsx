import React, { useContext } from 'react'
import Container from './Container';
import '../DesignList/Resize'
import { ViewContext } from '../../Context/ViewContext';
const View = ({ mainImg ,hoodibg ,hoodiback, hoodiB,hoodiF,setMainImg}) => {
  
  const {usedindex }= useContext(ViewContext)
  return (
      <div className="w-100 d-flex justify-content-center align-items-center mt-2" style={{backgroundColor :"#F0F0F0" }}>
      <div className="d-flex flex-column  gap-5 justify-content-center align-items-center">
        <div style={{ maxWidth: "400px", maxHeight: "450px" , position:'relative' }}>
          <img className="w-100 "  src={ mainImg}  alt="Main img" />
          {/* src={usedindex === 17 ? GreenImg : mainImg} */}
          <Container/>
        </div>

        <div className="  d-flex justify-content-center align-items-center ">
          <div
            onClick={() => setMainImg(hoodibg)}
            className="capture cursor p-0 d-flex justify-content-center align-items-center"
            style={{ width: "70%", height: "70%" }}
          >
            <img className='m-2' style={mainImg===hoodiback ?  {width : '50px'} :{width : '70px'}} src={hoodiF} alt="Main img" />

          </div>
          <div
            onClick={() => setMainImg(hoodiback)}
            className=" cursor p-0 d-flex justify-content-center align-items-center"
            style={{ width: "100%", height: "100%" }}
          >
            <img className='m-2' style={mainImg===hoodiback ?  {width : '70px'} :{width : '50px'}}  src={hoodiB} alt="Main img" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default View