import style from './MyDesign.module.css'

const Images = (props) => {
    const { data, onClick } = props;
  
    const handleClickImage = (index) => {
      onClick(index);
    };
  
    return (
      <div className={`${style.imagesContainer} mt-5 pt-5 `}>
        {data.map((slide, index) => (
          <div
            onClick={() => handleClickImage(index)}
            key={index}
            className={`${style.image}`}
          >
            <img src={slide.src} alt="Designs" />
          </div>
        ))}
      </div>
    );
  };
  
  export default Images;
  