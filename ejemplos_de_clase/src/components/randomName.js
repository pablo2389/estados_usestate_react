import nameStyle from "./randomName.style.js";


const randomValue = (max, min) => {
  // Función auxiliar que devuelve un numero entre min y max
  const value = Math.floor(Math.random() * (max + 1)) + min;
  return value;
};

const randomize = () => {
  // Función auxiliar que devuelve un objeto con el color y el fontSize
  return {
    color: `rgb(${randomValue(255, 0)},${randomValue(255, 0)},${randomValue(
      255,
      0
    )})`,
    fontSize: `${randomValue(100, 40)}px`,
  };
};

function Nombre() {
  // Componente que devuelve un div con el nombre estilizado
  return (
    <div style={nameStyle}>
      {["A", "l", "e", "j", "a", "n", "d", "r", "o"].map((letra) => (
        <spam style={randomize()}>{letra}</spam>
      ))}
    </div>
  );
}
export default Nombre;
