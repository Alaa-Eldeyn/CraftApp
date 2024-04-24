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
            inset: "55px 80px 80px 80px",
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
