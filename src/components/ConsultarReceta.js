import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'


export const ConsultarReceta = () => {
    return (
        <>

            <br />
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">Consultas</InputGroup.Text>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <br />

        </>
    )
}
