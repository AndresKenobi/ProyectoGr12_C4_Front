import React from 'react'
//import Table from 'react-bootstrap/Table'
import { ProductCard } from './ProductCard'
//import { BarraOpciones } from '../components/BarraOpciones'
import { Card, Button } from 'react-bootstrap'

export const TablaRecetas = () => {

    /*********************************************************
     * CUIDADO PARAMETROS DE ENTRADA. FALTA AJUSTAR...........!!!!
     ***************************************************/

    return (
        <>
            <h5>Aqui estan tus creaciones:</h5>
            <br />
            <ProductCard />


        </>
    )
}


