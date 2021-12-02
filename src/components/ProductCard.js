import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import ProductFormModal from './ProductFormModal'

//export const ProductCard = ({ nameReceta, photoReceta, listaIngredientes, descReceta }) => {
export const ProductCard = ({ nameReceta, photoReceta, descReceta }) => {
    // ESTADOS DE PRODUCT CARD COMO PADRE DE PRODUCT FORM MODAL
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    /*********************************************************
     * VERIFICACIONES DE ENTRADA..........!!!!
     ***************************************************/
    console.log("nameReceta", nameReceta)
    //console.log("photoReceta", objProduct.photoReceta)
    //console.log("listaIngredientes", objProduct.listaIngredientes)
    //console.log("descReceta", objProduct.descReceta)

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={photoReceta} />
                <Card.Body>
                    <Card.Title>{nameReceta}</Card.Title>
                    <Card.Text>{/*objProduct.listaIngredientes*/}</Card.Text>
                    <Card.Text>{descReceta}</Card.Text>

                    {(nameReceta == "" || nameReceta == null || nameReceta == undefined) ?

                        <></>
                        :
                        <div>
                            <Button variant="primary" onClick={handleShow}>Editar</Button>
                            <Button variant="danger">Eliminar</Button>
                        </div>
                    }
                    {/*&nbsp;
                    
                    */}


                </Card.Body>
            </Card>
            {/* VENTANA EMERGENTE DE MODAL */}
            {/* <ProductFormModal /> 
            <ProductFormModal show={show} handleClose={handleClose} nameReceta={nameReceta} photoReceta={photoReceta} descReceta={descReceta} />
                */}
            <ProductFormModal show={show} handleClose={handleClose} nameReceta={nameReceta} photoReceta={photoReceta} descReceta={descReceta} />
        </>

    )
}
