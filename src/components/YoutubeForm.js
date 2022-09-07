import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
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
  phNumbers: [''],
};
const savedValues = {
  name: 'Ahsan ',
  email: 'ahsan@gmail.com',
  channel: 'no',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers: ['', ''],
  phNumbers: [''],
};

const onSubmit = (values, onSubmitProps) => {
  console.log(values);
  onSubmitProps.setSubmitting(false);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Please enter valid email').required('Required'),
  channel: Yup.string().required('Required'),
});

const YoutubeForm = () => {
  const [formValues, setFormValues] = useState(null);
  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // validateOnBlur={false}
      // validateOnChange={false}
      validateOnMount
      enableReinitialize
    >
      {(formik) => {
        return (
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
            <Field
              type='text'
              name='channel'
              id='channel'
              placeholder='Channel'
            />

            <ErrorMessage name='channel' />

            {/* <label htmlFor='facebook'>Facebook :</label>
        <Field type='text' name='social.facebook' id='facebook' />
        <label htmlFor='twitter'>Twitter :</label>
        <Field type='text' name='social.twitter' id='twitter' /> */}

            {/* <label htmlFor='primaryPhone'>Phone Number Primary :</label>
        <Field type='text' name='phoneNumbers[0' id='primaryPhone' />
        <label htmlFor='secondaryPhone'>Phone Number Secondary :</label>
        <Field type='text' name='phoneNumbers[1]' id='secondaryPhone' /> */}

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

            <FieldArray name='phNumbers'>
              {(props) => {
                const { remove, push, form } = props;
                const {
                  values: { phNumbers },
                } = form;
                return (
                  <div>
                    {phNumbers.map((phNumber, index) => (
                      <div key={index}>
                        <Field name={`phNumber[${index}]`} />
                        <button onClick={() => push('')}>+</button>
                        <button onClick={() => remove()}>-</button>
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>

            <button
              type='submit'
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
            <button type='submit' onClick={() => setFormValues(savedValues)}>
              Load Data
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default YoutubeForm;
