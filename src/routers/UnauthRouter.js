import React from 'react'
import {
    Routes,
    Route
} from "react-router";
import { Home } from '../pages/Home';
import { Registrarse } from '../pages/Registrarse';
import { SinAcceso } from '../pages/SinAcceso';
import { Tusrecetas } from '../pages/Tusrecetas';

const UnauthRouter = () => {
    return (
        <>
            <Routes >
                <Route path="/" element={<Home />}></Route>
                <Route path="/Tusrecetas" element={<SinAcceso />}></Route>
                {/*<Route path="/Tusrecetas" element={<Tusrecetas />}></Route>*/}
                <Route path="/Registrarse" element={<Registrarse />}></Route>
                <Route path="/SinAcceso" element={<SinAcceso />}></Route>
            </Routes>
        </>
    )
}

export default UnauthRouter;