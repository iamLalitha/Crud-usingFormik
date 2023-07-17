import { useFormik } from 'formik';
// import {useState} from 'react'
import { basicSchema } from '../schemas';
const onSubmit=async (values,actions)=>{
  console.log(values);
  console.log(actions);
  await new Promise((resolve)=>setTimeout(resolve,1000));
  actions.resetForm();
}
const BasicForm = () => {
  const {values,handleBlur,touched,isSubmitting,handleChange,errors,handleSubmit} =useFormik({
    initialValues:{
      email: '',
      age:'',
      password:'',
      cPassword:''
    },
    validationSchema: basicSchema,
    onSubmit
  });
  console.log(touched);
  
  return (
    <form onSubmit={handleSubmit}autoComplete="off">
      <label htmlFor="email">Email</label>
      <input id="email" 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email} 
      type="email" 
      placeholder="Enter your email"
      className={errors.email && touched.email?"input-error":""} />
{errors.email && touched.email && <p className='error'>{errors.email}</p>}
      <label htmlFor="age">Age</label>
      <input id="age" 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.age} 
      type="number" 
      placeholder="age"
      className={errors.age && touched.age?"input-error":""} />
{errors.age && touched.age && <p className='error'>{errors.age}</p>}
      <label htmlFor="password">Password</label>
      <input id="password" 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.password} 
      type="password" 
      placeholder="Enter your password"
      className={errors.password && touched.password?"input-error":""} />
{errors.password && touched.password && <p className='error'>{errors.password}</p>}
      <label htmlFor="cPassword">Confirm Password</label>
      <input id="cPassword" 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.cPassword} 
      type="password" 
      placeholder="Enter your cPassword"
      className={errors.cPassword && touched.cPassword?"input-error":""} />
{errors.cPassword && touched.cPassword && <p className='error'>{errors.cPassword}</p>}      
      <button disabled={isSubmitting} type='submit'>Submit</button>
    </form>
  );
};
export default BasicForm;
