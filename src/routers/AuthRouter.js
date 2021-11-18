import React from 'react'
import {Routes,Route} from "react-router";
//import {Routes, Route,Switch} from "react-router-dom";
import { Home } from '../pages/Home';
import { Registrarse } from '../pages/Registrarse';
import { SinAcceso } from '../pages/SinAcceso';
import { Tusrecetas } from '../pages/Tusrecetas';
import { Creacionreceta } from '../components/Creacionreceta';

const AuthRouter = () => {
    return (
        <>
            <Routes >
                <Route path="/" element={<Home />}></Route>
                <Route index path="/" element={<Tusrecetas />}></Route>
                {/* index me da la prioridad de la pagina cuando me logueo */}
                <Route path="/Registrarse" element={<Registrarse />}></Route>
                <Route path="/SinAcceso" element={<SinAcceso />}></Route>                
                <Route path="/Creacionreceta" element={<Creacionreceta />}></Route>
            </Routes>
        </>
    )
}

export default AuthRouter;
