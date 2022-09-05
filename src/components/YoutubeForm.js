import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
  name: '',
  email: '',
  channel: '',
};

const onSubmit = (values) => console.log(values);

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
  const { handleChange, values, handleSubmit, errors } = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <form style={{ marginTop: '18px' }} onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input
        type='text'
        name='name'
        id='name'
        value={values.name}
        onChange={handleChange}
      />
      {errors.name ? <div>{errors.name}</div> : null}
      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        name='email'
        id='email'
        value={values.email}
        onChange={handleChange}
      />
      {errors.email ? <div>{errors.email}</div> : null}
      <label htmlFor='channel'>Channel :</label>
      <input
        type='channel'
        name='channel'
        id='channel'
        value={values.channel}
        onChange={handleChange}
      />
      {errors.channel ? <div>{errors.channel}</div> : null}
      <button type='submit'>Submit</button>
    </form>
  );
};

export default YoutubeForm;
