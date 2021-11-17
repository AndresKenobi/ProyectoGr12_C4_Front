import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import ButtonGroup from 'react-bootstrap/ButtonGroup'
//import radios from 'react-bootstrap/Ratio'
//import ToggleButton from 'react-bootstrap/ToggleButton'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

//import { Container } from 'react-bootstrap'
//import InputGroup from 'react-bootstrap/InputGroup'
//import FormControl from 'react-bootstrap/FormControl'

export const Creacionreceta = () => {
    const [radioValue, setRadioValue] = React.useState("foo");

    return (
        <>
            <Form>

                <Row className="mb-3">
                    <h2>
                    </h2>
                    <Form.Group as={Col} controlId="formGridNombre">
                        <Form.Label>Nombre Receta</Form.Label>
                        <Form.Control type="Nombre" placeholder="Ingrese nombre" />
                    </Form.Group>
                    <h2>
                    </h2>
                    
                    <Form.Group controlId="formFileSm" className="mb-3">
                        <Form.Label>Imagen</Form.Label>
                        <h2>
                    </h2>
                        <Container>
                        <Row>
                            <Col xs={1} md={4}>
                                <Image src="https://visitcubago.com/wp-content/uploads/2021/06/arroz-con-pollo-y-maiz-foto-principal-banner-800x400.jpg?text=First slide&bg=373940" fluid />
                            </Col>
                        </Row>
                    </Container>
                    <h2>
                    </h2>
                        <Form.Control type="file" size="sm" />
                    </Form.Group>
                </Row>
                <Row>
                    <Col>
                        <Form.Control placeholder="Ingrediente" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Cantidad" />
                    </Col>
                </Row>
                <h2>
                </h2>
                <Button variant="primary" type="submit">
                    Agregar
                </Button>
                <h2>
                </h2>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Ingrediente</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                </Table>
                <h2>
                </h2>
                <Button variant="primary" type="submit">
                    Eliminar
                </Button>
                <h2>
                </h2>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Indicaciones</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
        </>
    )
}