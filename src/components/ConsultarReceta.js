import React, { useState, useContext } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import RecipeContext from '../context/RecipeContext'

const objForm = {
    receta: ""
}
//const objForm ="";

export const ConsultarReceta = () => {

    const { handleConsultas } = useContext(RecipeContext);
    const [form, setForm] = useState(objForm);

    const handleForm = (e) => {
        // desempaqueta objeto y captura valores de campos de texto
        let obj = { ...form, [e.target.name]: e.target.value };
        //let obj = objForm;
        setForm(obj);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // evitar se resetee campos de texto
        const consulta = form.receta;
        console.log("dato consulta:", form.receta);
        handleConsultas(consulta);
        //handleConsultas(form); // pasamos formulario al contexto
        setForm(objForm); // limpieza campos de texto despues de click registrar
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <br />


                <InputGroup className="mb-3">
                    <InputGroup.Text id="receta">Consultas</InputGroup.Text>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        required
                        name="receta"
                        value={form.receta}
                        onChange={handleForm}
                        type="text"
                        placeholder="Busca tu receta"
                    />
                </InputGroup>

                {/*
                <Form.Group className="mb-3" controlId="receta">
                    <Form.Control required name="receta" value={form.receta} onChange={handleForm} type="text" placeholder="Busca tu receta" />
                </Form.Group>
                */}



                <Button variant="primary" type="submit">
                    Buscar Receta
                </Button>
                <br />

            </Form>
        </>
    )
}
