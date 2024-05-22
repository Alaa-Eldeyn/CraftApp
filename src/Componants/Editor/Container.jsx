import Moveablee from "../DesignList/Moveable";

export default function Container(){
    
    return (
      <>
        <div
          style={{
            position: "absolute",
            inset: "5px 80px 80px 80px",
          }}
        >
          <Moveablee/>
        </div>
      </>
    );
}
