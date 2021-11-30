import React from 'react'
import { BarraOpciones } from '../components/BarraOpciones';
import { Registro } from '../components/Registro';
import { Login } from '../components/Login';

export const SinAcceso = () => {
    return (
        <div>
            <BarraOpciones />
            <br />
            <br />
            <br />
            <h2>No has validado tu acceso con el login.</h2>
            <br /><br />
            <h4>Te invitamos a hacer login.</h4>
            <Login />
            <br /><br />
            <h4>Si lo requieres Registrate</h4>
            <Registro />
        </div>
    )
}
