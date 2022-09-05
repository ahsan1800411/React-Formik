import React from 'react';
import { useFormik } from 'formik';

const YoutubeForm = () => {
  const { handleChange, values } = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: '',
    },
  });

  console.log(values);
  return (
    <form style={{ marginTop: '18px' }}>
      <label htmlFor='name'>Name:</label>
      <input
        type='text'
        name='name'
        id='name'
        value={values.name}
        onChange={handleChange}
      />
      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        name='email'
        id='email'
        value={values.email}
        onChange={handleChange}
      />
      <label htmlFor='channel'>Channel :</label>
      <input
        type='channel'
        name='channel'
        id='channel'
        value={values.channel}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default YoutubeForm;
