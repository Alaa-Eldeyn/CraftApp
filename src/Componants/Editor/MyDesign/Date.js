// import img1 from "../../../Assets/images/hoodi.png";
// import img2 from "../../../Assets/images/green1.png";
// import img3 from "../../../Assets/images/long sleeve woman front 1.png";
// import img4 from "../../../Assets/images/pink1.png";
// import img5 from "../../../Assets/images/baby.png";
// import img6 from "../../../Assets/images/pink2.png";
// import img7 from "../../../Assets/images/bag.png";
// import img8 from "../../../Assets/images/green2.png";
// import { useContext } from "react";
// import { ViewContext } from "../../../Context/ViewContext";

// const getSlides = () => {
  
//   let {setSlide} = useContext(ViewContext)

//   const img1 = setSlide;
  
//   const slides = [
//     { src: img1 },

//   ];
//   return slides;
// };
// export default getSlides ;

import { useContext } from "react";
import { ViewContext } from "../../../Context/ViewContext";

const MyComponent = () => {
  const { setSlide } = useContext(ViewContext);

  const slides = [
    { src: setSlide[0].pictureUrl },
    { src: setSlide[1].pictureUrl },
    // ... add other slides
  ];

  return (slides);
};

export default MyComponent;
