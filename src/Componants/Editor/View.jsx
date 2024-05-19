import React from 'react'
import Container from './Container';

const View = ({hoodiback, hoodifront ,mainImg , setMainImg}) => {

  return (
      <div className="w-100 d-flex justify-content-center align-items-center mt-2" style={{backgroundColor :"#F0F0F0" , height:'89vh'}}>
      <div className="d-flex flex-column  gap-5 justify-content-center align-items-center">
        <div id='testdiv'  style={{ maxWidth: "400px", maxHeight: "450px" , position:'relative' }}>
          <img className="w-100 " alt="Main imgg" src={mainImg} />
            <Container/>
        </div>

        <div className="  d-flex justify-content-center align-items-center ">
          <div
            onClick={() => setMainImg(hoodifront)}
            className=" cursor p-0 d-flex justify-content-center align-items-center"
            style={{ width: "70%", height: "70%" }}
          >
            {hoodifront &&<img className='m-2' style={mainImg===hoodiback ?  
              {width : '50px'} :{width : '70px'}} src={hoodifront} alt="Main imgg" />
            }
          </div>
          <div
            onClick={() => setMainImg(hoodiback)}
            className=" cursor p-0 d-flex justify-content-center align-items-center"
            style={{ width: "100%", height: "100%" }}
          >
            {hoodiback &&<img className='m-2' style={mainImg===hoodiback ?  
              {width : '70px'} :{width : '50px'}}  src={hoodiback} alt="Main imgg" />
            }
              </div>
        </div>

      </div>
    </div>
  );
};

export default View