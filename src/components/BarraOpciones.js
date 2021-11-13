import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

export const BarraOpciones = () => {
    return (
        <>
        <Container fluid>
            <Navbar bg="primary" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Pandaza2</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Registro</Nav.Link>
                        <Nav.Link href="#pricing">Tus recetas</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Container>        
        </>
    )
}
