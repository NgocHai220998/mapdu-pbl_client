import * as yup from 'yup';

export interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const initialValues: IFormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
}

export const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});
