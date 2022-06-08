import * as Yup from 'yup';

export const signupInitialValues = {
  email: '',
  role_id: null,
  password: '',
  tour_agency_profile_attributes: {
    name: '',
    licence_no: '',
    address: '',
    description: '',
    mobile_no: ''
  }
};

export const signupValidateSchema = Yup.object().shape({
  email: Yup.string().required('Email cant be blank').nullable(),
  password: Yup.string().required('Password cant be blank').nullable(),
});
