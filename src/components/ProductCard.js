import React from 'react'
import { Card, Button } from 'react-bootstrap'

export const ProductCard = ({ url_img, name, price }) => {

    /*********************************************************
     * CUIDADO PARAMETROS DE ENTRADA. FALTA AJUSTAR...........!!!!
     ***************************************************/
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={url_img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{price}</Card.Text>
                <Button variant="primary">Editar</Button>
                <Button variant="danger">Eliminar</Button>
            </Card.Body>
        </Card>
    )
}
