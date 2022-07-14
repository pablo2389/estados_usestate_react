import { useState } from "react";
import { button, box1, box2 } from "./renderCondicional.style.js";
const RenderCondicional = () => {
  const [box, setBox] = useState(true);

  const tomyBox = <div style={box1}>Lote de Tomy...</div>;
  const dalyBox = <div style={box2}>...Lote de Daly</div>;

  return (
    <div>
      <button style ={button}
        onClick={() => {
          setBox(!box);
        }}
      > Change Me!</button>
      {box ? tomyBox : dalyBox}
    </div>
  );
};
export default RenderCondicional;
