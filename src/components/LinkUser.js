import React, { Component } from 'react'
import { Container, Col, InputGroup, Form, Row, Dropdown } from "react-bootstrap";
import FormTextField from "./FormTextField";
import { useSpring, animated } from "react-spring";
import { Spring } from 'react-spring/renderprops'

let AnimatedRow = animated(Form.Row);

let animation = {
    transform: "translate3d(0px,0,0) scale(1) rotateX(0deg)"
};

class LinkUser extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        /* let props = useSpring(animation); */
        return (

            <Container>
                <Form.Row>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" value="Choose...">
                            <option>Mr.</option>
                            <option>Mrs.</option>
                            <option>Ms.</option>
                        </Form.Control>
                    </Form.Group>

                    


                    <FormTextField
                        as={Col}
                        md="5"
                        controlId="validationFormik01"
                        label="First name"
                        type="text"
                        name="firstName"
                    />

                    <FormTextField
                        as={Col}
                        md="5"
                        controlId="validationFormik02"
                        label="Last name"
                        type="text"
                        name="lastName"
                    />
                </Form.Row>

                <FormTextField
                    as={Col}
                    md="4"
                    controlId="validationFormikUsername"
                    label="Username"
                    type="text"
                    name="username"
                    inputGroupPrepend={
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        </InputGroup.Prepend>
                    }
                />
            </Container>
        );
    }
}
export default LinkUser