import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export const Login = () => {
    return (
        <>
            <Form>
                <h3>Login de acceso:</h3>

                <Row className="align-items-center">
                    <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                            Name
                        </Form.Label>
                        <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
                    </Col>
                    <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
                            Username
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Text>@</InputGroup.Text>
                            <FormControl id="inlineFormInputGroupUsername" placeholder="Username" />
                        </InputGroup>
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Form.Check type="checkbox" id="autoSizingCheck2" label="Remember me" />
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
