import style from './MyDesign.module.css'

const Images = (props) => {
    const { data, onClick } = props;
  
    const handleClickImage = (index) => {
      onClick(index);
    };
  
    // console.log(data);
    return (
      <div className={`container mt-5 pt-5 `}>
        <div className="row">
        {data?.map((slide, index) => (
          <div
            onClick={() => handleClickImage(index)}
            key={index}
            className={`${style.image} col-xl-3 col-lg-4 col-md-6 cursor `}
          >
            <img src={slide.pictureUrl} alt="Designs" />
          </div>
        ))}
        </div>
      </div>
    );
  };
  
  export default Images;
  