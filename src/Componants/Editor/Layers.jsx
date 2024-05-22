import React, { useContext, useEffect, useState } from 'react'
import style from './Editor.module.css'
import style2 from './tools/Ai.module.css'
import img from '../../Assets/images/layer.png'
import img2 from '../../Assets/images/save.png'
import { ViewContext } from '../../Context/ViewContext';
import html2canvas from 'html2canvas'
import axios from 'axios'
import { userToken } from '../../Context/TokenContext'
import Swal from 'sweetalert2'

const Layers = () => {
    
    const [clickName , setClickName] = useState("Hide")
    
    let {imageData, imageUrl, setImageUrl, setJunk ,junk , textContent, 
        iconContent,images ,shapeContent ,click, setClick , ai,
        mutation1,
        setMutation1, getImage
    } = useContext(ViewContext);
    let {token}= useContext(userToken)
    
    
    const handleCapture = () => {
        setJunk(true);

            setTimeout(() => {
                
                html2canvas(document.getElementById('testdiv')).then((canvas) => {
                    const imgData = canvas.toDataURL('image/png', 0.9);
                    const link = document.createElement('a');
                    link.href = imgData;
                    // link.download = 'myImage.png';
                    // link.click();
                    // console.log(imgData);
                    setImageUrl(imgData)
                    alertSave(imgData)
                    
                });
                setJunk(false);
    }, 1);}

    function clicked(){
        setClick(!click)
        {click ? setClickName("Show") : setClickName("Hide")}
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
    const deleteHandler5 = (index) => {
        ai = ai.splice(index,1);
        setMutation1(!mutation1); 
        return (ai);
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

            
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        };


    function alertSave(imgData) {
        Swal.fire({
            title: "Do you want to save the design in your gallery ?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Save it "
            }).then((result) => {
            if (result.isConfirmed) {
                SavedDesigns({
                    "pictureUrl": `${imgData}`
                    })
            Swal.fire({
                title: "Saved!",
                text: "Your design in your gallery now !",
                icon: "success"
            });
            }
        });
    }

    async function SavedDesigns(values) {
            await axios.post(`
            http://customcrafttt.somee.com/api/SavedDesign/SavedDesigns`, values , {headers}
            );
        } 

return (
    <>
        <div
        className={`${style.layers} py-4 `}>
            <div  className={`${style.height}  d-flex flex-md-column flex-sm-row   align-items-center  overflow-auto text-center`}>

                <div onClick={handleCapture} className={`  cursor text-center rounded-2 my-1 py-2 ${style.padding}`} 
                style={{width:'70px' , border:'1px solid #5B8F9A' , backgroundColor:'#5B8F9A' , color:'#FCFCFC'}}>
                    <img src={img2} alt="layers" className='w-25 pt-1'/>
                    <p className='p-0 m-0 ' style={{fontSize:'16px'}}>Save</p>
                </div>

                <div onClick={clicked} className=' cursor text-center rounded-2 my-1' style={{width:'70px' , border:'1px solid #000'}}>
                    <img src={img} alt="layers" className='w-50 pt-1'/>
                    <p className='p-0 m-0 ' style={{fontSize:'14px'}}>{clickName}</p>
                </div>

                {textContent.map((item, index) => {
                    return (
                        <>
                        <div key={index} className={`${click ? "rounded-2 my-1 mx-sm-1 py-2 show" : "rounded-2 mx-sm-1 my-1 py-2 hide"} `}
                            style={{ width: '70px', border: '1px solid #000', height: '50px' }} >
                            <div className="del" onClick={() => { deleteHandler1(index)}}></div>
                        <div style={{overflow:'hidden' , height:"100%"}}>
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
                            style={{width:'70px' , border:'1px solid #000' , height:'50px' }}>
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
                    style={{width:'70px' , border:'1px solid #000' , height:'50px'}} >
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
                    style={{width:'70px' , border:'1px solid #000' , height:'50px' }} >
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

                {ai.map((imageAi, index) => {
                return (
                    <div key={index} className={`${click ? "rounded-2  mx-sm-1 my-1 d-flex justify-content-center align-items-center show ": "rounded-2 mx-sm-1 my-1 d-flex justify-content-center align-items-center hide"} `}
                    style={{width:'70px' , border:'1px solid #000' , height:'50px' }} >
                    <div className="del2" onClick={() => { deleteHandler5(index)}}></div>
                    
                    <div className='d-flex justify-content-center align-items-center' style={{overflow:'hidden' , width:'100%' , height:'100%'}}>
                    <img
                        src={`data:image/png;base64,${imageAi.imageData}`}
                        alt="ai"
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

