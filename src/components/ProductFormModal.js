import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { Form, Button, Row, Col, Alert, Container } from "react-bootstrap";

const objForm = {
    nameReceta: "",
    photoReceta: "",
    listaIngredientes: [],//objeto que almacena arreglos 
    descReceta: "",
    id: "",
};


const ProductFormModal = ({ show, handleClose, nameReceta, photoReceta, descReceta, _id, handleUpdate }) => {

    //Estados
    const [form, setForm] = useState(objForm);

    const objProduct = { nameReceta, photoReceta, descReceta, _id }

    /*
        useEffect(() => {
            setForm({
                nameReceta: nameReceta,
                photoReceta: photoReceta,
                descReceta: descReceta,
                id: _id
            })
    
        }, [])
        */

    useEffect(() => {
        setForm({
            nameReceta: objProduct.nameReceta,
            photoReceta: objProduct.photoReceta,
            descReceta: objProduct.descReceta,
            id: objProduct._id
        })

    }, [])



    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleEdit = () => {
        handleUpdate(form);
        setForm(objForm);
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edita tu Producto</Modal.Title>
            </Modal.Header>

            {/***************************************************
             * INICIA BODY DEL MODAL
             * *****************************************************/}
            <Modal.Body>

                {/********Fila 1*********/}
                <Row>

                    <Form.Group className="mb-3" controlId="productName">
                        <Form.Label>Nombre de la receta</Form.Label>
                        <Form.Control
                            name="nameReceta"
                            type="text"
                            placeholder="Recipe name"
                            required
                            value={form.nameReceta}
                            onChange={handleForm}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="photoReceta">
                        <Form.Label>URL de la imagen de la receta</Form.Label>
                        <Form.Control
                            name="photoReceta"
                            type="text"
                            placeholder="url img recipe"
                            required
                            value={form.photoReceta}
                            onChange={handleForm}
                        />
                    </Form.Group>

                </Row>




                {/****************************************************************
*******Fila 4 DESCRIPCION PREPARACION
=======================================================*********/}
                <Row>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripcion de la receta</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            name="descReceta"
                            required
                            value={form.descReceta}
                            onChange={handleForm} />
                    </Form.Group>
                </Row>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleEdit}>
                    Update
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProductFormModal
