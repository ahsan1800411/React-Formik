import { ErrorMessage, Field } from 'formik';
import React from 'react';

export default function TextArea({ name, label, ...rest }) {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <Field as='textarea' id={name} name={name} {...rest} />

      <ErrorMessage name={name} />
    </>
  );
}
