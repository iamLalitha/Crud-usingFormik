import * as yup from 'yup';

const passwordRules=/^(?+.*\d)(?+.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 charaters, 1upper case letter,1 lowercase letter,1 numeric digit.
const basicSchema=yup.object().shape({
    email:yup.string().email('please enter the valid email address').required('This field is required '),
    age:yup.number().positive().integer().required('This field is required'),
    password: yup.string.min(5,"Minimum 5 param required").matches(passwordRules),
    cPassword:yup.string().oneOf([yup.ref('password'),null],'Password and confirm password are not matching'),
})