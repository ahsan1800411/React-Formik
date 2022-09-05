import React from 'react';
import { useFormik } from 'formik';

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
  const {
    // handleChange,
    // values,
    handleSubmit,
    errors,
    // handleBlur,
    touched,
    getFieldProps,
  } = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <form style={{ marginTop: '18px' }} onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input type='text' name='name' id='name' {...getFieldProps('name')} />
      {errors.name && touched.name ? <div>{errors.name}</div> : null}
      <label htmlFor='email'>Email:</label>
      <input type='email' name='email' id='email' {...getFieldProps('email')} />
      {errors.email && touched.email ? <div>{errors.email}</div> : null}
      <label htmlFor='channel'>Channel :</label>
      <input
        type='channel'
        name='channel'
        id='channel'
        {...getFieldProps('channel')}
      />
      {errors.channel && touched.channel ? <div>{errors.channel}</div> : null}
      <button type='submit'>Submit</button>
    </form>
  );
};

export default YoutubeForm;
