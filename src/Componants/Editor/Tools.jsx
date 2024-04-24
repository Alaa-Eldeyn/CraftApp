import { Ai, Text, Color, Shapes, Photos, Icons, Designs } from "./tools/index.js";

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
    default:
      return null;
  }
};

export default Tools;
