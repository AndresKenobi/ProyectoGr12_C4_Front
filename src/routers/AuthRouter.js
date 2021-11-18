import React from 'react'
import {
    Routes,
    Route
} from "react-router";
import { Home } from '../pages/Home';
import { Registrarse } from '../pages/Registrarse';
import { SinAcceso } from '../pages/SinAcceso';
import { Tusrecetas } from '../pages/Tusrecetas';

const AuthRouter = () => {
    return (
        <>
            <Routes >
                <Route path="/" element={<Home />}></Route>
                <Route path="/Registrarse" element={<Registrarse />}></Route>
                <Route path="/SinAcceso" element={<SinAcceso />}></Route>
                <Route path="/Tusrecetas" element={<Tusrecetas />}></Route>
            </Routes>
        </>
    )
}

export default AuthRouter;
