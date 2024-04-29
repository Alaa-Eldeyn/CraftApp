import { useState } from "react";
import SideTaps from "./SideTaps";
import View from "./View";
import Layers from "./Layers";

const Editor = ({hoodiback ,hoodibg}) => {
  const [currentTap, setCurrentTap] = useState("Ai");
  const [isTapOpenArrow, setIsTapOpenArrow] = useState(true);

  const [isTapOpenAi, setIsTapOpenAi] = useState(true);
  const [isTapOpenText, setIsTapOpenText] = useState(false);
  const [isTapOpenColor, setIsTapOpenColor] = useState(false);
  const [isTapOpenShapes, setIsTapOpenShapes] = useState(false);
  const [isTapOpenPhotos, setIsTapOpenPhotos] = useState(false);
  const [isTapOpenIcons, setIsTapOpenIcons] = useState(false);
  const [isTapOpenDesigns, setIsTapOpenDesigns] = useState(false);

  const [mainImg, setMainImg] = useState(hoodibg);


  return (
    <div style={{paddingTop:"40px" , marginTop:"42px"}}>
      <div  className="d-sm-flex flex-md-row flex-sm-column " 
        style={{ minHeight: "90vh" }}>

          <SideTaps
            currentTap={currentTap}
            setCurrentTap={setCurrentTap}
            isTapOpenArrow={isTapOpenArrow}
            setIsTapOpenArrow={setIsTapOpenArrow}
            isTapOpenAi={isTapOpenAi}
            setIsTapOpen={setIsTapOpenAi}
            isTapOpenText={isTapOpenText}
            setIsTapOpenText={setIsTapOpenText}
            isTapOpenColor={isTapOpenColor}
            setIsTapOpenColor={setIsTapOpenColor}
            isTapOpenShapes={isTapOpenShapes}
            setIsTapOpenShapes={setIsTapOpenShapes}
            isTapOpenPhotos={isTapOpenPhotos}
            setIsTapOpenPhotos={setIsTapOpenPhotos}
            isTapOpenIcons={isTapOpenIcons}
            setIsTapOpenIcons={setIsTapOpenIcons}
            isTapOpenDesigns={isTapOpenDesigns}
            setIsTapOpenDesigns={setIsTapOpenDesigns}
            content={currentTap}
      />
          <View 
              hoodiback={hoodiback} 
              hoodibg={hoodibg}
              hoodiB={hoodiback} 
              hoodiF={hoodibg}
              mainImg={mainImg}
              setMainImg={setMainImg} />
          <Layers/>
        </div>

    </div>
  );
};

export default Editor;

