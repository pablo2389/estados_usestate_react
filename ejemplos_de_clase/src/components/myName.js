const MyName = (props) => {
  const jsx_value = <>Este es mi nombre: </>; // ESTO ES VALIDO!
  return (
    <h1>
      {jsx_value} {props.name}
    </h1>
  );
};

export default MyName;
