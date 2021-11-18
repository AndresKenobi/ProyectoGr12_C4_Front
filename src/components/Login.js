import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
import {useContext, useState} from 'react'
import AuthContext from '../context/AuthContext'

export const Login = () => {
    //logica del Login...
    const {handleAuth} = useContext(AuthContext)
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const handleUser =(e)=>{
        setUser(e.target.value);
    }
    const handlePass =(e)=>{
        setPass(e.target.value);
    }
    const handleLogin =()=>{
        handleAuth(user,pass);
    }
    return (
        <>
            <Form>
                <h3>Login de acceso:</h3>
                <Container fluid>
                <Row className="align-items-center">
                    <Col sm={3} className="my-1">
                        {/*Usuario*/}
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">User</InputGroup.Text>
                            <FormControl
                            placeholder="Username" aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={user}
                            onChange={handleUser}
                            />
                        </InputGroup>
                    </Col>
                    <Col sm={3} className="my-1">
                        {/*Contraseña*/}
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Pass</InputGroup.Text>
                            <FormControl
                            placeholder="Password" aria-label="Password"
                            aria-describedby="basic-addon1" type="password"
                            value={pass}
                            onChange={handlePass}
                            />
                        </InputGroup>
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Form.Check type="checkbox" id="autoSizingCheck2" label="Remember me" />
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Button type="submit" onClick={handleLogin}>Submit</Button>
                    </Col>
                </Row>
                </Container>
            </Form>
        </>
    )
}
