import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const initialValues = {
  email: '',
};
const validationSchema = Yup.object({
  email: Yup.string().email().required('Required'),
});

const onSubmit = (values) => {
  console.log(values);
};

const FormikContainer = () => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control='input'
              type='email'
              name='email'
              label='Email'
            />
            <button type='submit'>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
