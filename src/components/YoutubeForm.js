import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  channel: '',
};

const onSubmit = (values) => console.log(values);

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Please enter valid email').required('Required'),
  channel: Yup.string().required('Required'),
});

const YoutubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
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
