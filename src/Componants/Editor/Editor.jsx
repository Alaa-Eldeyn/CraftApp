import SideTaps from "./SideTaps";
import View from "./View";
import Layers from "./Layers";
import { useContext, useEffect, useState } from "react";
import { ViewContext } from "../../Context/ViewContext";

const Editor = ({ hoodiback, hoodifront }) => {
  const [mainImg, setMainImg] = useState(hoodifront);
  let { indColor } = useContext(ViewContext);

  useEffect(() => {
    setMainImg(hoodifront);
  }, [indColor]);

  return (
    <div style={{ paddingTop: "40px", marginTop: "42px" }}>
      <div
        className="d-sm-flex flex-md-row flex-sm-column "
        style={{ minHeight: "90vh" }}
      >
        <SideTaps />

        <View
          hoodiback={hoodiback}
          hoodifront={hoodifront}
          mainImg={mainImg}
          setMainImg={setMainImg}
        />

        <Layers />
      </div>
    </div>
  );
};

export default Editor;
