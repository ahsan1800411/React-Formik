import { ErrorMessage, Field } from 'formik';
import React from 'react';

export default function Input({ name, label, ...rest }) {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <Field id={name} name={name} {...rest} />

      <ErrorMessage name={name} />
    </>
  );
}
