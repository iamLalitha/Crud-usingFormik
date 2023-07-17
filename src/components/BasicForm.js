import { useFormik } from 'formik';
import {useState} from 'react'
const BasicForm = () => {
  const {values,handleBlur,handleChange} =useFormik({
    initialValues:{
      email: '',
      age:'',
      password:'',
      cPassword:''
    }
  });
  
  return (
    <form autoComplete="off">
      <label htmlFor="email">Email</label>
      <input id="email" 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email} 
      type="email" 
      placeholder="Enter your email" />

      <label htmlFor="age">Age</label>
      <input id="age" 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.age} 
      type="number" 
      placeholder="age" />

      <label htmlFor="password">Password</label>
      <input id="password" 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.password} 
      type="password" 
      placeholder="Enter your password" />

      <label htmlFor="cPassword">Confirm Password</label>
      <input id="cPassword" 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.cPassword} 
      type="password" 
      placeholder="Enter your cPassword" />
      <button type='submit'>Submit</button>
    </form>
  );
};
export default BasicForm;
