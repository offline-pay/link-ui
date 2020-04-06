import React, { Component } from 'react'
import { Container, Col, InputGroup, Form, Row, Dropdown } from "react-bootstrap";
import FormTextField from "./FormTextField";
import { useSpring, animated } from "react-spring";
import { Spring } from 'react-spring/renderprops'


class LinkUser extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Form.Group as={Row} controlId="formGridState">
                    <Form.Label>Salutation</Form.Label>
                    <Form.Control as="select" value="Choose...">
                        <option>Mr.</option>
                        <option>Mrs.</option>
                        <option>Ms.</option>
                    </Form.Control>
                </Form.Group>

                <FormTextField
                    as={Row}
                    controlId="validationFormik01"
                    label="First name"
                    type="text"
                    name="firstName"
                />
                <FormTextField
                    as={Row}
                    controlId="validationFormik02"
                    label="Last name"
                    type="text"
                    name="lastName"
                />

            </Container>
        );
    }
}
export default LinkUser