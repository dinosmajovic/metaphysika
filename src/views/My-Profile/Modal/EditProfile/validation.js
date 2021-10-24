import * as Yup from 'yup';

export default Yup.object({
  firstName: Yup.string().max(15, 'max 15 letters').required('Reqeuired'),
  lastName: Yup.string().max(30, 'max 30 letters').required('Required'),
  phoneNumber: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  address: Yup.object().shape({
    country: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    line1: Yup.string().required('Required'),
    line2: Yup.string(),
    zipCode: Yup.string()
      .matches(/^[0-9]+$/, 'Character not allowed')
      .max(10, 'max 10 digits')
      .required('Required')
  })
});
