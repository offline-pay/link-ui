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

                <FormTextField
                    as={Row}
                    controlId="validationFormik01"
                    label="Invoice Amount"
                    type="text"
                    name="amount-major"
                />
                <FormTextField
                    as={Row}
                    controlId="validationFormik02"
                    label="Invoice Currency"
                    type="text"
                    name="currency"
                />
                <FormTextField
                    as={Row}
                    controlId="validationFormik02"
                    label="Invoice Number/ Booking Reference"
                    type="text"
                    name="invoiceNumber"
                />

                <FormTextField
                    as={Row}
                    controlId="validationFormik02"
                    label="elink Validity"
                    type="text"
                    name="elinkValidity"
                />
                <FormTextField
                    as={Row}
                    controlId="validationFormik02"
                    label="Booking/Purchase Description"
                    type="text"
                    name="description"
                />
                <FormTextField
                    as={Row}
                    controlId="validationFormik02"
                    label="Language"
                    type="text"
                    name="language"
                />
            </Container>
        );
    }
}
export default Invoice