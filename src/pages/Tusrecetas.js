import React from 'react'
import { BarraOpciones } from '../components/BarraOpciones';
import { Creacionreceta } from '../components/Creacionreceta';

export const Tusrecetas = () => {
    return (
        <div>
            <BarraOpciones />
            <h2>
            </h2>

            <h2>Bienvenido al menu de creacion de recetas</h2>
            <Creacionreceta />
            <br />
        </div>
    )
}
