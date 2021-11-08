import * as yup from 'yup';

export interface IFormData {
  email: string;
  password: string;
}

export const initialValues: IFormData = {
  email: '',
  password: '',
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
});
