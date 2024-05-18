import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Download, Fullscreen, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import Images from './Images';
import axios from "axios";
import { useQuery } from "react-query";
import { useContext } from "react";
import { ViewContext } from "../../../Context/ViewContext";
import { userToken } from "../../../Context/TokenContext";

const MyDesign = () => {
    let {token}= useContext(userToken)

    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
    function getDesigns() {
        return axios.get(`http://customcrafttt.somee.com/api/SavedDesign/GetDesigns` , {headers})
        
    }
    
    let {data  , isLoading } = useQuery('Designs', getDesigns , {
        refetchOnMount:false,
        refetchInterval: 3000
    })

    let {setSlide , slide} = useContext(ViewContext)
    setSlide(data?.data)

    // const slides = [
    //     { src: slide[2]?.pictureUrl },
    //     { src: slide[1]?.pictureUrl },
    //     // ... add other slides
    // ];
    const [index, setIndex] = useState(-1);
    return (<>
        {isLoading ? <div className="position-fixed w-100 h-100 top-0 bottom-0 justify-content-center align-items-center" 
        style={{backgroundColor:"rgba(49, 49, 49, 0.415)"}}>
        <span class="loader"></span></div>
        : 
        <>
        <Images
        data={data?.data}
        onClick={(currentIndex) => setIndex(currentIndex)}
        />

        <Lightbox  
            index={index}
            open={index >= 0}
            close={() => setIndex(-1)}
            // slides={slides} 
            plugins={[Download , Fullscreen ,Zoom , Thumbnails]}
        />
        </>
        }
    </>)
    }

export default MyDesign;

