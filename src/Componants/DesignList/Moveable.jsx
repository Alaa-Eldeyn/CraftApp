import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ViewContext } from "../../Context/ViewContext";
import style from "../Editor/tools/Ai.module.css";
import Moveable from "react-moveable";

const Moveablee = () => {
  const targetRef = useRef(null);
  const moveableRef = useRef(null);
  let { textContent , iconContent , shapeContent ,images} = useContext(ViewContext);

  
  const styles = {
    SvgColor: {
      svg: {
        path: {
          fill: "#fff",
        },
      },
    },
  };
  return (
    <>
      <div
        className="snapContainer"
        style={{
          position: "relative",
          border: "1px solid #ccc",
          width: "100%",
          height: "100%",
          transform: "scale(0.7, 0.7)",
        }}
      >

        {images.map((image, index) => {
          return (
            <>
              <div
                ref={targetRef}
                className={`m-0 position-absolute target target${index+1} `}
                style={{
                  transform: "translate(0px, 0px) rotate(0deg) scale(1, 1)",
                  color: `${image.color}`,
                  width:'150px',
                  height:'150px',
                  fontWeight: "900",
                  cursor: "move",
                  userSelect: "none",
                }}
              >
              <img
                  src={image.url}
                  alt={image.name}
                  className={`w-100 h-100 d-block`}
                  />
              </div>

              <Moveable
                ref={moveableRef}
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
                snapContainer={".snapContainer"}
                bounds={{
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  position: "css",
                }}
                target={".target"}
                individualGroupable={true}
                draggable={true}
                throttleDrag={1}
                edgeDraggable={false}
                startDragRotate={0}
                throttleDragRotate={0}
                scalable={true}
                keepRatio={true}
                throttleScale={0}
                renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
                rotatable={true}
                throttleRotate={0}
                rotationPosition={"top"}
                originDraggable={true}
                originRelative={true}
                onScaleStart={(e) => {
                  e.setMinScaleSize([10, 10]);
                  e.setMaxScaleSize([240, 240]);
                }}
                onDragOrigin={(e) => {
                  e.target.style.transformOrigin = e.transformOrigin;
                }}
                onRender={(e) => {
                  e.target.style.transform = e.transform;
                }}
                onDrag={(e) => {
                  e.target.style.transform = e.transform;
                }}
                onScale={(e) => {
                  e.target.style.transform = e.drag.transform;
                }}
                onRotate={(e) => {
                  e.target.style.transform = e.drag.transform;
                }}
              />
            </>
          );
        })}

        {shapeContent.map((shape, index) => {
          const newSvgg = shape.svgShapes.replace(
            /fill=".*?"/g,
            `fill="${shape.colorShapes}"`
          );
          return (
            <>
              <div
                ref={targetRef}
                className={`m-0 position-absolute target target${index+1} `}
                style={{
                  transform: "translate(0px, 0px) rotate(0deg) scale(1, 1)",
                  color: `${shape.color}`,
                  width: `${shape.width}px`,
                  height: `${shape.height}px`,
                  fontWeight: "900",
                  cursor: "move",
                  userSelect: "none",
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

              <Moveable
                ref={moveableRef}
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
                snapContainer={".snapContainer"}
                bounds={{
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  position: "css",
                }}
                target={".target"}
                individualGroupable={true}
                draggable={true}
                throttleDrag={1}
                edgeDraggable={false}
                startDragRotate={0}
                throttleDragRotate={0}
                scalable={true}
                keepRatio={true}
                throttleScale={0}
                renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
                rotatable={true}
                throttleRotate={0}
                rotationPosition={"top"}
                originDraggable={true}
                originRelative={true}
                onScaleStart={(e) => {
                  e.setMinScaleSize([10, 10]);
                  e.setMaxScaleSize([240, 240]);
                }}
                onDragOrigin={(e) => {
                  e.target.style.transformOrigin = e.transformOrigin;
                }}
                onRender={(e) => {
                  e.target.style.transform = e.transform;
                }}
                onDrag={(e) => {
                  e.target.style.transform = e.transform;
                }}
                onScale={(e) => {
                  e.target.style.transform = e.drag.transform;
                }}
                onRotate={(e) => {
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
                className={`m-0 position-absolute target target${index+1} `}
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
                  cursor: "pointer",
                  ...styles,
                }}
                dangerouslySetInnerHTML={{ __html: newSvg || "" }}
                // اريد تلونها
              ></div>
              </div>

              <Moveable
                ref={moveableRef}
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
                snapContainer={".snapContainer"}
                bounds={{
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  position: "css",
                }}
                target={".target"}
                individualGroupable={true}
                draggable={true}
                throttleDrag={1}
                edgeDraggable={false}
                startDragRotate={0}
                throttleDragRotate={0}
                scalable={true}
                keepRatio={true}
                throttleScale={0}
                renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
                rotatable={true}
                throttleRotate={0}
                rotationPosition={"top"}
                originDraggable={true}
                originRelative={true}
                onScaleStart={(e) => {
                  e.setMinScaleSize([10, 10]);
                  e.setMaxScaleSize([240, 240]);
                }}
                onDragOrigin={(e) => {
                  e.target.style.transformOrigin = e.transformOrigin;
                }}
                onRender={(e) => {
                  e.target.style.transform = e.transform;
                }}
                onDrag={(e) => {
                  e.target.style.transform = e.transform;
                }}
                onScale={(e) => {
                  e.target.style.transform = e.drag.transform;
                }}
                onRotate={(e) => {
                  e.target.style.transform = e.drag.transform;
                }}
              />
            </>
          );
        })}

        {textContent.map((item, index) => {
          return (
            <>
              <div
                ref={targetRef}
                className={`m-0 position-absolute target target${index+1} ${
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
                  width: `${item.width}px`,
                  height: `${item.height}px`,
                  fontWeight: "900",
                  cursor: "move",
                  userSelect: "none",
                }}
              >
                {item.textAreaCont}
              </div>

              <Moveable
                ref={moveableRef}
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
                snapContainer={".snapContainer"}
                bounds={{
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  position: "css",
                }}
                target={".target"}
                individualGroupable={true}
                draggable={true}
                throttleDrag={1}
                edgeDraggable={false}
                startDragRotate={0}
                throttleDragRotate={0}
                scalable={true}
                keepRatio={false}
                throttleScale={0}
                renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
                rotatable={true}
                throttleRotate={0}
                rotationPosition={"top"}
                originDraggable={true}
                originRelative={true}
                onScaleStart={(e) => {
                  e.setMinScaleSize([10, 10]);
                  e.setMaxScaleSize([240, 240]);
                }}
                onDragOrigin={(e) => {
                  e.target.style.transformOrigin = e.transformOrigin;
                }}
                onRender={(e) => {
                  e.target.style.transform = e.transform;
                }}
                onDrag={(e) => {
                  e.target.style.transform = e.transform;
                }}
                onScale={(e) => {
                  e.target.style.transform = e.drag.transform;
                }}
                onRotate={(e) => {
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
