//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarraOpciones } from './components/BarraOpciones';
import { Carrusel } from './components/Carrusel';
import { Login } from './components/Login';
import { ConsultarReceta } from './components/ConsultarReceta';
import { TablaRecetas } from './components/TablaRecetas';
import { Registro } from './components/Registro';
import { ComentarReceta } from './components/ComentarReceta';
import { ParrillaRecetas } from './components/ParrillaRecetas';
import { Routes, Route } from "react-router-dom";
import AuthContext from './context/AuthContext';
import { useContext } from "react";

function App() {

  // Variable para uso de contexto
  const { auth } = useContext(AuthContext);

  return (
    <div className="App">
      {/* TERNARIO VALIDACION LOGIN - sin usar completamente */}
      {auth ? <h1>Usuario Autorizado</h1> : <h1>Usuario NO Autorizado</h1>}
      <header className="App-header">

        <Routes>
          <Route path="/registro" element={<Registro />}></Route>
        </Routes>

        <BarraOpciones />
        <br />
        <br />
        <Login />
        <br />
        <Carrusel />
        <br />
        <ConsultarReceta />
        <br />
        <TablaRecetas />
        <br />
        <h2>SE PUSO REGISTRO ACA PROVISIONAL, DEBE IR EN OTRA PAGINA,
          VINCULADO AL NAVBAR DE ARRIBA, DESDE ROUTER</h2>
        <Registro />
        <br />
        <h2>PRUEBA COMENTAR RECETA</h2>
        <ComentarReceta />
        <br />
        <h2>PRUEBA PARRILLA RECETAS</h2>
        <ParrillaRecetas />

      </header>
    </div>
  );
}

export default App;
