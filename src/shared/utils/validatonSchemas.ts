import * as yup from 'yup';

// auth
const emailYupValidation = yup
  .string()
  .matches(
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    'Invalid email'
  )
  .required('Email is requiered')
  .max(24, 'Max 12 characteres');

const passwordYupValidation = yup
  .string()
  .required('Password is requiered')
  .min(8, 'Min 8 characteres')
  .max(33, 'Max 12 characteres');

export const loginFormSchema = yup.object({
  email: emailYupValidation,
  password: passwordYupValidation,
});

export const registerFormSchema = yup.object({
  name: yup
    .string()
    .required('Full name is requiered')
    .min(2, 'Min 2 characteres')
    .max(30, 'Max 12 characteres'),
  email: emailYupValidation,
  password: passwordYupValidation,
  password_confirmation: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});
