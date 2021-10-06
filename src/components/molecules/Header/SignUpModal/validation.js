import * as Yup from 'yup';

export default Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  phoneNumber: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Must be at least 6 digits'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Repeating password is required'),
  address: Yup.object().shape({
    country: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    line1: Yup.string().required('Required'),
    line2: Yup.string(),
    zipCode: Yup.string()
      .matches(/^[0-9]+$/)
      .min(5, '5 digits')
      .required('Requried')
  })
});
