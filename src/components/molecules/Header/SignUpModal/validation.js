import * as Yup from 'yup';

export default Yup.object({
  firstName: Yup.string().max(25, 'max 25 characters').required('Required'),
  lastName: Yup.string().max(25, 'max 25 characters').required('Required'),
  phoneNumber: Yup.string().max(25, 'max 25 characters').required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .max(40, 'max 40 characters')
    .required('Required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Must be at least 6 digits')
    .max(25, 'max 25 characters'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  address: Yup.object().shape({
    country: Yup.string().required('Required'),
    city: Yup.string().required('Required').max(40, 'max 40 characters'),
    line1: Yup.string().required('Required').max(40, 'max 40 characters'),
    line2: Yup.string().max(40, 'max 40 characters'),
    zipCode: Yup.string()
      .matches(/^[0-9]+$/, 'Character not allowed')
      .max(40, 'max 40 characters')
      .required('Requried')
  })
});
