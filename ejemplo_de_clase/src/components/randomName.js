import nameStyle from "./randomName.style.js";

const randomValue = (max, min) => {
  const value = Math.floor(Math.random() * (max + 1)) + min;
  return value;
};
const randomize = () => {
  return {
    color: `rgb(${randomValue(255, 0)},${randomValue(255, 0)},${randomValue(
      255,
      0
    )})`,
    fontSize: `${randomValue(100, 40)}px`,
  };
};

function Nombre() {
  return (
    <div style={nameStyle}>
      {["A", "l", "e", "j", "a", "n", "d", "r", "o"].map((letra) => (
        <spam style={randomize()}>{letra}</spam>
      ))}
    </div>
  );
}
export default Nombre;
