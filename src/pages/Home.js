import React from 'react'
import { BarraOpciones } from '../components/BarraOpciones';
import { Carrusel } from '../components/Carrusel';
import { Login } from '../components/Login';
import { ConsultarReceta } from '../components/ConsultarReceta';
//import { TablaRecetas } from '../components/TablaRecetas';
import { ParrillaRecetas } from '../components/ParrillaRecetas';


export const Home = () => {
    return (
        <>
            <BarraOpciones />
            <br />
            <br />
            <br />
            <Login />
            <br />
            <Carrusel />
            <br />
            <ConsultarReceta />
            <br />
            <br />
            <h2>PARRILLA DE RECETAS</h2>
            <br />
            <ParrillaRecetas />

        </>
    )
}
