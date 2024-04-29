import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { slides } from "./Date";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Download, Fullscreen, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import Images from './Images';

const MyDesign = () => {

    const [index, setIndex] = useState(-1);
    return (<>
        <Images
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
        />

    <Lightbox  
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides} 
        plugins={[Download , Fullscreen , Zoom , Thumbnails]}
    />
    </>)
    }

export default MyDesign;

