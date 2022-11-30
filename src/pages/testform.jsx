import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
 

const apiURL = 'http://localhost:8080/users/getAll/'
 
const sendEmailValidationRequest = async (email) => {
  try {
       const response = await axios.get(apiURL);
       return response.data.is_valid_format.value
  } catch (error) {
      throw error;
  }
}
 
const handleValidateEmail = async (email) => {
   const isValid = await sendEmailValidationRequest(email);
   return isValid;
}
 
const EmailForm = () => {
   const errors = {};
   return (
     <div style={{paddingTop: '2rem'}}>
       <Formik
               initialValues={{ email: '' }}
               onSubmit={async (values) => {
                   const validated = await handleValidateEmail(values.email);
                       if (!validated) {
                           errors.email = 'Invalid email';
                       } else {
                           errors.email = '';
                           console.log("SUBMITTED! ", JSON.stringify(values))
                       }
           }}
       >
           {({
               handleSubmit,
           }) => (
               <Form>
                   <Field type="email" name="email" />
                   {errors.email && (<div style={{color: 'red'}}>{errors.email}</div>)}
                   <button type="submit" onClick={handleSubmit}>
                       Submit
                   </button>
               </Form>
           )}
       </Formik>
    </div>
   )
}
export default EmailForm;