import React, { useContext } from 'react'
import { ViewContext } from '../../../Context/ViewContext';

const Designs = () => {
  const {image} = useContext(ViewContext);
  return (
    <>  
      <div>
        <img src={image} alt="Design" style={{ width: '100%', height: '100%' }} />
      </div>
  
  </>
  )
}

export default Designs