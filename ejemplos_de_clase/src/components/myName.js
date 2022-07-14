const MyName = (props) => {
  return <h1>{props.name}</h1>;
};

const App = () => {
  return <MyName name="Inove" />;
};

export default MyName;
