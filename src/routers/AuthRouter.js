import React from 'react'
import {
    Routes,
    Route
} from "react-router";
import { Home } from '../pages/Home';
import { Registrarse } from '../pages/Registrarse';

const AuthRouter = () => {
    return (
        <>
            <Routes >
                <Route path="" element={<Home />}></Route>
                <Route path="/Registrarse" element={<Registrarse />}></Route>
            </Routes>
        </>
    )
}

export default AuthRouter;
