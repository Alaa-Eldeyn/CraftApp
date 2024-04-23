import img1 from "../../Assets/images/hoodi.png";
import img2 from "../../Assets/images/photo2.png";
import img3 from "../../Assets/images/long sleeve front 1.png";
import img4 from "../../Assets/images/sports_pants_men_01v_bright_color_0003 1.png";
import img5 from "../../Assets/images/z01-1 2.png";
import img6 from "../../Assets/images/polo front 1.png";
import img7 from "../../Assets/images/sleeves front 1.png";
import img8 from "../../Assets/images/AdobeStock_494861273_Preview_result 1.png";
import style from "../Cutomize/Customize.module.css";
import { Link } from "react-router-dom";

export default function Cutomize() {
  
  const images = [
    { x: 1 , src: img1, alt: "Hoodie", text: "Hoodie" },
    { x: 2 , src: img2, alt: "Sweater", text: "Sweater" },
    { x: 3 , src: img3, alt: "Long_Sleeve_T-shirt", text: "Long Sleeve T-shirt" },
    { x: 4 , src: img4, alt: "Sweatpants", text: "Sweatpants" },
    { x: 5 , src: img5, alt: "Half_Sleeve_T-shirt", text: "Half Sleeve T-shirt" },
    { x: 6 , src: img6, alt: "Polo_T-shirt", text: "Polo T-shirt" },
    { x: 7 , src: img7, alt: "Tank_Top", text: "Tank Top" },
    { x: 8 , src: img8, alt: "Sports_shorts", text: "Sports shorts" },
  ];

  return (
    
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-5 py-3">Choose a Blank</h1>
            <div className="row g-3">
              {images.map((image, index) => (
                <Link 
                  key={index}
                  className="col-xl-3 col-lg-4 col-md-6 cursor colorText"
                  to={`/editor/${image.alt}`
                }
                  
                
                  
                >
                  
                  <div className={style.item}>
                    <div
                      className={` w-100 p-3 d-flex justify-content-center rounded-5 ${style.ground}`}
                    >
                      <img src={image.src} className="w-75" alt={image.alt} />
                    </div>
                    <div className={style.bg}></div>

                    <p className={style.text}>{image.text}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
