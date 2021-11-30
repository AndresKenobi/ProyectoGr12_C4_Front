//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Routes, Route } from "react-router-dom";
import AuthContext from './context/AuthContext';
import { useContext } from "react";
import AuthRouter from './routers/AuthRouter';
import UnauthRouter from './routers/UnauthRouter';

function App() {

  // Variable para uso de contexto
  const { auth } = useContext(AuthContext);

  return (
    <div className="App">

      {/* TERNARIO VALIDACION LOGIN - sin usar completamente */}
      {/*auth ? <AuthRouter /> : <UnauthRouter />*/}{/*DESHABILITADO TEMPORALMENTE*/}
      {auth ? <AuthRouter /> : <UnauthRouter />}
      {/*<AuthRouter />}{SIN AUTENTICACION DEL TERNARIO*/}
      {/*<header className="App-header">
      </header>*/}
    </div>
  );
}

export default App;
