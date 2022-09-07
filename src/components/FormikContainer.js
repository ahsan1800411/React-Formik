import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const initialValues = {};
const validationSchema = Yup.object({});

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
            <button
              type='submit'
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
