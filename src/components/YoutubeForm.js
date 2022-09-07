import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import Error from './Error';

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers: ['', ''],
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
        <ErrorMessage name='name' component={Error} />
        <label htmlFor='email'>Email:</label>
        <Field type='email' name='email' id='email' />
        <ErrorMessage name='email'>
          {(error) => {
            return <div style={{ color: 'red' }}>{error}</div>;
          }}
        </ErrorMessage>
        <label htmlFor='channel'>Channel :</label>
        <Field type='text' name='channel' id='channel' placeholder='Channel' />

        <ErrorMessage name='channel' />

        {/* <label htmlFor='facebook'>Facebook :</label>
        <Field type='text' name='social.facebook' id='facebook' />
        <label htmlFor='twitter'>Twitter :</label>
        <Field type='text' name='social.twitter' id='twitter' /> */}

        <label htmlFor='primaryPhone'>Phone Number Primary :</label>
        <Field type='text' name='phoneNumbers[0' id='primaryPhone' />
        <label htmlFor='secondaryPhone'>Phone Number Secondary :</label>
        <Field type='text' name='phoneNumbers[1]' id='secondaryPhone' />

        {/* <Field as='textarea' name='channel' id='channel' />

        <Field name='address'>
          {(props) => {
            const { field } = props;
            return (
              <>
                <input type='text' {...field} />
              </>
            );
          }}
        </Field> */}

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
