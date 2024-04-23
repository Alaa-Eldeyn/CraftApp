
import React, { useCallback, useContext} from 'react';
import { useDropzone } from 'react-dropzone';
import style from './Ai.module.css'
import { ViewContext } from '../../../Context/ViewContext';

const Photos = () => {
  const {images , setImages}= useContext(ViewContext)

  const onDrop = useCallback((acceptedFiles) => {
    const selectedPhotos = acceptedFiles.map(file => ({
      url: URL.createObjectURL(file),
      name: file.name,
      type: file.type,
    }));
    setImages(prevImages => [...prevImages, ...selectedPhotos]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*', multiple: true });

  return (<>

    <div className={style.bgImg}>
        
        <p className={style.content}>Upload photos from your device</p>
      <div {...getRootProps()} style={dropzoneStyle} className='mt-5  '>
        <input {...getInputProps()} />
        <span>Upload Photo</span>
      </div>
      
    </div>
    <div>
        {images.length > 0 && (
        <div className='my-3 '>
          <ul className='d-flex flex-wrap gap-2  ' style={{overflow:'auto',height:'380px',width:'98%' , margin:'0px' , padding :'0px'}}>
            {images.map((image, index) => (
              <li key={index} style={{ width: 'auto', height: '200px' , listStyle:'none'}}>
                <img src={image.url} alt={image.name} style={{ width: '100%', height: '200px' }} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
  );
};

const dropzoneStyle = {
    backgroundColor:'#5B8F9A',
  border: '1px solid #5B8F9A',
  borderRadius: '15px',
  padding: '7px',
  textAlign: 'center',
  cursor: 'pointer',
  width :'80%',
  margin:'auto',
  color:'#FCFCFC'
  
};

export default Photos;