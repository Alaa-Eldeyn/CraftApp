
import style from './MyDesign.module.css'
import { userToken } from "../../../Context/TokenContext";
import React, { useContext } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
// import style from './MyDesign.module.css';

const MyDesign = () => {
    let { token } = useContext(userToken);

    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    };

    function getDesigns() {
        return axios.get('http://customcrafttt.somee.com/api/SavedDesign/GetDesigns', { headers });
    }

    let { data, isLoading } = useQuery('Design', getDesigns, {
        refetchOnMount: false,
        // refetchInterval: 3000
    });

    // console.log(data); // للتحقق من البيانات المستلمة

    return (
        <>
            {isLoading ? (
                <div
                    className="position-fixed w-100 h-100 top-0 bottom-0 justify-content-center align-items-center"
                    style={{ backgroundColor: 'rgba(49, 49, 49, 0.415)' }}
                >
                    <span className="loader"></span>
                </div>
            ) : (
                <div className={style.parent}>
                    <div className={style.box}>
                        {data?.data?.map((slide, index) => (
                            <span key={index} style={{ '--i':`${index+1}`}}>
                                <img src={slide.pictureUrl} alt="Designs" />
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default MyDesign;


