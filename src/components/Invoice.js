import React, { Component } from 'react'
import { Container, Col, InputGroup, Form, Row, Dropdown } from "react-bootstrap";
import FormTextField from "./FormTextField";
import { useSpring, animated } from "react-spring";
import { Spring } from 'react-spring/renderprops'


class Invoice extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Form.Row>
                    <FormTextField
                        as={Col}
                        controlId="validationFormik01"
                        label="Invoice Amount"
                        type="text"
                        name="amount-major"
                    />
                </Form.Row>
                <Form.Row>
                    <FormTextField
                        as={Col}
                        controlId="validationFormik02"
                        label="Invoice Currency"
                        type="text"
                        name="currency"
                    />
                </Form.Row>
                <Form.Row>
                    <FormTextField
                        as={Col}
                        controlId="validationFormik02"
                        label="Invoice Number/ Booking Reference"
                        type="text"
                        name="invoiceNumber"
                    />
                </Form.Row>

                <Form.Row>
                    <FormTextField
                        as={Col}
                        controlId="validationFormik02"
                        label="elink Validity"
                        type="text"
                        name="elinkValidity"
                    />
                </Form.Row>

                <Form.Row>
                    <FormTextField
                        as={Col}
                        controlId="validationFormik02"
                        label="Booking/Purchase Description"
                        type="text"
                        name="description"
                    />
                </Form.Row>


                
                <Form.Row>
                    <FormTextField
                        as={Col}
                        controlId="validationFormik02"
                        label="Language"
                        type="text"
                        name="language"
                    />
                </Form.Row>
            </Container>
        );
    }
}
export default Invoice