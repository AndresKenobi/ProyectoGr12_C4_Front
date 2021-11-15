import React from 'react'
import { BarraOpciones } from '../components/BarraOpciones';
import { Registro } from '../components/Registro';

export const SinAcceso = () => {
    return (
        <div>
            <BarraOpciones />
            <br />
            <br />
            <br />
            <h2>No has validado tu acceso con el login.</h2>
            <h4>Si lo requieres Registrate</h4>
            <Registro />
        </div>
    )
}
