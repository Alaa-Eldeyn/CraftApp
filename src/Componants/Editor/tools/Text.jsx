import { ViewContext } from "../../../Context/ViewContext";
import style from "./Ai.module.css";
import { useContext, useState } from "react";

const Text = () => {
  let {
    textAlign,
    setTextAlign,
    font,
    setFont,
    color,
    setColor,
    textContent,
    setTextContent,
  } = useContext(ViewContext);

  const [textAreaCont, setTextAreaCont] = useState("");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleChange2 = (e) => {
    setFont(e.target.value);
  };
  const addNote = () => {
    let note = {
      id: Date.now(),
      textAlign: textAlign,
      font: font,
      color: color,
      textAreaCont: textAreaCont,
    };
    const newTextContent = textContent.concat(note);
    setTextContent(newTextContent);
  };

  return (
    <>
      <p className={style.text}>Add New Text</p>
      <textarea
        className={`${style.area} ${textAlign} ${font} 
        ${
          font === "Vibes"
            ? style.vibes
            : font === "Rakkas"
            ? style.rakkas
            : font === "Caveat"
            ? style.Caveat
            : font === "Ojuju"
            ? style.ojuju
            : font === "Shadows Into Light"
            ? style.shadows
            : font === "Dancing Script"
            ? style.dancing
            : font === "Noto Nastaliq Urdu"
            ? style.amiri
            : font === "Amiri"
            ? style.amiri
            : font === "Cairo"
            ? style.Cairo
            : style.roboto
        }`}
        placeholder="Type here"
        style={{ color: `${color}` }}
        value={textAreaCont}
        onChange={(e) => setTextAreaCont(e.target.value)}
      >
      </textarea>
      <p className={` ${style.text} mt-2`}>Text Style</p>

      <select
        onChange={handleChange2}
        name="choose"
        className="w-100 btnnn text-start rounded-3  "
      >
        <optgroup label="English Font">
          <option value="Roboto" defaultChecked>
            Normal
          </option>
          <option value="Vibes">Vibes</option>
          <option value="Rakkas">Rakkas</option>
          <option value="Caveat">Caveat</option>
          <option value="Ojuju">Ojuju</option>
          <option value="Shadows Into Light">Shadows Into Light</option>
          <option value="Dancing Script">Dancing Script</option>
        </optgroup>
        <optgroup label="Arabic Font">
          <option value="Noto Nastaliq Urdu">Noto Nastaliq Urdu</option>
          <option value="Amiri">Amiri</option>
          <option value="Cairo">Cairo</option>
        </optgroup>
      </select>

      <p className={` ${style.text} mt-2 `}>Horizontal Alignment</p>

      <div className="bg-secondary-subtle d-flex justify-content-between align-items-center py-2  rounded-3 mb-2">
        <div
          className={
            textAlign === "text-start"
              ? " mainColor  cursor flex-grow-1 text-center"
              : "cursor flex-grow-1 text-center"
          }
          onClick={() => setTextAlign("text-start")}
        >
          <i className="fa-solid fa-align-left"></i>
        </div>
        <div
          className={
            textAlign === "text-center"
              ? "mainColor cursor flex-grow-1 text-center"
              : "cursor flex-grow-1 text-center"
          }
          onClick={() => setTextAlign("text-center")}
        >
          <i className="fa-solid fa-align-justify"></i>
        </div>
        <div
          className={
            textAlign === "text-end"
              ? " mainColor cursor flex-grow-1 text-center"
              : "cursor flex-grow-1 text-center"
          }
          onClick={() => setTextAlign("text-end")}
        >
          <i className="fa-solid fa-align-right"></i>
        </div>
      </div>

      <label htmlFor="color" className={` ${style.text}  mb-2`}>
        Text Color
      </label>
      <div className="w-100">
        <input
          type="color"
          name="color"
          id="color"
          onChange={handleChange}
          value={color}
          className="w-100"
        />
      </div>

      <button
        style={{
          outline: "none",
          border: "none",
          cursor: "pointer",
          color: "white",
        }}
        className="w-100 btnn rounded-3 mt-2"
        onClick={addNote}
      >
        Add Text
      </button>
    </>
  );
};

export default Text;
