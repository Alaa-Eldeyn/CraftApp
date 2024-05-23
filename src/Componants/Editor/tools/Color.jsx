
import React, { useState } from 'react';
import style from './Ai.module.css';
import { useContext } from 'react';
import { ViewContext } from '../../../Context/ViewContext';

const Color = () => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(-1);
  const [usedColors, setUsedColors] = useState([]);
  
  const { setIndColor, setUsedindex}= useContext(ViewContext)


  const customColors = [
    '#F8F9F8',  '#1F201F' ,'#8D8F8C','#F3DBDE',  '#95A6DB',
    '#004F4C','#CBD3D2', '#4D7A87' ,'#9985A4','#9D7F72'

  ];

  const handleColorClick = (index) => {
    setIndColor(index);
    
    setSelectedColorIndex(index);
    setUsedindex(index)
    const color = customColors[index];
    if (!usedColors.includes(color)) {
      setUsedColors([...usedColors, color]);
    }
  };

  return (
    <>
      <p className={style.text}>Select a color</p>
      <div className='w-100 h-auto py-1 px-4 d-flex flex-wrap justify-content-start'>
        {customColors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleColorClick(index)}
            style={{
              width: '35px',
              marginInline: '.3125rem',
              marginTop: '.1875rem',
              marginBottom: '.1875rem',
              height: '35px',
              backgroundColor: color,
              border: index === selectedColorIndex ? '.0625rem solid #5B8F9A' : 'none',
              borderRadius: '.4375rem',
            }}
            className={style.hover}
          ></div>
        ))}

        <div style={{ width: '100%', height: '.125rem', marginTop: '.625rem', backgroundColor: '#8E8E8E' }}></div>
        
        <div>
          <p className={`${style.text} mt-3`}>Used Colors</p>
          {usedColors.length > 0 && (
            <div className='mt-3'>
              <div className='w-100 h-auto d-flex flex-wrap  justify-content-start'>
                {usedColors.map((color, index) => (
                  <div
                    key={index}
                    style={{
                      width: '35px',
                      marginInline: '.3125rem',
                      marginTop: '.1875rem',
                      marginBottom: '.1875rem',
                      height: '35px',
                      backgroundColor: color,
                      border: `.0625rem solid ${color}`,
                    }}
                    className='rounded rounded-3'
                  ></div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Color;






















