import React from 'react';
import * as Yup from 'yup';
import {Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const validateSchema = Yup.object().shape({
  email: Yup.string().required('Email cant be blank').nullable(),
  password: Yup.string().required('Password cant be blank').nullable(),
});

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <div align={'center'}>
      <Typography sx={{mt: 2}}>Sign up</Typography>
    </div>
  );
}
