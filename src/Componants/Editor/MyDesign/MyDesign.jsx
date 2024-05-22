
import style from './MyDesign.module.css'
import { userToken } from "../../../Context/TokenContext";
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import img from '../../../Assets/images/3d.png'
import img2 from '../../../Assets/images/download.png'
import img3 from '../../../Assets/images/delete.png'

const MyDesign = () => {
    let { token } = useContext(userToken);
    const [modal, setModal] = useState(false);


    
    const toggleModal = () => {
        setModal(!modal);
    };
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    };

    function getDesigns() {
        return axios.get('http://customcrafttt.somee.com/api/SavedDesign/GetDesigns' , {headers});
    }

    let { data, isLoading } = useQuery('YourDesign', getDesigns, {
        refetchOnMount: false,
        refetchInterval: 3000
    });


    function download(ind) {
        const linkk = document.createElement('a');
        linkk.href = data?.data[ind]?.pictureUrl;
        linkk.download = 'Image.png';
        linkk.click(); 
    }
    function deletee() {
        
    }
    return (
        <>

        <div className={style.threeD} onClick={toggleModal}>
            <img src={img} alt="icon" style={{width:"20px"}} />
            <p className='p-0 m-0'>View</p>
        </div>

        {isLoading ? (
            <div
                className="position-fixed w-100 h-100 top-0 bottom-0 justify-content-center align-items-center"
                style={{ backgroundColor: 'rgba(49, 49, 49, 0.415)' }}
            >
                <span className="loader"></span>
            </div>
        ) : (
        <>
        {!modal && (
            <>

                <div className="container mt-5 pt-5">
                    <div className="row g-3">
                        {data?.data?.map((dataItem, index) => (
                            <div
                                key={index}
                                className={`col-xl-3 col-lg-4 col-md-6 cursor position-relative ${style.hover}`}
                            >
                                
                                <div className={style.download} onClick={()=>download(index)}>
                                <img src={img2} alt="icon" style={{width:"30px"}} />
                                </div>
                                <div className={style.delete} onClick={()=>deletee(index)}>
                                    <img src={img3} alt="icon" style={{width:"30px"}} />
                                </div>
                                {/* <div></div> */}
                                <img src={dataItem.pictureUrl} className="w-100" alt="Your Design" />
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )}
    </>
)}

        {modal && (
        (
            <div className={style.parent}>
                <div className={style.box}>
                    {data?.data?.map((slide, index) => (
                        <span key={index} style={{ '--i':`${index+1}`}}>
                            <img src={slide.pictureUrl} alt="Designs" />
                        </span>
                    ))}
                </div>
            </div>
        )
        )}
        </>
    );
};

export default MyDesign;


