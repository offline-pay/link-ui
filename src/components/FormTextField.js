import React from "react";
import { Form, InputGroup, Col } from "react-bootstrap";
import { Field } from "formik";


class FormTextField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      as,
      md,
      controlId,
      label,
      name,
      type,
      inputGroupPrepend
    } = this.props;

    return (
      <Field
        name={name}
        render={({ field, form }) => {
          const isValid = !form.errors[field.name];
          const isInvalid = form.touched[field.name] && !isValid;
          return (
            <Form.Group as={as} /*md={md} */controlId={controlId}>
              <Form.Label column sm="3">{label}</Form.Label>
              <Col sm="9">
                <InputGroup>
                  {inputGroupPrepend}
                  <Form.Control 
                    {...field}
                    type={type}
                    isValid={form.touched[field.name] && isValid}
                    isInvalid={isInvalid}
                    feedback={form.errors[field.name]}
                  />

                  <Form.Control.Feedback type="invalid">
                    {form.errors[field.name]}
                  </Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>
          );
        }}
      />
    );
  }
}

FormTextField.defaultProps = {
  type: "text",
  inputGroupPrepend: null
};

export default FormTextField;
