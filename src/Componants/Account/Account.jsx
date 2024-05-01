import download from 'downloadjs';
import {toPng} from 'html-to-image';
import { useRef } from 'react';

const CanvasComponent = () => {
    const contentRef = useRef(null);
    
    const handleCapture = ()=> {
        const node = contentRef.current;
        
        toPng(contentRef.current, { cacheBust: true, height: 500})
        
        .then(dataUrl => {
        
        console.log("Captured image:", dataUrl);

        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href=dataUrl;
        link.click(); 
        })

        .catch(error => {
        console.error("Error capturing screenshot:", error);
    }
);

};

return (

    <div>
        <div ref={contentRef}>
            <p>This is a paragraph.</p>
            
            <p>This is another paragraph.</p>
        </div>

        <button onClick={handleCapture}> Capture Screenshot</button>
    </div>
);
}


export default CanvasComponent;
