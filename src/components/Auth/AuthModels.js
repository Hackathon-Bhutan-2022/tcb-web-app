import * as Yup from 'yup';

export const signupInitialValues = {
  email: '',
  role_id: null,
  password: '',
  profile: {
    name: '',
    licence_no: '',
    address: '',
    description: '',
    mobile_no: '',
  }
};

export const signupValidateSchema = Yup.object().shape({
  email: Yup.string().required('Email cant be blank').nullable(),
  password: Yup.string().required('Password cant be blank').nullable(),
  profile: Yup.object().shape({
    name: Yup.string().required('Field is required').nullable(),
    licence_no: Yup.string().required('Field is required').nullable(),
    mobile_no: Yup.string().required('Field is required').nullable(),
  })
});
