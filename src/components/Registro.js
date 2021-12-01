import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AuthContext from '../context/AuthContext'
//import InputGroup from 'react-bootstrap/InputGroup'
//import FormControl from 'react-bootstrap/FormControl'
import Alert from 'react-bootstrap/Alert'

const objForm = {
    name: "",
    //lastname: "",
    email: "",
    password: ""
}

export const Registro = () => {

    const { handleRegister } = useContext(AuthContext);
    const [form, setForm] = useState(objForm);
    const [show, setShow] = useState(false); // ALERTA REGISTRO

    const handleForm = (e) => {
        // desempaqueta objeto y captura valores de campos de texto
        let obj = { ...form, [e.target.name]: e.target.value };
        setForm(obj);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // evitar se resetee campos de texto
        handleRegister(form); // pasamos formulario al contexto
        setShow(true); //estado alerta REGISTRO
        setForm(objForm); // limpieza campos de texto despues de click registrar
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <br />
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control required name="name" value={form.name} onChange={handleForm} type="text" placeholder="Digite su nombre" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="youremail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control required name="email" value={form.email} onChange={handleForm} type="email" placeholder="Digite email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="yourpassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required name="password" value={form.password} onChange={handleForm} type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                {/*
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Pais</Form.Label>
                        <Form.Control />
                    </Form.Group>

                </Row>*/}




                <Button variant="primary" type="submit">
                    Registrarse
                </Button>
            </Form>
            <br />
            <Alert variant="success" show={show}>
                Pandita tus datos de registro han sido enviados!
            </Alert>
            <br />
        </>
    )
}
