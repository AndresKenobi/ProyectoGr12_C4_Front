import React from 'react'
import { BarraOpciones } from '../components/BarraOpciones';
//import { Creacionreceta } from '../components/Creacionreceta';
import Button from 'react-bootstrap/Button';

import { TablaRecetas } from '../components/TablaRecetas';
import Creacionreceta from '../components/Creacionreceta';


export const Tusrecetas = () => {

    /*********************************************************************
     * TUS RECETAS = El product Component
     * Creacion Recetas = Product Form
     * Product Card = OJO: Este componente debe hacerse ->
     *  1- El de Parrill Recetas a usarlo como un GET ALL para home
     *  2 - Tabla recetas usarlo para GETByID (con token de usuario)
     *  3 - Se crea Product Card Componente independiente de quien lo invoque
     * **************************************************************************** */
    return (
        <div>
            <BarraOpciones />
            <h2>
            </h2>
            <br />
            <br />
            <br />
            <br />

            <h2>Bienvenido al menu donde creas y ves tus recetas</h2>
            <br />
            <br />
            <br />
            <h3> ---  Ven y crea tu receta:  ---</h3>
            <Creacionreceta />

            <br /><br />
            <hr /><hr />
            <br />

            <h3>---  Las recetas que has creado:  ---</h3>
            <TablaRecetas />


            <br />
        </div>
    )
}
