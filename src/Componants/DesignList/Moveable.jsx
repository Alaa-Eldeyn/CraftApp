import React, { useContext, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import { ViewContext } from "../../Context/ViewContext";
import style from "../Editor/tools/Ai.module.css";
import Moveable from "react-moveable";

const Moveablee = () => {
  let { textContent } = useContext(ViewContext);

  return (
    <div style={{ overflow: "hidden" }}>
      {textContent.map((item, index) => {
        return (
          <>
            <div
              className={`m-0 target ${item.textAlign} ${item.font}
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
                color: `${item.color}`,
                transform: item.transform,
                width: `${item.width}px`,
                height: `${item.height}px`,
              }}
            >
              {item.textAreaCont}
            </div>

            <Moveable
              target={`.target:nth-child(${index + 1})`}
              draggable={true}
              resizable={true}
              edgeDraggable={true}
              edge={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
              scalable={true}
              throttleResize={1}
              renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
              rotatable={true}
              snappable={true}
              snapCenter={true}
              rotationPosition={"center"}
              onRotateStart={(e) => {
                e.setFixedDirection([0, 0]);
              }}
              onRotate={(e) => {
                e.target.style.transform = e.drag.transform;
              }}
              onRender={(e) => {
                e.target.style.cssText += e.cssText;
              }}
              onDrag={(e) => {
                e.target.style.transform = e.transform;
              }}
              onResize={(e) => {
                e.target.style.width = `${e.width}px`;
                e.target.style.height = `${e.height}px`;
                e.target.style.transform = e.drag.transform;
              }}
              onScaleStart={(e) => {
                e.setMinScaleSize([10, 10]);
                e.setMaxScaleSize([30, 30]);
              }}
            />
          </>
        );
      })}
    </div>
  );
};

export default Moveablee;
