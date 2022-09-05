import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = {
  name: '',
  email: '',
  channel: '',
};

const onSubmit = (values) => console.log(values);

// custom validtion but this validate function is built in formik
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !values.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    errors.email = 'Invalid Email format';
  }
  if (!values.channel) {
    errors.channel = 'Required';
  }

  return errors;
};

const YoutubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form style={{ marginTop: '18px' }}>
        <label htmlFor='name'>Name:</label>
        <Field type='text' name='name' id='name' />
        <ErrorMessage name='name' />
        <label htmlFor='email'>Email:</label>
        <Field type='email' name='email' id='email' />
        <ErrorMessage name='email' />
        <label htmlFor='channel'>Channel :</label>
        <Field type='channel' name='channel' id='channel' />

        <ErrorMessage name='channel' />

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
