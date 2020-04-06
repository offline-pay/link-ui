import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Field, Formik, Form } from 'formik';
import LinkUser from './LinkUser';
import Invoice from './Invoice';
import { Col, Row } from 'react-bootstrap';

class LinkPay extends Component {

  render() {
    return (
      <div>
        <Formik
          initialValues={{ email: '', password: '' }}
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
            /* and other goodies */
          }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row>
                  <LinkUser />
                </Row>
                <Row>
                  <Invoice />
                </Row>
              </Form>
            )}
        </Formik>
      </div >
    )
  }
}

export default LinkPay