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
        {/* 1. CSS Modules: */}
        {/* <Boton /> */}

         
        {/* 2. Estilado por atributo "style" */}
        {/* <CajaPorAtributo /> */}
        {/* <h1>Hola <Nombre /></h1> */}
        
        {/* 3. Componente que aplica estilo a sus hijos */}
        {/* <StyleBox>
          <h1>Styled Box</h1>
          <p>Soy una caja que aplica estilo a todos mis hijos.</p>
        </StyleBox> */}

        {/* 4. Pasaje de propiedades a componente */}
        {/* <MyName name="INOVE"/> */}

        {/* 5. Problema de renderizado */}
        {/* <Likes number={0}/> */}

        {/* 6. Solución con useState */}
        {/* <LikesUseState number={0}/> */}
        
        {/* 7. Renderizado condicional */}
        {/* <RenderCondicional/> */}

        {/* 8. Mapeo de datos con map() */}
        {/* <UseMapExample/> */}
      </header>
    </div>
  );
}

export default App;
