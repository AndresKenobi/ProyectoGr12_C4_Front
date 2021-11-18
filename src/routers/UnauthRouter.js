import React from 'react'
import {Home} from '../pages/Home'
import {Routes,Route} from "react-router-dom";
//import {Routes,Route, Switch} from "react-router-dom";
//import { Registrarse } from '../pages/Registrarse';
import { SinAcceso } from '../pages/SinAcceso';

const UnauthRouter = () => {
    return (
        <>
            <Routes >
                <Route exact path="/" element={<Home />}></Route>
                <Route index path="/sinAcceso" element={<SinAcceso />}></Route>
            </Routes>
        </>
    )
}

export default UnauthRouter;