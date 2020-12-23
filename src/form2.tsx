import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Grid, TextField} from '@material-ui/core';
import './App.css';

interface Props {
  handleNext: () => void
}

const FormTwo: React.FC<Props> = ({ handleNext }) => {
  return ( <div>
    <h1>Educational Information</h1>
          <Formik
      initialValues={{lastName: '' }}
      validationSchema={Yup.object({
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required')
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          // setSubmitting(false);
          handleNext()
        }, 400);
      }}
    >
      <Form>
      <Grid container spacing={3} justify="center" >
           <Grid item sm={4} xs={5} >
             <Field  name="Qualification"
             as={TextField}
             label="Qualification"
             varient="outlined"
             helperText={<ErrorMessage name="LastName" component="Ok"/>}
             className="styles"/>
           </Grid>
           </Grid>

           <Grid container spacing={3} justify="center" >
           <Grid item sm={4} xs={5} >
             <Field  name="Last educational institute name"
             as={TextField}
             label="University Name"
             varient="outlined"
             helperText={<ErrorMessage name="LastName" component="Ok"/>}
             className="styles"/>
           </Grid>
           </Grid>

           <Grid container spacing={3} justify="center" >
           <Grid item sm={4} xs={5} >
             <Field  name="Year of Graduation"
             as={TextField}
             label="Year of Graduation"
             varient="outlined"
             helperText={<ErrorMessage name="LastName" component="Ok"/>}
             className="styles"/>
           </Grid>
           </Grid>

           <Grid container spacing={3} justify="center" >
           <Grid item sm={4} xs={5} >
             <Field  name="GPA"
             as={TextField}
             label="GPA"
             varient="outlined"
             helperText={<ErrorMessage name="LastName" component="Ok"/>}
             className="styles"/>
           </Grid>
           </Grid>

        {/* <button onSubmit={handleNext}>Submit</button> */}

        
      </Form>
    </Formik>

      {/* break */}
    <Formik
      initialValues={{lastName: '' }}
      validationSchema={Yup.object({
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required')
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          // setSubmitting(false);
          handleNext()
        }, 400);
      }}
    >
      <Form>

     
      </Form>
    </Formik>
    </div>
  );
};

export default FormTwo;