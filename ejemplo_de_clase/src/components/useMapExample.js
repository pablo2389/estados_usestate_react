import data from "./example.json";
const UseMapExample = () => {
  const filas = (element) => {
    const estilado = { border: "2px solid #555577", borderRadius: "10px", fontSize: "15px",background: "#333355"};
    return (
      <>
        <tr>
          <td>
            <img style={estilado} src={element.picture} alt=""></img>
          </td>
          <td style={estilado}>{element.marvel_id}</td>
          <td style={estilado}>{element.title}</td>
          <td style={estilado}>{element.description}</td>
          <td style={estilado}>{element.price}</td>
          <td style={estilado}>{element.stock_qty}</td>
        </tr>
      </>
    );
  };
  return (
    <table>
      <tr>
        <th>Picture</th>
        <th>Marvel ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Price</th>
        <th>Stock qty</th>
      </tr>
      {data.map((e) => filas(e))}
    </table>
  );
};
export default UseMapExample;
