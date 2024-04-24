import { createContext, useState } from "react";

export let ViewContext = createContext();

export default function ViewContextProvider(props) {
  const [textAlign, setTextAlign] = useState("text-start");
  const [font, setFont] = useState("Roboto");
  const [color, setColor] = useState("#5B8F9A");
  const [resize, setResize] = useState("");
  const [textContent, setTextContent] = useState([]);
  const [iconContent, setIconContent] = useState([]);
  const [shapeContent, setShapeContent] = useState([]);

  const [ click , setClick] = useState(true)
  const [ hide , setHide] = useState (true)

  const [colorBtn, setColorBtn] = useState("#5B8F9A");
  const [id, setId] = useState(1);
  const [svg, setSVG] = useState(``);

  const [colorShapes, setColorShapes] = useState("#5B8F9A");
  const [idShapes, setIdShapes] = useState(1);
  const [svgShapes, setSVGShapes] = useState(``);

  const [images, setImages] = useState([]);
  return (
    <ViewContext.Provider
      value={{
        hide,
        setHide,
        setTextContent,
        setIconContent,
        setShapeContent,
        click,
        setClick,
        textAlign,
        setTextAlign,
        resize,
        setResize,
        font,
        setFont,
        color,
        setColor,
        colorBtn,
        setColorBtn,
        id,
        setId,
        svg,
        setSVG,
        colorShapes,
        setColorShapes,
        idShapes,
        setIdShapes,
        svgShapes,
        setSVGShapes,
        images,
        setImages,
        textContent,
        iconContent ,
        shapeContent
      }}
    >
      {props.children}
    </ViewContext.Provider>
  );
}
