import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import AuthContext from '../context/AuthContext'
import Alert from 'react-bootstrap/Alert'

const objForm = {
    //name: "",
    //lastname: "",
    email: "",
    password: ""
}

export const Login = () => {

    // Hacemos uso del Contexto
    const { handleLogin } = useContext(AuthContext);
    // creamos estado del formulario de recoleccion datos en front
    const [form, setForm] = useState(objForm);
    const [show, setShow] = useState(false); // ALERTA LOGIN


    const handleForm = (e) => {
        // desempaqueta objeto y captura valores de campos de texto
        let obj = { ...form, [e.target.name]: e.target.value };
        setForm(obj);
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // evitar se recetee campos de texto
        const resp = await handleLogin(form);
        if (resp.status === 200) {
            //console.log("verifi recibir resp:", resp);
            let json = await resp.json();
            //console.log(json);
            localStorage.setItem("token:", json.token);
            setForm(objForm); // limpieza campos de texto despues de click registrar
            setShow(false); // estado de alerta
        } else {
            //alert("Credenciales Invalidas");
            setShow(true); //estado alerta
        }



    }

    return (
        <>
            <Alert variant="danger" show={show}>
                Pandita tienes credenciales invalidas!
            </Alert>
            <Form onSubmit={handleSubmit}>
                <h3>Login de acceso:</h3>

                <Row className="align-items-center">

                    <Col></Col>

                    <Col sm={4} className="my-1">
                        {/*<Form.Group className="mb-3" controlId="email">*/}
                        <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                            Name
                        </Form.Label>
                        <Form.Control required name="email" value={form.email} onChange={handleForm} type="email" id="email" placeholder="e-mail" />
                        {/*</Form.Group>*/}

                    </Col>
                    <Col sm={4} className="my-1">
                        {/*<Form.Group className="mb-3" controlId="password">*/}
                        <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
                            Username
                        </Form.Label>
                        <InputGroup>
                            {/*<InputGroup.Text>@</InputGroup.Text>*/}
                            <FormControl required name="password" value={form.password} onChange={handleForm} type="password" id="password" placeholder="password" />
                        </InputGroup>
                        {/*</Form.Group>*/}
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
