import React from 'react'
import {
    Routes,
    Route
} from "react-router";
//import { Registrarse } from '../pages/Registrarse';
import { SinAcceso } from '../pages/SinAcceso';

const UnauthRouter = () => {
    return (
        <>
            <Routes >
                <Route path="/SinAcceso" element={<SinAcceso />}></Route>
            </Routes>
        </>
    )
}

export default UnauthRouter;