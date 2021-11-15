import React from 'react'
import { Registro } from '../components/Registro';
import { ComentarReceta } from '../components/ComentarReceta';
import { BarraOpciones } from '../components/BarraOpciones';

export const Registrarse = () => {
    return (
        <div>
            <BarraOpciones />
            <h2>Bienvenido al menu de registro</h2>
            <Registro />
            <br />
            <h2>PRUEBA COMENTAR RECETA - esto va en otro lado</h2>
            <ComentarReceta />
        </div>
    )
}
