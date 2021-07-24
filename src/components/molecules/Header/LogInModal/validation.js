import * as Yup from 'yup';

export default Yup.object({
  password: Yup.string().required('Password is required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});
