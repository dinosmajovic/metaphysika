import * as Yup from 'yup';

export default Yup.object({
  cardNumber: Yup.string().min(19).required('Required'),
  cardName: Yup.string().required('Required'),
  expirationDate: Yup.string().required('Required'),
  cvv: Yup.string().required('Required')
});
