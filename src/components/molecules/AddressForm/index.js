import { FormContainer, FormRow } from './styled';
import Input from 'components/atoms/Input';
import Select from 'components/atoms/Select';
import COUNTRIES from 'assets/data/countries';

const AddressForm = ({ formik }) => {
  return (
    <FormContainer>
      <FormRow>
        <Input label="First name" name="firstName" formik={formik} />
        <Input label="Last name" name="lastName" formik={formik} />
      </FormRow>

      <Input label="Email" name="email" formik={formik} />

      <FormRow>
        <Select
          options={COUNTRIES}
          label="Country"
          name="address.country"
          formik={formik}
        />
        <Input label="City" name="address.city" formik={formik} />
      </FormRow>

      <FormRow>
        <Input label="Address" name="address.line1" formik={formik} />
        <Input
          placeholder="Flat, apartment, etc. (optional)"
          name="address.line2"
          formik={formik}
        />
      </FormRow>
      <FormRow>
        <Input
          label="Phone number"
          name="phoneNumber"
          formik={formik}
          isMasked
          mask="+999 99 999 999 999"
        />
        <Input
          label="Zip"
          name="address.zipCode"
          formik={formik}
          isMasked
          mask="99999"
        />
      </FormRow>
    </FormContainer>
  );
};

export default AddressForm;
