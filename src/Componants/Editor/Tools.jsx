import  Ai  from "./tools/Ai";
import  Text  from "./tools/Text";
import  Color  from "./tools/Color";
import  Shapes  from "./tools/Shapes";
import  Icons  from "./tools/Icons";
import  Photos  from "./tools/Photos";
import  Designs  from "./tools/Designs";
import Similarity from "./tools/Similarity";


const Tools = ({ content }) => {
  switch (content) {
    case "Ai":
      return <Ai />;
    case "Text":
      return <Text />;
    case "Color":
      return <Color />;
    case "Shapes":
      return <Shapes />;
      case "Icons":
      return <Icons />;
    case "Photos":
      return <Photos />;
    case "My Designs":
      return <Designs />;
    case "Search for similar":
      return <Similarity/>
    default:
      return null;
  }
};

export default Tools;
