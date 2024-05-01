import React, { useContext } from 'react'
import '../DesignList/Resize'
import style from './Editor.module.css'
import style2 from './tools/Ai.module.css'
import img from '../../Assets/images/layer.png'
import img2 from '../../Assets/images/save.png'

import {toPng} from 'html-to-image';
import { ViewContext } from '../../Context/ViewContext';
const Layers = () => {
    let {setImageUrl, setJunk ,contentRef, textContent, iconContent,images ,shapeContent ,click, setClick , 
        mutation1,
        setMutation1, getImage
    } = useContext(ViewContext);

    // --------------------------
    
//     const handleCapture = ()=> {
//         const node = contentRef.current;
        
//         toPng(contentRef.current, { cacheBust: true, height: 500})
        
//         .then(dataUrl => {
        
//         console.log("Captured image:", dataUrl);
//         setImageUrl(dataUrl);
//         const link = document.createElement("a");
//         link.download = "MyDesign.png";
//         link.href=dataUrl;
//         link.click(); 
//         })

//         .catch(error => {
//         console.error("Error capturing screenshot:", error);
//         }

        
// );

// };
// ----------------------

const handleCapture = () => {
    setJunk(true);
        setTimeout(() => {
        const node = contentRef.current;
        
        toPng(contentRef.current, { cacheBust: true, height: 500})
        
        .then(dataUrl => {
        
        console.log("Captured image:", dataUrl);
        setImageUrl(dataUrl);
        const link = document.createElement("a");
        link.download = "MyDesign.png";
        link.href=dataUrl;
        link.click(); 
        })

        .catch(error => {
        console.error("Error capturing screenshot:", error);
        });
        setJunk(false);
    }, 1);}

    function clicked(){
        setClick(!click)
    }

    const deleteHandler1 = (index) => {
        textContent = textContent.splice(index,1);
        setMutation1(!mutation1); 
        return (textContent);
    };

    const deleteHandler2 = (index) => {
        iconContent = iconContent.splice(index,1);
        setMutation1(!mutation1); 
        return (iconContent);
    };
    const deleteHandler3 = (index) => {
        shapeContent = shapeContent.splice(index,1);
        setMutation1(!mutation1); 
        return (shapeContent);
    };
    const deleteHandler4 = (index) => {
        images = images.splice(index,1);
        setMutation1(!mutation1); 
        return (images);
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
            <div  className={`${style.height}  d-flex flex-md-column flex-sm-row  align-items-center overflow-auto text-center`}>
                <div onClick={handleCapture} className={`  cursor text-center rounded-2 my-1 py-2 ${style.padding}`} 
                style={{width:'72px' , border:'1px solid #5B8F9A' , backgroundColor:'#5B8F9A' , color:'#FCFCFC'}}>
                    <img src={img2} alt="layers" className='w-25 pt-1'/>
                    <p className='p-0 m-0 ' style={{fontSize:'16px'}}>Save</p>
                </div>
                <div onClick={clicked} className=' cursor text-center rounded-2 my-1' style={{width:'72px' , border:'1px solid #000'}}>
                    <img src={img} alt="layers" className='w-50 pt-1'/>
                    <p className='p-0 m-0 ' style={{fontSize:'14px'}}>Click</p>
                </div>

                {textContent.map((item, index) => {
                    return (
                        <>
                        <div key={index} className={`${click ? "rounded-2 my-1 mx-sm-1 py-2 show" : "rounded-2 mx-sm-1 my-1 py-2 hide"} `}
                            style={{ width: '72px', border: '1px solid #000', height: '50px' }} >
                            <div className="del" onClick={() => { deleteHandler1(index)}}></div>
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
                        </>
                    );
                })}

                {shapeContent.map((icon, index) => {
                        const newSvgg = icon.svgShapes.replace(
                        /fill=".*?"/g,
                        `fill="${icon.colorShapes}"`
                        );
                        return (
                        
                            <div key={index} className={`${click ? "rounded-2 my-1 py-2 mx-sm-1 show": "rounded-2 my-1 mx-sm-1 py-2 hide"} `} 
                            style={{width:'72px' , border:'1px solid #000' , height:'50px'}}>
                                <div className="del"  onClick={() => { deleteHandler3(index)}}></div>
                            
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
                {iconContent.map((icon, index) => {
                const newSvg = icon.svg.replace(
                    /fill=".*?"/g,
                    `fill="${icon.colorBtn}"`,
                    
                );
                return (
                    <div key={index} className={`${click ? "rounded-2 my-1 py-2 mx-sm-1 show": "rounded-2 my-1 py-2 mx-sm-1 hide"} `} 
                    style={{width:'72px' , border:'1px solid #000' , height:'50px'}} >
                            <div className="del" onClick={() => { deleteHandler2(index)}}></div>
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
                {images.map((image, index) => {
                return (
                    <div key={index} className={`${click ? "rounded-2  mx-sm-1 my-1 d-flex justify-content-center align-items-center show ": "rounded-2 mx-sm-1 my-1 d-flex justify-content-center align-items-center hide"} `}
                    style={{width:'72px' , border:'1px solid #000' , height:'50px' }} >
                    <div className="del2" onClick={() => { deleteHandler4(index)}}></div>
                    
                    <div className='d-flex justify-content-center align-items-center' style={{overflow:'hidden' , width:'100%' , height:'100%'}}>
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

