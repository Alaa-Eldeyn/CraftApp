import Ai from "../../Assets/icons/magicpen.svg";
import Text from "../../Assets/icons/formkit_text.svg";
import Color from "../../Assets/icons/carbon_color-palette.svg";
import Shapes from "../../Assets/icons/ph_shapes.svg";
import Photos from "../../Assets/icons/pepicons-pencil_photo.svg";
import Icons from "../../Assets/icons/pet.svg";
import Designs from "../../Assets/icons/brush.svg";
import Similarity from "../../Assets/images/similarty.png"
import arrowLeft from "../../Assets/icons/arrow-left.svg";
import style from "./Editor.module.css";
import Tools from "./Tools";
import { useState } from "react";

const SideTaps = () => {
  const [currentTap, setCurrentTap] = useState("Ai");

  const [isTapOpenArrow, setIsTapOpenArrow] = useState(true);
  const [isTapOpenAi, setIsTapOpen] = useState(true);
  const [isTapOpenText, setIsTapOpenText] = useState(false);
  const [isTapOpenColor, setIsTapOpenColor] = useState(false);
  const [isTapOpenShapes, setIsTapOpenShapes] = useState(false);
  const [isTapOpenPhotos, setIsTapOpenPhotos] = useState(false);
  const [isTapOpenIcons, setIsTapOpenIcons] = useState(false);
  const [isTapOpenDesigns, setIsTapOpenDesigns] = useState(false);
  const [isTapOpenSimilar, setIsTapOpenSimilar] = useState(false);

  const data = [
    {
      id: 1,
      name: "Ai",
      icon: Ai,
      
    },
    {
      id: 2,
      name: "Text",
      icon: Text,
      
    },
    {
      id: 3,
      name: "Color",
      icon: Color,
      
    },
    {
      id: 4,
      name: "Shapes",
      icon: Shapes,
      
    },
    {
      id: 5,
      name: "Icons",
      icon: Icons,
    },
    {
      id: 6,
      name: "Photos",
      icon: Photos,
    },

    {
      id: 7,
      name: "My Designs",
      icon: Designs,
    },
    {
      id : 8,
      name : "Search for similar",
      icon : Similarity
    }
  ];

  return (
    <div 
      className={ 
        isTapOpenAi && 
        isTapOpenArrow && 
        isTapOpenColor===false && 
        isTapOpenText ===false  &&
        isTapOpenDesigns===false && 
        isTapOpenIcons ===false &&
        isTapOpenSimilar === false &&
        isTapOpenPhotos===false && 
        isTapOpenShapes ===false 
        ? `${style.responsive} position-relative d-flex  overflow-hidden px-1 pt-2 w-100 flex-grow-1 `  :

        isTapOpenAi===false &&
        isTapOpenSimilar === false &&
        isTapOpenColor && 
        isTapOpenArrow && 
        isTapOpenText ===false &&
        isTapOpenDesigns===false && 
        isTapOpenIcons ===false &&
        isTapOpenPhotos===false && 
        isTapOpenShapes ===false
        ? `${style.responsive} position-relative d-flex overflow-hidden px-1 pt-2 w-100 flex-grow-1 `:

        isTapOpenAi===false && 
        isTapOpenColor===false && 
        isTapOpenSimilar === false &&
        isTapOpenText && 
        isTapOpenArrow &&
        isTapOpenDesigns===false && 
        isTapOpenIcons ===false &&
        isTapOpenPhotos===false && 
        isTapOpenShapes ===false
        ? `${style.responsive} position-relative d-flex overflow-hidden px-1 pt-2 w-100 flex-grow-1 `:

        isTapOpenSimilar === false &&
        isTapOpenAi===false && 
        isTapOpenColor===false && 
        isTapOpenText ===false && 
        isTapOpenArrow &&
        isTapOpenDesigns && 
        isTapOpenIcons ===false &&
        isTapOpenPhotos===false && 
        isTapOpenShapes ===false
        ? `${style.responsive} position-relative d-flex overflow-hidden px-1 pt-2 w-100 flex-grow-1 `:

        isTapOpenAi===false && 
        isTapOpenColor===false && 
        isTapOpenText  ===false&& 
        isTapOpenDesigns===false && 
        isTapOpenSimilar === false &&
        isTapOpenIcons  &&
        isTapOpenArrow &&
        isTapOpenPhotos===false && 
        isTapOpenShapes ===false
        ? `${style.responsive} position-relative d-flex overflow-hidden px-1 pt-2 w-100 flex-grow-1 `:

        isTapOpenAi===false && 
        isTapOpenColor===false && 
        isTapOpenText ===false&& 
        isTapOpenDesigns===false && 
        isTapOpenIcons ===false &&
        isTapOpenSimilar === false &&
        isTapOpenPhotos && 
        isTapOpenArrow &&
        isTapOpenShapes ===false
        ? `${style.responsive} position-relative d-flex overflow-hidden px-1 pt-2 w-100 flex-grow-1 `:

        isTapOpenAi===false && 
        isTapOpenColor===false && 
        isTapOpenText ===false&& 
        isTapOpenDesigns===false && 
        isTapOpenIcons ===false &&
        isTapOpenPhotos===false && 
        isTapOpenSimilar === false &&
        isTapOpenArrow &&
        isTapOpenShapes 
        ? `${style.responsive} position-relative d-flex overflow-hidden px-1 pt-2 w-100 flex-grow-1 `: 
      
        isTapOpenAi===false && 
        isTapOpenColor===false && 
        isTapOpenText ===false&& 
        isTapOpenDesigns===false && 
        isTapOpenIcons ===false &&
        isTapOpenPhotos===false && 
        isTapOpenArrow &&
        isTapOpenShapes === false &&
        isTapOpenSimilar
        ? `${style.responsive} position-relative d-flex overflow-hidden px-1 pt-2 w-100 flex-grow-1 `: 
      
        `${style.responsive2} position-relative d-flex overflow-hidden px-1 pt-2 w-100 flex-grow-1 `}

    >
      <ul
        style={{ height: "100%" }}
        className="nav nav-pills  nav-fill flex-column  align-items-center "
      >
        {data.map((item) => (
          
          <li
            key={item.id}
            style={{ width: "140px", userSelect: "none" , transition: "all 0.5s",}}
            onClick={() => {
              setCurrentTap(item.name);
              if( 'Ai' === currentTap){
                setIsTapOpenArrow(true)
                setIsTapOpen(true);
                setIsTapOpenText(false)
                setIsTapOpenColor(false)
                setIsTapOpenDesigns(false);
                setIsTapOpenIcons(false)
                setIsTapOpenPhotos(false)
                setIsTapOpenShapes(false)
                setIsTapOpenSimilar(false)
                
              }else if( 'Text' === currentTap){
                setIsTapOpenArrow(true)
                setIsTapOpen(false);
                setIsTapOpenText(true)
                setIsTapOpenColor(false)
                setIsTapOpenDesigns(false);
                setIsTapOpenIcons(false)
                setIsTapOpenPhotos(false)
                setIsTapOpenShapes(false)
                setIsTapOpenSimilar(false)
                
              }
              else if( 'Color' === currentTap){
                setIsTapOpenArrow(true)
                setIsTapOpen(false);
                setIsTapOpenText(false)
                setIsTapOpenColor(true)
                setIsTapOpenDesigns(false);
                setIsTapOpenIcons(false)
                setIsTapOpenPhotos(false)
                setIsTapOpenShapes(false)
                setIsTapOpenSimilar(false)
                
              }
              else if( 'My Designs' === currentTap){
                setIsTapOpenArrow(true)
                setIsTapOpen(false);
                setIsTapOpenText(false)
                setIsTapOpenColor(false)
                setIsTapOpenDesigns(true);
                setIsTapOpenIcons(false)
                setIsTapOpenPhotos(false)
                setIsTapOpenShapes(false)
                setIsTapOpenSimilar(false)
                
              }
              else if( 'Icons' === currentTap){
                setIsTapOpenArrow(true)
                setIsTapOpen(false);
                setIsTapOpenText(false)
                setIsTapOpenColor(false)
                setIsTapOpenDesigns(false);
                setIsTapOpenIcons(true)
                setIsTapOpenPhotos(false)
                setIsTapOpenShapes(false)
                setIsTapOpenSimilar(false)
                
              }
              else if( 'Photos' === currentTap){
                setIsTapOpenArrow(true)
                setIsTapOpen(false);
                setIsTapOpenText(false)
                setIsTapOpenColor(false)
                setIsTapOpenDesigns(false);
                setIsTapOpenIcons(false)
                setIsTapOpenPhotos(true)
                setIsTapOpenShapes(false)
                setIsTapOpenSimilar(false)
                
              }
              
              else if( 'Shapes' === currentTap){
                setIsTapOpenArrow(true)
                setIsTapOpen(false);
                setIsTapOpenText(false)
                setIsTapOpenColor(false)
                setIsTapOpenDesigns(false);
                setIsTapOpenIcons(false)
                setIsTapOpenPhotos(false)
                setIsTapOpenShapes(true)
                setIsTapOpenSimilar(false)
                
              }
              else if( 'Search for similar' === currentTap){
                setIsTapOpenArrow(true)
                setIsTapOpen(false);
                setIsTapOpenText(false)
                setIsTapOpenColor(false)
                setIsTapOpenDesigns(false);
                setIsTapOpenIcons(false)
                setIsTapOpenPhotos(false)
                setIsTapOpenShapes(false)
                setIsTapOpenSimilar(true)
                
              }
            }}

            className={`nav-item cursor flex-column d-flex align-items-center justify-content-center p-2 z-1  ${
              item.name === currentTap ? `${style.tapActive}` : ""
            }`
          }
          >
            <img src={item.icon} alt="icon" style={{ width: " 30px" }} />
            <p className="mb-0">{item.name}</p>
          </li>
        ))}
      </ul>
      
      <div
        className={`${style.box} w-100  rounded-end p-4 overflow-hidden`}
        
      >

        {/* الشكل لكل تصميم */}
        <Tools content={currentTap} />
      </div>

      {/* Arrow */}
      <div
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          right: isTapOpenArrow ? "15px" : "0px",
        }}
        className={` position-absolute cursor z-2  ${style.none}`}
        onClick={() => setIsTapOpenArrow(!isTapOpenArrow)}
      >
        <img
          src={arrowLeft}
          alt="left Arrow"
          style={{ transform: isTapOpenArrow ? "rotate(180deg)" : "" }}
        />
      </div> 
      
    </div>
  );
};

export default SideTaps;
