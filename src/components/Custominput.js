import {  useField } from 'formik'
import React from 'react'

function Custominput({label,...props }) {
    const[field,meta]=useField(props);
    console.log(field)
    console.log(meta)
  return (
    <>
    <label>{label}</label>
    <input {...field}{...props} className={meta.error && meta.touched?'input-error':''}/>
    {meta.error && meta.touched && <p className='error'>{meta.error}</p>}
    </>
  )
}

export default Custominput