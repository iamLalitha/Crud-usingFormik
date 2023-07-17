import {  useField } from 'formik'
import React from 'react'

function Custominput({label,...props }) {
    const[field,meta]=useField(props);
  
  return (
    <>
    <div className='checkbox'>
    <label>{label}</label>
    <input 
    {...field}
    {...props} 
    className={meta.error && meta.touched?'input-error':''}/>
    <span>I accept the terms & condition</span>
    </div>
    {meta.error && meta.touched && <p className='error'>{meta.error}</p>}
    </>
  )
}

export default Custominput