import React, { useContext, useState } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import RecipeContext from "../context/RecipeContext";

const objForm = {
  nameReceta: "",
  photoReceta: "",
  listaIngredientes: "",//objeto que almacena arreglos 
  descReceta: "",
};

const Creacionreceta = () => {
    //Contextos
    const {handleCreate} = useContext(RecipeContext);
    //Estados
  const [form, setForm] = useState(objForm);
    //Alert
  const [show, setShow] = useState(false);

  const handleForm = (e) => {
      setForm( {...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await handleCreate(form);
    if(resp.status === 201){
        //alert('Created');
        setShow(true);//alarma activa cuando se crea la receta
        setForm(objForm);
    }else{
      setShow(false);
    }
    
  };

  return (
    <div>
      <Alert variant="success" show={show}>
        Receta creada con exito!
      </Alert>
      <Form onSubmit={handleSubmit}>
        {/********Fila 1*********/}
        <Row>
          {/********Columna 1*********/}
          <Col>
            <Form.Group className="mb-3" controlId="productName">
              <Form.Label>Recipe name</Form.Label>
              <Form.Control
                name="nameReceta"
                type="text"
                placeholder="Recipe name"
                required
                value={form.nameReceta}
                onChange={handleForm}
              />
            </Form.Group>
          </Col>
          {/********Columna 2*********/}
          <Col>
            <Form.Group className="mb-3" controlId="photoReceta">
              <Form.Label>imagen url de la receta</Form.Label>
              <Form.Control
                name="photoReceta"
                type="text"
                placeholder="url img recipe"
                required
                value={form.photoReceta}
                onChange={handleForm}
              />
            </Form.Group>
          </Col>
        </Row>
        {/********Fila 2*********/}
        <Row>
        <Form.Group className="mb-3" controlId="listaIngredeintes">
            <Form.Label>Lista de Ingredientes</Form.Label>
            <Form.Control as="textarea" rows={3} 
                name="listaIngredientes"
                required
                value={form.listaIngredientes}
                onChange={handleForm}/>
            </Form.Group>  
        </Row> 
        {/********Fila 3*********/} 
        <Row>  
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripcion de la receta</Form.Label>
            <Form.Control as="textarea" rows={3} 
                name="descReceta"
                required
                value={form.descReceta}
                onChange={handleForm}/>
            </Form.Group>
        </Row>
        {/**********Botón de registro********/}
        <Button variant="success" type="submit">
          Create
        </Button>{" "}
      </Form>
    </div>
  );
};

export default Creacionreceta;
