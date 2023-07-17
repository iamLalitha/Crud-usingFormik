import {  useField } from 'formik'
import React from 'react'

function CustomSelect({label,...props }) {
    const[field,meta]=useField(props);
    console.log(field)
    console.log(meta)
  return (
    <>
    <label>{label}</label>
    <select {...field}{...props} className={meta.error && meta.touched?'input-error':''}/>
    {meta.error && meta.touched && <p className='error'>{meta.error}</p>}
    </>
  )
}

export default CustomSelect;