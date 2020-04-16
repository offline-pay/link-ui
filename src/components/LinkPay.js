import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Field, Formik, Form } from 'formik';
import LinkUser from './LinkUser';
import Invoice from './Invoice';
import { Col, Row, Button, Container } from 'react-bootstrap';
import * as Yup from 'yup';

class LinkPay extends Component {




  render() {
    const schema = Yup.object().shape({
      firstName: Yup.string().required(),
      lastName: Yup.string().required()

    });

    return (
      <div>
        <Formik
          validationSchema={schema}
          initialValues={{ email: '', password: '', firstName: 'John', lastName: 'Doe' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isValid
            /* and other goodies */
          }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row>
                  <LinkUser />
                </Row>
                <Row>
                  <Invoice />
                </Row>
                <Row>
                  <Container>

                    <Button as="input" type="submit" value="Create Link" />
                  </Container>
                </Row>

              </Form>
            )}
        </Formik>
      </div >
    )
  }
}

export default LinkPay