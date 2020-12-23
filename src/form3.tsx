import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Grid, TextField} from '@material-ui/core';
import './App.css'

interface Props {
  handleNext: () => void
}

const FormThree: React.FC<Props> = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{  email: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          handleNext()
        }, 400);
      }}
    >
      <Form>
      

           <Grid container spacing={3} justify="center" >
           <Grid item sm={4} xs={5} >
             <Field  name="Purpose of Scholorship"
             as={TextField}
             label="Purpose of Scholorship"
             varient="outlined"
             helperText={<ErrorMessage name="LastName" component="Ok"/>}
             className="styles"/>
           </Grid>
           </Grid>

           <Grid container spacing={3} justify="center" >
           <Grid item sm={4} xs={5} >
             <Field  name="email"
             as={TextField}
             label="Email"
             varient="outlined"
             helperText={<ErrorMessage name="LastName" component="Ok"/>}
             className="styles"/>
           </Grid>
           </Grid>
        {/* <button type="submit">Submit</button> */}

        
      </Form>
    </Formik>
  );
};

export default FormThree;