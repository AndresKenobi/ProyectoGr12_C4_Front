import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import AuthContext from '../context/AuthContext'

const objForm = {
    //name: "",
    //lastname: "",
    email: "",
    password: ""
}

export const Login = () => {

    // PENDIENTE AQUI DECLARAR VAIBLE CONEX CON CONTEX HACIA BACK
    const { handleAuth } = useContext(AuthContext);
    const [form, setForm] = useState(objForm);

    const handleForm = (e) => {
        // desempaqueta objeto y captura valores de campos de texto
        let obj = { ...form, [e.target.name]: e.target.value };
        setForm(obj);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // evitar se recetee campos de texto
        handleAuth(form);
        setForm(objForm); // limpieza campos de texto despues de click registrar
        console.log("Datos capturados del login");
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h3>Login de acceso:</h3>

                <Row className="align-items-center">

                    <Col></Col>

                    <Col sm={4} className="my-1">
                        <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                            Name
                        </Form.Label>
                        <Form.Control required name="email" value={form.email} onChange={handleForm} type="email" id="email" placeholder="e-mail" />

                    </Col>
                    <Col sm={4} className="my-1">
                        <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
                            Username
                        </Form.Label>
                        <InputGroup>
                            {/*<InputGroup.Text>@</InputGroup.Text>*/}
                            <FormControl required name="password" value={form.password} onChange={handleForm} type="password" id="password" placeholder="password" />
                        </InputGroup>
                    </Col>
                    {/*
                    <Col xs="auto" className="my-1">
                        <Form.Check type="checkbox" id="autoSizingCheck2" label="Remember me" />
                    </Col>
                    */}
                    <Col xs="auto" className="my-1">
                        <Button type="submit">Ingresar</Button>
                    </Col>

                    <Col></Col>

                </Row>
            </Form>
        </>
    )
}
