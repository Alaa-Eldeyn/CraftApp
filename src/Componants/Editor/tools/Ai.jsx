
import React, { useState } from "react";
import style from './Ai.module.css'
import axios from "axios";

const Ai = () => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  let [Loading , setLoading]= useState(false);

  const API_KEY = 'Bearer sk-xAuVIf8VNa7MC8U5i3zl9vmqrRxTqFdpvsWueDK2V2lsTeB2';
  const BASE_URL = 'https://api.stability.ai';

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const getImg = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/v1alpha/generation/stable-diffusion-512-v2-1/text-to-image`, {
        cfg_scale: 15,
        clip_guidance_preset: 'FAST_BLUE',
        height: 512,
        width: 512,
        samples: 1,
        steps: 150,
        seed: 0,
        style_preset: '3d-model',
        text_prompts: [{ text: prompt, weight: 1 }],
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': API_KEY,
          'Accept': 'image/png',
        },
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









