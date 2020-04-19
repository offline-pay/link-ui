import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Form, Radio, Input, SubmitBtn, Button } from 'react-formik-ui';

import { merchantService } from '../services/merchant.service';

function AddEdit({ history, match }) {
    const { id } = match.params;
    const isAddMode = !id;

    const initialValues = {
        id: '',
        merchantId: '',
        merchantName: '',
        merchantEmail: ''
    };

    const [merchant, setMerchant] = useState({initialValues});

    const validationSchema = Yup.object().shape({
        merchantId: Yup.string()
            .required('Id is required'),

        merchantName: Yup.string()
            .required('Name is required'),

        merchantEmail: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
    });


    function onSubmit(fields, { setStatus, setSubmitting }) {
        setStatus();

        if (isAddMode) {
            addMerchant(fields, setSubmitting);
        } else {
            updateMerchant(id, fields, setSubmitting);
        }
    }


    function addMerchant(fields, setSubmitting) {
        merchantService.add(fields)
            .then(() => {
                history.push('.');
            })
            .catch(() => {
                setSubmitting(false);
            });
    }

    function updateMerchant(id, fields, setSubmitting) {
        merchantService.update(id, fields)
            .then(() => {
                history.push('..');
            })
            .catch(error => {
                console.log(error);
                setSubmitting(false);
            });
    }


    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} enableReinitialize={true} onSubmit={onSubmit}>
            {({ errors, touched, isSubmitting }) => {



                return (
                    <Form mode='themed'>
                        <fieldset>
                            <legend>{isAddMode ? 'Add Merchant' : 'Edit Merchant'}</legend>
                            <div className="form-row">
                                <div className="form-group col-5">
                                    <label>Name</label>
                                    <Field name="merchantName" type="text" className={'form-control' + (errors.merchantName && touched.merchantName ? ' is-invalid' : '')} />
                                    <ErrorMessage name="merchantName" component="div" className="invalid-feedback" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-5">
                                    <label>Merchant ID</label>
                                    <Field name="merchantId" type="text" className={'form-control' + (errors.merchantId && touched.merchantId ? ' is-invalid' : '')} />
                                    <ErrorMessage name="merchantId" component="div" className="invalid-feedback" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-5">
                                    <label>Reseller ID</label>
                                    <Field name="resellerId" type="text" className={'form-control' + (errors.resellerId && touched.resellerId ? ' is-invalid' : '')} />
                                    <ErrorMessage name="resellerId" component="div" className="invalid-feedback" />
                                </div>
                            </div>
                            {/*<div className="form-row">
                                <div className="form-group col-7">
                                    <label>Supported Invoice Currency</label>
                                    <Field name="invoiceCurrency" type="text" className={'form-control' + (errors.invoiceCurrency && touched.invoiceCurrency ? ' is-invalid' : '')} />
                                    <ErrorMessage name="invoiceCurrency" component="div" className="invalid-feedback" />
                                </div>
                            </div>*/}
                            <div className="form-row">
                                <div className="form-group col-7">
                                    <Radio
                                        inline
                                        name='thirdParty'
                                        label='Third Party Booking'

                                        options={[
                                            { value: '0', label: 'No' },
                                            { value: '1', label: 'Yes' },
                                            { value: '2', label: 'None' }
                                        ]}
                                    />
                                    <ErrorMessage name="thirdParty" component="div" className="invalid-feedback" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-7">
                                    <Radio
                                        inline
                                        name='pspBranding'
                                        label='PSP Branding'
                                        options={[
                                            { value: '0', label: 'No' },
                                            { value: '1', label: 'Yes' }
                                        ]}
                                    />
                                    <ErrorMessage name="pspBranding" component="div" className="invalid-feedback" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-7">
                                    <label>Soft Descriptor</label>
                                    <Field name="softDescriptor" type="text" className={'form-control' + (errors.softDescriptor && touched.softDescriptor ? ' is-invalid' : '')} />
                                    <ErrorMessage name="softDescriptor" component="div" className="invalid-feedback" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-7">
                                    <Radio
                                        inline
                                        name='tokenization'
                                        label='Tokenization'
                                        options={[
                                            { value: '0', label: 'No' },
                                            { value: '1', label: 'Yes' }
                                        ]}
                                    />
                                    <ErrorMessage name="tokenization" component="div" className="invalid-feedback" />
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                    {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                    Save
                                </button>
                                <Link to={isAddMode ? '.' : '..'} className="btn btn-link">Cancel</Link>
                            </div>
                        </fieldset>
                    </Form>
                );
            }}
        </Formik>
    );
}

export { AddEdit };