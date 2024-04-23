import React, { useContext, useEffect, useState } from 'react'
import '../DesignList/Resize'
import style from './Editor.module.css'
import style2 from './tools/Ai.module.css'
import img from '../../Assets/images/layer.png'
import img2 from '../../Assets/images/save.png'

import { ViewContext } from '../../Context/ViewContext';
const Layers = () => {
    let { textContent, iconContent,images ,shapeContent} = useContext(ViewContext);
    const { click, setClick } = useContext(ViewContext)
    const [textState, setTextState] = useState(textContent);
    useEffect(() => { 
        setTextState(textContent);
    }, [textState, textContent]);
    

    function clicked(){
        setClick(!click)
    }

    const deleteHandler = (removeId) => {
        textContent = textContent.filter((item) => item.id !== removeId);
        console.log(textContent);
        return textContent;
    };
    const styles = {
        SvgColor: {
            svg: {
                path: {
                fill: "#fff",
            },
        },
        },
    };
return (
    <>
        <div
        className={`${style.layers} py-4 `}>
            <div style={{overflow:'auto' , height:'95%'}}  className="d-flex flex-lg-column flex-sm-row flex-md-row align-items-center overflow-auto text-center">
            <div className=' cursor text-center rounded-2 my-1 py-2' style={{width:'72px' , border:'1px solid #5B8F9A' , backgroundColor:'#5B8F9A' , color:'#FCFCFC'}}>
                    <img src={img2} alt="layers" className='w-25 pt-1'/>
                    <p className='p-0 m-0 ' style={{fontSize:'16px'}}>Save</p>
                </div>
                <div onClick={clicked} className=' cursor text-center rounded-2 my-1' style={{width:'72px' , border:'1px solid #000'}}>
                    <img src={img} alt="layers" className='w-50 pt-1'/>
                    <p className='p-0 m-0 ' style={{fontSize:'14px'}}>Click</p>
                </div>

                {textState.map((item, index) => {
                    return (
                        <div key={index} className={`${click ? "rounded-2 my-1 py-2 show" : "rounded-2 my-1 py-2 hide"} `}
                            style={{ width: '72px', border: '1px solid #000', height: '50px' }} onClick={() => { console.log(item.id); deleteHandler(item.id)}}>
                
                    <pre
                        className={`m-0  ${item.font} 
                        ${
                        item.font === "Vibes"
                            ? style2.vibes
                            : item.font === "Rakkas"
                            ? style2.rakkas
                            : item.font === "Caveat"
                            ? style2.Caveat
                            : item.font === "Ojuju"
                            ? style2.ojuju
                            : item.font === "Shadows Into Light"
                            ? style2.shadows
                            : item.font === "Dancing Script"
                            ? style2.dancing
                            : item.font === "Noto Nastaliq Urdu"
                            ? style2.amiri
                            : item.font === "Amiri"
                            ? style2.amiri
                            : item.font === "Cairo"
                            ? style2.Cairo
                            : style2.roboto
                        }`}
                        style={{
                        color: `${item.color}`,
                        overflow:'hidden'
                        }}
                    >
                        {item.textAreaCont}
                    </pre>
                    </div>
                    );
                })}

                {iconContent.map((icon, index) => {
                const newSvg = icon.svg.replace(
                    /fill=".*?"/g,
                    `fill="${icon.colorBtn}"`,
                    
                );
                return (
                    <div key={index} className={`${click ? "rounded-2 my-1 py-2 show": "rounded-2 my-1 py-2 hide"} `} 
                    style={{width:'72px' , border:'1px solid #000' , height:'50px'}}>
                        <div

                        style={{
                        width: "100%",
                        height: "100%",
                        ...styles,
                        }}
                        
                        dangerouslySetInnerHTML={{ __html: newSvg.replace(/<svg/g, `<svg width="30" height="30"` ) || "" }}
                        ></div>
                    </div>
                );
                })}

                {shapeContent.map((icon, index) => {
                        const newSvgg = icon.svgShapes.replace(
                        /fill=".*?"/g,
                        `fill="${icon.colorShapes}"`
                        );
                        return (
                        
                            <div key={index} className={`${click ? "rounded-2 my-1 py-2 show": "rounded-2 my-1 py-2 hide"} `} 
                            style={{width:'72px' , border:'1px solid #000' , height:'50px'}}>
                                        <div
                                        style={{
                                        width: "100%",
                                        height: "100%",
                                        ...styles,
                                        }}
                                        
                                        dangerouslySetInnerHTML={{ __html: newSvgg.replace(/<svg/g, `<svg width="30" height="30"` ) || "" }}
                                        ></div>
                            </div>
                            
                        );
                })}

                {images.map((image, index) => {
                return (
                    <div key={index} className={`${click ? "rounded-2 my-1 d-flex justify-content-center align-items-center show ": "rounded-2 my-1 d-flex justify-content-center align-items-center hide"} `}
                    style={{width:'72px' , border:'1px solid #000' , height:'50px' }}>
                    
                    <div style={{overflow:'hidden' , width:'100%' , height:'100%'}}>
                    <img
                        src={image.url}
                        alt={image.name}
                        className='w-50 '
                    />
                    </div>
                    </div>
            
                );
                })}
                </div>
                </div>
        
    </>

)};

export default Layers;

