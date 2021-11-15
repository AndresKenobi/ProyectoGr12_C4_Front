import React from 'react'
import {
    Routes,
    Route
} from "react-router";
import { Home } from '../pages/Home';

const AuthRouter = () => {
    return (
        <>
            <Routes >
                <Route path="" element={<Home />}></Route>
            </Routes>
        </>
    )
}

export default AuthRouter;
