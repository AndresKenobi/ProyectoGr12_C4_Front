//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarraOpciones } from './components/BarraOpciones';
import { Carrusel } from './components/Carrusel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BarraOpciones/>
      <Carrusel/>
        
      </header>
    </div>
  );
}

export default App;
