import * as Yup from 'yup';

export default Yup.object({
  firstName: Yup.string().required('Reqeuired'),
  lastName: Yup.string().required('Required'),
  phoneNumber: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  address: Yup.object().shape({
    country: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    line1: Yup.string().required('Required'),
    line2: Yup.string(),
    zipCode: Yup.string().required('Required')
  })
});
