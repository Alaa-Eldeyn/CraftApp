import SideTaps from "./SideTaps";
import View from "./View";
import Layers from "./Layers";

const Editor = ({hoodiback ,hoodifront}) => {

  return (
    <div style={{paddingTop:"40px" , marginTop:"42px"}}>
      <div  className="d-sm-flex flex-md-row flex-sm-column " 
        style={{ minHeight: "90vh" }}>

          <SideTaps/>

          <View 
          hoodiback={hoodiback}
          hoodifront={hoodifront}
          />

          <Layers/>
        </div>

    </div>
  );
};

export default Editor;

