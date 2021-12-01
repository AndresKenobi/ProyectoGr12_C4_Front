import React, { useContext, useState } from "react";
import { Form, Button, Row, Col, Alert, Container } from "react-bootstrap";
import RecipeContext from "../context/RecipeContext";
//import AuthContext from '../context/AuthContext'

const ingredientes = {
  ingrediente: "",
  cantidad: ""
}

const objForm = {
  nameReceta: "",
  photoReceta: "",
  listaIngredientes: "",//objeto que almacena arreglos 
  descReceta: "",
};

const Creacionreceta = () => {
  //Contextos
  const { handleCreate } = useContext(RecipeContext);
  //Estados
  const [form, setForm] = useState(objForm);
  //Alert
  const [show, setShow] = useState(false);
  // Variable de estado ingredientes
  const [ingre, setIngre] = useState(ingredientes);
  //Lista ingredientes
  const [lista, setlista] = useState([]);

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await handleCreate(form);
    if (resp.status === 201) {
      //alert('Created');
      setShow(true);//alarma activa cuando se crea la receta
      setForm(objForm);
    } else {
      setShow(false);
    }

  };

  /***********************************************************************
   * MANIPULACION DE ARREGLO DE INGREDIENTES
   **************************************************************************/
  const handleIngredientes = (e) => {
    setIngre({ ...ingre, [e.target.name]: e.target.value });

  }

  const handleAgregar = (e) => {
    e.preventDefault(); // evitar se resetee campos de texto
    setlista([...lista, ingre])
    console.log("ingredientes:", lista)
    console.log("rev ingre:", ingredientes.ingrediente)

    //setShow(true); //estado alerta REGISTRO
    setIngre(ingredientes); // limpieza campos de texto despues de click registrar
  }

  return (
    <div>
      <Alert variant="success" show={show}>
        Receta creada con exito!
      </Alert>
      <Form onSubmit={handleSubmit}>
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
         * Fila 2 - MANEJA ARREGLO INGREDIENTES
        * ********* ******************************************************/}
        {/*<Form onSubmit={handleAgregar}>*/}
        <Row>
          <Form.Label>Lista de Ingredientes</Form.Label>
          {/********Columna 1 de Fila 2*********/}
          <Col>
            <Form.Group className="mb-3" controlId="ingrediente">
              <Form.Label>Ingrediente</Form.Label>
              <Form.Control
                name="ingrediente"
                type="text"
                placeholder="digite ingrediente"
                required
                value={form.ingrediente}
                onChange={handleIngredientes}
              />
            </Form.Group>
          </Col>

          {/********Columna 2 de Fila 2 *********/}
          <Col>
            <Form.Group className="mb-3" controlId="cantidad">
              <Form.Label>cantidad</Form.Label>
              <Form.Control
                name="cantidad"
                type="text"
                placeholder="cantidad"
                required
                value={form.cantidad}
                onChange={handleIngredientes}
              />
            </Form.Group>
          </Col>

          {/********  Columna 3 de Fila 2  *********/}
          <Col>
            <Form.Label>confirmacion</Form.Label>
            <Button onClick={handleAgregar} variant="warning" type="submit">
              Agregar Ingrediente
            </Button>
          </Col>

        </Row>
        {/*</Form>*/}

        {/****************************************************************
        *******Fila 3 DONDE MOSTRAREMOS INGREDIENTES AGREGADOS
        =======================================================*********/}
        {/**/}
        <Container fluid >
          <h6>Tus ingredientes agregados:</h6>
          <ul>{lista.map((index) => (
            <li key={index.cantidad}> Ingrediente: {index.ingrediente}  +     Cantidad: {index.cantidad} </li>
          ))}</ul>

        </Container>


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

        {/**********Botón de registro********/}
        <Button variant="success" type="submit">
          Crear Receta
        </Button>

      </Form>
    </div >
  );
};

export default Creacionreceta;
