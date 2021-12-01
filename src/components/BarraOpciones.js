import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
//import Registrarse from "../pages/Registrarse"
import { Outlet, useNavigate } from 'react-router'
import AuthContext from '../context/AuthContext'

export const BarraOpciones = () => {

    const { handleLogout } = useContext(AuthContext)

    /* Este cerrar sesion de manejo mejor de AuthContex
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/SinAcceso");
    }*/

    return (
        <>
            <Container fluid>
                <Navbar bg="primary" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand href="/">Pandaza2</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Registrarse">Registrarse</Nav.Link>
                            <Nav.Link href="/Tusrecetas">Tus recetas</Nav.Link>
                            <Nav.Link href="#logout" onClick={handleLogout}>log Out</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </Container>
        </>
    )
}
