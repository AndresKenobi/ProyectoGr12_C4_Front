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

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
