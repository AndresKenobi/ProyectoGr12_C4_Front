import React, { useContext, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
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

  const handleForm = (e) => {
      setForm( {...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await handleCreate(form);
    if(resp.status === 201){
        alert('Created');
        setForm(objForm);
    }
    
  };

  return (
    <div>
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
              <Form.Label>Product price</Form.Label>
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
            <Form.Label>Descripcion de la receta</Form.Label>
            <Form.Control as="textarea" rows={3} 
                name="listaIngredeintes"
                required
                value={form.listaIngredeintes}
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
