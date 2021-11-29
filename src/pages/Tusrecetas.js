import React from 'react'
import { BarraOpciones } from '../components/BarraOpciones';
//import { Creacionreceta } from '../components/Creacionreceta';
import Button from 'react-bootstrap/Button';
import { ParrillaRecetas } from '../components/ParrillaRecetas';
//import Creacionreceta from '../components/Creacionreceta';

export const Tusrecetas = () => {
    return (
        <div>
            <BarraOpciones />
            <h2>
            </h2>
            <br/>
            <br/>
            <br/>
            <br/>

            <h2>Bienvenido al menu de creacion de recetas</h2>
            <br/>
            <br/>
            <br/>

            <ParrillaRecetas />

            <br/><br/>

            <Button href="/Creacionreceta">Crear Receta</Button>
            {/* <Creacionreceta/> */}
            
            <br />
        </div>
    )
}
