import React, { useState, useContext } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import RecipeContext from '../context/RecipeContext'
import { ProductCard } from './ProductCard'
import "./Components.css"

const objForm = {
    nameReceta: ""
}
//const objForm ="";

export const ConsultarReceta = () => {

    const { handleConsultas } = useContext(RecipeContext);
    const [form, setForm] = useState(objForm);
    const { busqueda } = useContext(RecipeContext)

    const handleForm = (e) => {
        // desempaqueta objeto y captura valores de campos de texto
        let obj = { ...form, [e.target.name]: e.target.value };
        //let obj = objForm;
        setForm(obj);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // evitar se resetee campos de texto
        //const consulta = form.receta;
        console.log("dato consulta:", form.nameReceta);
        //handleConsultas(consulta);
        handleConsultas(form); // pasamos formulario al contexto
        setForm(objForm); // limpieza campos de texto despues de click registrar
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <br />


                <InputGroup className="mb-3">
                    <InputGroup.Text id="nameReceta">Consultas</InputGroup.Text>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        required
                        name="nameReceta"
                        value={form.nameReceta}
                        onChange={handleForm}
                        type="text"
                        placeholder="Busca tu receta"
                    />
                </InputGroup>

                {/*
                <Form.Group className="mb-3" controlId="nameReceta">
                    <Form.Control required name="receta" value={form.nameReceta} onChange={handleForm} type="text" placeholder="Busca tu receta" />
                </Form.Group>
                */}



                <Button variant="primary" type="submit">
                    Buscar Receta
                </Button>
                <br />

            </Form>
            <div className="resultCard">
                {(busqueda == []) ?

                    <></>

                    :

                    <ProductCard
                        key={busqueda._id}
                        nameReceta={busqueda.nameReceta}
                        photoReceta={busqueda.photoReceta}

                        descReceta={busqueda.descReceta}
                    />

                }

                {/*busqueda.map((e) => <ProductCard
                    key={e._id}
                    nameReceta={e.nameReceta}
                    photoReceta={e.photoReceta}

                    descReceta={e.descReceta}
                />)*/}
            </div>
        </>
    )
}
