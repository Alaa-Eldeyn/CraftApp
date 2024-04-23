
import React, { useState } from "react";
import style from './Ai.module.css'

const Ai = () => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  let [Loading , setLoading]= useState(false);
  // const [resize, setResize] = useState(<></>);

  const Api = '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';

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const getImg = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Api}`
        },
        body: JSON.stringify({
          "prompt": text,
          "n": 1,
          "size": "256x256"
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      const img = data.data;
      setImages(img);
      setError(null); // Clear any previous error
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setError('Failed to fetch data. Please try again.'); // Set error state
    }
    finally {
      setLoading(false);}
    
  };

  return (
    <>
      <p className={style.text}>Create an image from text prompt</p>
      <textarea
        className={style.area}
        placeholder="Enter your prompt"
        value={text}
        onChange={handleChange}
      ></textarea>
      {Loading ? <button type="button" style={{
          outline: "none",
          border: "none",
          cursor: "pointer",
          color: "white",
        }}
        className="w-100 btnn rounded-3 mt-2" >
                <i className="fa-solid fa-spinner fa-spin "></i>
              </button> : <button
        style={{
          outline: "none",
          border: "none",
          cursor: "pointer",
          color: "white",
        }}
        className="w-100 btnn rounded-3 mt-2"
        onClick={getImg}
      >
        Generate
      </button>}
      

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="image mt-3 text-center">
        {images.map((photo, index) => (
          <div key={index}>
            <img src={photo.url} alt={`image ${index}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Ai;
