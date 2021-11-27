import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Registrarse from "../pages/Registrarse"

export const BarraOpciones = () => {
    return (
        <>
            <Container fluid>
                <Navbar bg="primary" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand href="#home">Pandaza2</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Registrarse">Registrarse</Nav.Link>
                            <Nav.Link href="/Tusrecetas">Tus recetas</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </Container>
        </>
    )
}
