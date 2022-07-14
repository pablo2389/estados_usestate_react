import boxStyle from "./StyleBox.style.js";

function StyleBox(props) {
  return <div style={boxStyle}>{props.children}</div>;
}
export default StyleBox;
