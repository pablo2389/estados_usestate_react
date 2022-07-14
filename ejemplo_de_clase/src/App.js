import logo from './logo.svg';
import './App.css';
import CajaPorAtributo from "./components/estiloPorAtributo"
import Boton from "./components/localScope.js"
import Nombre from "./components/randomName.js"
import StyleBox from "./components/styleBox.js"
import MyName from './components/myName';
import Likes from './components/likes';
import LikesUseState from './components/likesUseState';
import RenderCondicional from './components/renderCondicional';
import UseMapExample from "./components/useMapExample"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        {/* <MyName name="INOVE"/> */}
        {/* <h1>Hola <Nombre /></h1> */}
        {/* <Boton /> */}
        {/* <CajaPorAtributo /> */}
        {/* <StyleBox>
          <h1>Styled Box</h1>
          <p>Soy una caja que aplica estilo a todos mis hijos.</p>
        </StyleBox> */}
        {/* <Likes number={0}/> */}
        {/* <LikesUseState number={0}/> */}
        {/* <RenderCondicional/> */}
        <UseMapExample/>
      </header>
    </div>
  );
}

export default App;
