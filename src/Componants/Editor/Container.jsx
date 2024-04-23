import { useContext } from "react"
import { ViewContext } from "../../Context/ViewContext"
import Design from '../DesignList/Design';
import Moveablee from "../DesignList/Moveable";

export default function Container(){
    let { textContent , iconContent, images ,shapeContent} =
        useContext(ViewContext);
    
    return (
      <>
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "25%",
            bottom: "20%",
            right: "20%",
            width: "50%",
            height: "70%",
          }}
        >
          <Moveablee
            font={textContent.font}
            color={textContent.color}
            textAlign={textContent.textAlign}
            resize={textContent.textAreaCont}
            colorBtn={iconContent.colorBtn} 
            svg={iconContent.svg}
            colorShapes={shapeContent.colorShapes}
            svgShapes={shapeContent.svgShapes}

            images={images}
          />
        </div>
      </>
    );
}
