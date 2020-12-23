import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Grid, TextField} from '@material-ui/core';
import { Height } from '@material-ui/icons';
import './App.css';

interface Props {
  handleNext: () => void
}

const FormOne: React.FC<Props> = ({ handleNext }) => {
  return ( <div className="">
    <Formik
      initialValues={{ firstName: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required')
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          handleNext();
        }, 400);
      }}
    >
      {(Formik)=>{
        return (
          <Form>
            <h1>Personal Information</h1>
           <Grid container spacing={3} justify="center" >
           <Grid item sm={4} xs={5} >
             <Field  name="First Name"
             as={TextField}
             label="First Name"
             varient="outlined"
             helperText={<ErrorMessage name="LastName" component="Ok"/>}
             className="styles"/>
           </Grid>
           </Grid>
          
{/* line */}
<Grid container spacing={3} justify="center">
<Grid item sm={4} xs={5}>
  <Field name="last Name"
  as={TextField}
  label="Last Name"
  varient="outlined" className="styles"/>
  
</Grid>
</Grid>

<Grid container spacing={3} justify="center">
<Grid item sm={4} xs={5}>
  <Field name="Father Name"
  as={TextField}
  label="Father Name"
  varient="outlined" className="styles"/>
  
</Grid>
</Grid>


<Grid container spacing={3} justify="center">
<Grid item sm={4} xs={5}>
  <Field name="Age"
  as={TextField}
  label="Age"
  varient="outlined" className="styles"/>
  
</Grid>
</Grid>

<Grid container spacing={3} justify="center">
<Grid item sm={4} xs={5}>
  <Field name="Phone Number"
  as={TextField}
  label="Phone Number"
  varient="outlined" className="styles"/>
  
</Grid>
</Grid>












           {/* <button onClick={handleNext}>Submit</button> */}
           
           
      </Form>

        )
      }}
      {/* <Form>
        
       
      </Form> */}

      
    </Formik>
    </div>
  );
};

export default FormOne;


// import React from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';


// interface Props {
//   handleNext: () => void
// }

// const FormOne: React.FC<Props> = ({ handleNext }) => {
//   return (

//     <div>
//       <h1>Personal Information</h1>
//     <Formik
//       initialValues={{ firstName: '' }}
//       validationSchema={Yup.object({
//         firstName: Yup.string()
//           .max(15, 'Must be 15 characters or less')
//           .required('Required')
//       })}
//       onSubmit={(values) => {
//         setTimeout(() => {
//           console.log(JSON.stringify(values, null, 2));
//           handleNext();
//         }, 400);
//       }}


      
//     >
//       <Form>
//         <label htmlFor="firstName">Last Name</label>
//         <Field name="firstName" type="text" />
//         <ErrorMessage name="firstName" />

//         <br />

        
//       </Form>
//     </Formik>


// <Formik
// initialValues={{ firstName: '' }}
// validationSchema={Yup.object({
//   firstName: Yup.string()
//     .max(15, 'Must be 15 characters or less')
//     .required('Required')
// })}
// onSubmit={(values) => {
//   setTimeout(() => {
//     console.log(JSON.stringify(values, null, 2));
//     handleNext();
//   }, 400);
// }}



// >
// <Form>
//   <label htmlFor="firstName">Last Name</label>
//   <Field name="Last Name" type="text" />
//   <ErrorMessage name="Last Name" />

//   <br />

//   <button type="submit">Submit</button>
// </Form>
// </Formik>


// <Formik
// initialValues={{ Age: '' }}
// validationSchema={Yup.object({
//   Age: Yup.number()
//     .max(15, 'Must be 15 characters or less')
//     .required('Required')
// })}
// onSubmit={(values) => {
//   setTimeout(() => {
//     console.log(JSON.stringify(values, null, 2));
//     handleNext();
//   }, 400);
// }}



// >
// <Form>
//   <label htmlFor="firstName">Age</label>
//   <Field name="Age" type="text" />
//   <ErrorMessage name="Last Name" />

//   <br />

//   <button type="submit">Submit</button>
// </Form>
// </Formik>


// </div>
//   );
// };

// export default FormOne;