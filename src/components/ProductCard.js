import React from 'react'
import { Card, Button } from 'react-bootstrap'

export const ProductCard = ({ nameReceta, photoReceta, listaIngredientes, descReceta }) => {

    /*********************************************************
     * CUIDADO PARAMETROS DE ENTRADA. FALTA AJUSTAR...........!!!!
     ***************************************************/
    console.log("nameReceta", nameReceta)
    console.log("photoReceta", photoReceta)
    console.log("listaIngredientes", listaIngredientes)
    console.log("descReceta", descReceta)
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={photoReceta} />
            <Card.Body>
                <Card.Title>{nameReceta}</Card.Title>
                <Card.Text>{/*listaIngredientes*/}</Card.Text>
                <Card.Text>{descReceta}</Card.Text>
                <Button variant="primary">Editar</Button>
                &nbsp;
                <Button variant="danger">Eliminar</Button>
            </Card.Body>
        </Card>
    )
}
