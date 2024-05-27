import React, { useContext, useRef } from "react";
import { ViewContext } from "../../Context/ViewContext";
import style from "../Editor/tools/Ai.module.css";
import Moveable from "react-moveable";

const Moveablee = () => {
  const targetRef = useRef(null);
  const moveableRef = useRef(null);
  const saveRef = useRef(null);
  let {ai, textContent, iconContent, shapeContent,  images ,junk } = useContext(ViewContext);

  return (
    <>
      <div
        ref={saveRef}
        className='snapContainer'
        style={{
          position: "relative",
          width: "100%",
          height: "120%",
          transform: "scale(0.7, 0.7)",
        }}
      >
        {shapeContent.map((shape, index) => {
          const newSvgg = shape.svgShapes.replace(
            /fill=".*?"/g,
            `fill="${shape.colorShapes}"`
          );
          return (
            <>
              <div
              
                ref={targetRef}
                className={`m-0 position-absolute target target${index + 1} `}
                style={{
                  transform: "translate(0px, 0px) rotate(0deg) scale(1, 1)",
                  color: `${shape.color}`,
                  cursor: "move",
                  userSelect: "none",
                }}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: newSvgg || "" }}
                >
                </div>
              </div>

              <Moveable
                ref={moveableRef}
                snapContainer={".snapContainer"}
                snappable={true}
                snapDirections={{
                  top: true,
                  left: true,
                  bottom: true,
                  right: true,
                }}
                elementSnapDirections={true}
                snapThreshold={true}
                verticalGuidelines={[50, 150, 250, 450, 550]}
                horizontalGuidelines={[0, 100, 200, 400, 500]}
                bounds={{
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  position: "css",
                }}
                hideDefaultLines={true}
                origin={false}

                    target={".target"}
                    individualGroupable={true}
                    draggable={true}
                    throttleDrag={1}
                    edgeDraggable={false}
                    startDragRotate={0}
                    throttleDragRotate={0}
                    rotatable={junk ? false : true}
                    scalable={junk ? false : true}
                    keepRatio={false}
                    throttleScale={0}
                    renderDirections={["nw","n","ne","w","e","sw","s","se"]}
                    throttleRotate={0}
                    rotationPosition={"top"}
                    onDrag={e => {
                        e.target.style.transform = e.transform;
                    }}
                    onScale={e => {
                        e.target.style.transform = e.drag.transform;
                    }}
                    onRotate={e => {
                        e.target.style.transform = e.drag.transform;
                }}
                />
            </>
          );
        })}

        {iconContent.map((icon, index) => {
          const newSvg = icon.svg.replace(
            /fill=".*?"/g,
            `fill="${icon.colorBtn}"`
          );
          return (
            <>
              <div
                ref={targetRef}
                className={`m-0 position-absolute target target${index + 1} `}
                style={{
                  transform: "translate(0px, 0px) rotate(0deg) scale(1, 1)",
                  color: `${icon.color}`,
                  width: `${icon.width}px`,
                  height: `${icon.height}px`,
                  fontWeight: "900",
                  cursor: "move",
                  userSelect: "none",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                  }}
                  dangerouslySetInnerHTML={{ __html: newSvg || "" }}
                  // اريد تلونها
                ></div>
              </div>

              <Moveable
                ref={moveableRef}
                snapContainer={".snapContainer"}
                snappable={true}
                snapDirections={{
                  top: true,
                  left: true,
                  bottom: true,
                  right: true,
                }}
                elementSnapDirections={true}
                snapThreshold={true}
                verticalGuidelines={[50, 150, 250, 450, 550]}
                horizontalGuidelines={[0, 100, 200, 400, 500]}
                bounds={{
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  position: "css",
                }}
                hideDefaultLines={true}
                origin={false}

                    target={".target"}
                    individualGroupable={true}
                    draggable={true}
                    throttleDrag={1}
                    edgeDraggable={false}
                    startDragRotate={0}
                    throttleDragRotate={0}
                    rotatable={junk ? false : true}
                    scalable={junk ? false : true}
                    keepRatio={false}
                    throttleScale={0}
                    renderDirections={["nw","n","ne","w","e","sw","s","se"]}
                    throttleRotate={0}
                    rotationPosition={"top"}
                    onDrag={e => {
                        e.target.style.transform = e.transform;
                    }}
                    onScale={e => {
                        e.target.style.transform = e.drag.transform;
                    }}
                    onRotate={e => {
                        e.target.style.transform = e.drag.transform;
                }}
                />
            </>
          );
        })}

        {ai.map((imageAi, index) => {
          return (
            <>
              <div
                ref={targetRef}
                key={index}
                className={`m-0 position-absolute target  `}
                style={{
                  transform: "translate(0px, 0px) rotate(0deg) scale(1, 1)",
                  width: "150px",
                  height: "150px",
                  fontWeight: "900",
                  cursor: "move",
                  userSelect: "none",
                }}
              >
                <img
                  src={`data:image/png;base64,${imageAi.imageData}`}
                  alt="ai"
                  className={`w-100 h-100 `}
                />
              </div>

              <Moveable
                ref={moveableRef}
                snapContainer={".snapContainer"}
                snappable={true}
                snapDirections={{
                  top: true,
                  left: true,
                  bottom: true,
                  right: true,
                }}
                elementSnapDirections={true}
                snapThreshold={true}
                verticalGuidelines={[50, 150, 250, 450, 550]}
                horizontalGuidelines={[0, 100, 200, 400, 500]}
                bounds={{
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  position: "css",
                }}
                hideDefaultLines={true}
                origin={false}

                    target={".target"}
                    individualGroupable={true}
                    draggable={true}
                    throttleDrag={1}
                    edgeDraggable={false}
                    startDragRotate={0}
                    throttleDragRotate={0}
                    rotatable={junk ? false : true}
                    scalable={junk ? false : true}
                    keepRatio={false}
                    throttleScale={0}
                    renderDirections={["nw","n","ne","w","e","sw","s","se"]}
                    throttleRotate={0}
                    rotationPosition={"top"}
                    onDrag={e => {
                        e.target.style.transform = e.transform;
                    }}
                    onScale={e => {
                        e.target.style.transform = e.drag.transform;
                    }}
                    onRotate={e => {
                        e.target.style.transform = e.drag.transform;
                }}
                />
            </>
          );
        })}

        {images.map((image, index) => {
          return (
            <>
              <div
                ref={targetRef}
                key={index}
                className={`m-0 position-absolute target  `}
                style={{
                  transform: "translate(0px, 0px) rotate(0deg) scale(1, 1)",
                  width: "150px",
                  height: "150px",
                  cursor: "move",
                  userSelect: "none",
                }}
              >
                <img
                  src={image.url}
                  alt={image.name}
                  className={`w-100 h-100 `}
                />
              </div>

              <Moveable
                ref={moveableRef}
                snapContainer={".snapContainer"}
                snappable={true}
                snapDirections={{
                  top: true,
                  left: true,
                  bottom: true,
                  right: true,
                }}
                elementSnapDirections={true}
                snapThreshold={true}
                verticalGuidelines={[50, 150, 250, 450, 550]}
                horizontalGuidelines={[0, 100, 200, 400, 500]}
                bounds={{
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  position: "css",
                }}
                hideDefaultLines={true}
                origin={false}

                    target={".target"}
                    individualGroupable={true}
                    draggable={true}
                    throttleDrag={1}
                    edgeDraggable={false}
                    startDragRotate={0}
                    throttleDragRotate={0}
                    rotatable={junk ? false : true}
                    scalable={junk ? false : true}
                    keepRatio={false}
                    throttleScale={0}
                    renderDirections={["nw","n","ne","w","e","sw","s","se"]}
                    throttleRotate={0}
                    rotationPosition={"top"}
                    onDrag={e => {
                        e.target.style.transform = e.transform;
                    }}
                    onScale={e => {
                        e.target.style.transform = e.drag.transform;
                    }}
                    onRotate={e => {
                        e.target.style.transform = e.drag.transform;
                }}
                />
            </>
          );
        })}

        {textContent.map((item, index) => {
          return (
            <>
              <pre
                ref={targetRef}
                className={`m-0 position-absolute target target${index + 1} ${
                  item.textAlign
                } ${item.font}
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
                style={{
                  transform: "translate(0px, 0px) rotate(0deg) scale(1, 1)",
                  color: `${item.color}`,
                  fontWeight: "900",
                  cursor: "move",
                  userSelect: "none",
                }}
              >
                {item.textAreaCont}
              </pre>

              <Moveable
                ref={moveableRef}
                snapContainer={".snapContainer"}
                snappable={true}
                snapDirections={{
                  top: true,
                  left: true,
                  bottom: true,
                  right: true,
                }}
                elementSnapDirections={true}
                snapThreshold={true}
                verticalGuidelines={[50, 150, 250, 450, 550]}
                horizontalGuidelines={[0, 100, 200, 400, 500]}
                bounds={{
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  position: "css",
                }}
                hideDefaultLines={true}
                origin={false}

                    target={".target"}
                    individualGroupable={true}
                    draggable={true}
                    throttleDrag={1}
                    edgeDraggable={false}
                    startDragRotate={0}
                    throttleDragRotate={0}
                    rotatable={junk ? false : true}
                    scalable={junk ? false : true}
                    keepRatio={false}
                    throttleScale={0}
                    renderDirections={["nw","n","ne","w","e","sw","s","se"]}
                    throttleRotate={0}
                    rotationPosition={"top"}
                    onDrag={e => {
                        e.target.style.transform = e.transform;
                    }}
                    onScale={e => {
                        e.target.style.transform = e.drag.transform;
                    }}
                    onRotate={e => {
                        e.target.style.transform = e.drag.transform;
                }}
                />
            </>
          );
        })}
        
      </div>
    </>
  );
};

export default Moveablee;
