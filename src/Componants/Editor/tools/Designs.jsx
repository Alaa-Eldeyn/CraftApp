import React, { useContext } from 'react'
import { ViewContext } from '../../../Context/ViewContext';

const Designs = () => {
  const {imageUrl} = useContext(ViewContext);
  console.log(imageUrl);
  return (
    <>  
      <div className='d-flex justify-content-center align-items-center'>
      </div>
  
  </>
  )
}

export default Designs