import React, { useContext } from 'react'
import { ViewContext } from '../../../Context/ViewContext';

const Designs = () => {
  const {image ,imageUrl} = useContext(ViewContext);
  return (
    <>  
      <div className='d-flex justify-content-center align-items-center'>
      {imageUrl && <img src={imageUrl} alt="Captured Screenshot" className='w-50'/>}
      </div>
  
  </>
  )
}

export default Designs