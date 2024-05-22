import React, { useContext } from 'react'
import style from './Ai.module.css'
import { ViewContext } from '../../../Context/ViewContext';

const Designs = () => {
  const {imageUrl} = useContext(ViewContext);
  
  return (
    <> 
    <p className={style.text}>My Designs</p>
      <div id='targetDiv' className='d-flex justify-content-center align-items-center'>
        {imageUrl && <img src={imageUrl} className='w-100' alt='design'/>}
        </div>
      </>
  )}
  export default Designs;