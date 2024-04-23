import React from 'react';
import Rnd from 'react-rnd';
import style from '../Editor/tools/Ai.module.css'

export default function DesignListt({font,textAlign,color,resize}){
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0"
  };
  
  return(
    <>
    
    <Rnd
    style={style}
    default={{
      x: 0,
      y: 0,
      width: 320,
      height: 200
    }}
  >
    esraa
  </Rnd>
      
{/* 
      <span
        className={`w-100 mt-5 ${style.area} ${textAlign} ${font} 
        ${font === 'Vibes'? style.vibes:
        font === 'Rakkas'? style.rakkas :
        font === 'Caveat'? style.Caveat :
        font === 'Ojuju'? style.ojuju :
        font === 'Shadows Into Light'? style.shadows :
        font === 'Dancing Script'? style.dancing :
        font === 'Noto Nastaliq Urdu'? style.amiri :
        font === 'Amiri'? style.amiri :
        font === 'Cairo'? style.Cairo :
        style.roboto }`}
        placeholder="Type here"
        style={{color:`${color}` }}
        
      >
{resize}
      </span> */}

  </>
  )
};
