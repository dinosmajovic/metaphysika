import * as Yup from 'yup';

export default Yup.object({
  firstName: Yup.string().max(15, 'max 15 letters').required('Required'),
  lastName: Yup.string().max(25, 'max 25 letters').required('Required'),
  phoneNumber: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  address: Yup.object().shape({
    country: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    line1: Yup.string().required('Required'),
    line2: Yup.string(),
    zipCode: Yup.string()
      .matches(/^[0-9]+$/, 'Character not allowed')
      .min(5, '5 digits')
      .required('Required')
  })
});
