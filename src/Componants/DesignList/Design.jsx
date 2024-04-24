import React, { useContext, useState } from "react";
import { Rnd } from "react-rnd";
import { ViewContext } from "../../Context/ViewContext";
import style from "../Editor/tools/Ai.module.css";
const Design = () => {
  let { textContent, iconContent,images ,shapeContent} = useContext(ViewContext);
  const [fontSize, setFontSize] = useState("24px");

  const styles = {
    SvgColor: {
      svg: {
        path: {
          fill: "#fff",
        },
      },
    },
  };

  const [childDimensions, setChildDimensions] = useState({
    width: 150,
    height: 100,
  });

  const [childOldDimensions, setChildOldDimensions] = useState({
    width: 150,
    height: 100,
  });

  const handleResizeStart = (e, dir, ref, delta, position) => {
    setChildOldDimensions(childDimensions);
  };

  const handleResize = (e, dir, ref, delta, position) => {
    const newSize = childOldDimensions.width + delta.width;
    const newHeight = childOldDimensions.height + delta.height;
    setChildDimensions({
      width: newSize,
      height: newHeight,
    });

    setFontSize(`${newSize / 7}px`);
  };
  const handleImgResize = (e, dir, ref, delta, position) => {
    const newSize = e.offsetX;
    const newHeight = e.offsetY;
    setChildDimensions({
      width: newSize,
      height: newHeight,
    });
  };
  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>

      {textContent.map((item, index) => {
        return (
          <Rnd
            bounds="parent"
            minWidth={100}
            minHeight={120}
            onResizeStart={handleResizeStart}
            onResize={handleResize}
          >
            <div
              style={{
                width: childDimensions.width,
                height: childDimensions.height,
                fontSize: fontSize,
                desplay: "flex",
                margin: "auto",
              }}
            >
              <pre
                className={`m-0  ${item.textAlign} ${item.font} 
        ${
          item.font === "Vibes"
            ? style.vibes
            : item.font === "Rakkas"
            ? style.rakkas
            : item.font === "Caveat"
            ? style.Caveat
            : item.font === "Ojuju"
            ? style.ojuju
            : item.font === "Shadows Into Light"
            ? style.shadows
            : item.font === "Dancing Script"
            ? style.dancing
            : item.font === "Noto Nastaliq Urdu"
            ? style.amiri
            : item.font === "Amiri"
            ? style.amiri
            : item.font === "Cairo"
            ? style.Cairo
            : style.roboto
        }`}
                placeholder="Type here"
                style={{
                  color: `${item.color}`,
                  fontWeight: "900",
                  overflow: "none",
                }}
              >
                {item.textAreaCont}
              </pre>
            </div>
          </Rnd>
        );
      })}

      {iconContent.map((icon, index) => {
        const newSvg = icon.svg.replace(
          /fill=".*?"/g,
          `fill="${icon.colorBtn}"`
        );
        return (
          <Rnd
            bounds="parent"
            minWidth={100}
            minHeight={120}
            onResizeStart={handleResizeStart}
            onResize={handleResize}
          >
            <div
              style={{
                width: childDimensions.width,
                height: childDimensions.height,
                fontSize: fontSize,
                desplay: "flex",
                margin: "auto",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  cursor: "pointer",
                  ...styles,
                }}
                dangerouslySetInnerHTML={{ __html: newSvg || "" }}
                // اريد تلونها
              ></div>
            </div>
          </Rnd>
        );
      })}

      {shapeContent.map((icon, index) => {
        const newSvgg = icon.svgShapes.replace(
          /fill=".*?"/g,
          `fill="${icon.colorShapes}"`
        );
        return (
          <Rnd
            bounds="parent"
            minWidth={100}
            minHeight={120}
            onResizeStart={handleResizeStart}
            onResize={handleResize}
          >
            <div
              style={{
                width: childDimensions.width,
                height: childDimensions.height,
                fontSize: fontSize,
                desplay: "flex",
                margin: "auto",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  cursor: "pointer",
                  ...styles,
                }}
                dangerouslySetInnerHTML={{ __html: newSvgg || "" }}
                // اريد تلونها
              ></div>
            </div>
          </Rnd>
        );
      })}
      
      <div className="w-50 h-25">
        {images.map((image, index) => {
          return (
            <Rnd
              bounds="parent"
              minWidth={100}
              minHeight={120}
              onResizeStart={handleResizeStart}
              onResize={handleImgResize}
              style={{
                width: childDimensions.width,
                height: childDimensions.height,
                zIndex: 20,
              }}
            >
              <div
                style={{
                  width: childDimensions.width,
                  height: childDimensions.height,
                  fontSize: fontSize,
                  display: "flex",
                  margin: "auto",
                  zIndex: 1,
                }}
              >
                <img
                  src={image.url}
                  alt={image.name}
                  style={{
                    width: childDimensions.width,
                    height: childDimensions.height,
                  }}
                />
              </div>
            </Rnd>
          );
        })}
      </div>
    </div>
  );
};

export default Design;
