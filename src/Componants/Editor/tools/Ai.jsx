import React, { useState } from 'react';
import axios from 'axios';
import style from './Ai.module.css';
import { useContext } from 'react';
import {ViewContext} from '../../../Context/ViewContext';

const Ai = () => {
  const { imageData, setImageData} = useContext(ViewContext);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleGenerateImage = async () => {
    const API_KEY = 'sk-xAuVIf8VNa7MC8U5i3zl9vmqrRxTqFdpvsWueDK2V2lsTeB2';
    const url = 'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image';

    const body = {
      steps: 40,
      width: 1024,
      height: 1024,
      seed: 0,
      cfg_scale: 5,
      samples: 1,
      text_prompts: [
        {
          text: text,
          weight: 1,
        },
        {
          text: 'blurry, dark',
          weight: -1,
        },
      ],
    };

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    };

    try {
      const response = await axios.post(url, body, { headers });

      if (response.status === 200) {
        const { artifacts } = response.data;
        const image = artifacts[0]; // Assuming there is only one image in the response

        setImageData(image.base64);
      } else {
        throw new Error('Failed to generate image');
      }
    } catch (error) {
      console.error('Error generating image:', error);
    }
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
      
      {loading ? (
        <button
          type="button"
          style={{
            outline: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'white',
          }}
          className="w-100 btnn rounded-3 mt-2"
        >
          <i className="fa-solid fa-spinner fa-spin "></i>
        </button>
      ) : (
        <button
          style={{
            outline: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'white',
          }}
          className="w-100 btnn rounded-3 mt-2"
          onClick={handleGenerateImage}
        >
          Generate
        </button>
      )}
      
        <div className='w-75 h-50 mt-3 mx-auto'>
          
        {imageData && <img className='w-100 h-100' src={`data:image/png;base64,${imageData}`} alt="Generated" />}
        </div>
    </>
  );
};

export default Ai;


// ------------------------------------------------------------------

// import React, { useState } from 'react';
// import style from './Ai.module.css';
// import { useContext } from 'react';
// import {ViewContext} from '../../../Context/ViewContext';

// function Ai() {
//   const { imageData, setImageData} = useContext(ViewContext);
//   const [text, setText] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setText(e.target.value);
//   };
  
//   async function query(data) {
//     const response = await fetch(
//       "https://api-inference.huggingface.co/models/cloudqi/cqi_text_to_image_pt_v0",
//       {
//         headers: { Authorization: "Bearer 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" },
//         method: "POST",
//         body: JSON.stringify(data), // Use the provided data parameter
//       }
//     );
//     const result = await response.blob();
//     return result;
//   }
  
//   function convert() {
//     setLoading(true); // Set loading to true before making the API call
//     query({ "inputs": text }).then((response) => {
//       const imageUrl = URL.createObjectURL(response);
//       setImageData(imageUrl);
//       setLoading(false); // Set loading to false after the API call completes
//     }).catch((error) => {
//       console.error("Error fetching data:", error);
//       setLoading(false); // Set loading to false in case of an error
//     });
//   }

//   return (
//     <>
//       <p className={style.text}>Create an image from text prompt</p>
//       <textarea
//         className={style.area}
//         placeholder="Enter your prompt"
//         value={text}
//         onChange={handleChange}
//       ></textarea>
//       {loading ? (
//         <button
//           type="button"
//           style={{
//             outline: 'none',
//             border: 'none',
//             cursor: 'pointer',
//             color: 'white',
//           }}
//           className="w-100 btnn rounded-3 mt-2"
//         >
//           <i className="fa-solid fa-spinner fa-spin "></i>
//         </button>
//       ) : (
//         <button
//           style={{
//             outline: 'none',
//             border: 'none',
//             cursor: 'pointer',
//             color: 'white',
//           }}
//           className="w-100 btnn rounded-3 mt-2"
//           onClick={convert}
//         >
//           Generate
//         </button>
//       )}
// <div className='w-75 h-50 mt-3 mx-auto'>
  
// {imageData && <img className='w-100 h-100' src={imageData} alt="Generated" />}
// </div>
//     </>
//   );
// }

// export default Ai;

// ---------------------------------------------------

