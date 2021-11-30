import React from 'react'
import Toast from 'react-bootstrap/Toast'
//import ToastContainer from 'react-bootstrap/ToastContainer'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

export const ParrillaRecetas = () => {

    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

    return (
        <>
            <h3>Somos el Recetario que Sasona el Mundo!</h3>
            <Row>
                <Col md={6} className="mb-2">
                    <Button onClick={toggleShowA} className="mb-2">
                        Toggle Toast <strong>with</strong> Animation
                    </Button>
                    <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                    </Toast>
                </Col>
                <Col md={6} className="mb-2">
                    <Button onClick={toggleShowB} className="mb-2">
                        Toggle Toast <strong>without</strong> Animation
                    </Button>
                    <Toast onClose={toggleShowB} show={showB} animation={false}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                    </Toast>
                </Col>
            </Row>

        </>
    )
}
