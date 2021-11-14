//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarraOpciones } from './components/BarraOpciones';
import { Carrusel } from './components/Carrusel';
import { Login } from './components/Login';
import { ConsultarReceta } from './components/ConsultarReceta';
import { TablaRecetas } from './components/TablaRecetas';

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


      </header>
    </div>
  );
}

export default App;
