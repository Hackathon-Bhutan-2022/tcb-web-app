import React, {useContext} from 'react';
import * as Yup from 'yup';
import {Button, Card, Container, InputAdornment, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {Field, Form, Formik} from 'formik';
import {TextField} from 'formik-mui';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import './Login.scss';
import CottageIcon from '@mui/icons-material/Cottage';
import {authServices} from '../../../services/AuthServices';
import {DispatchContext} from '../../../store';
import SignUpSelection from '../SignUp/SignUpSelection';

const validateSchema = Yup.object().shape({
  email: Yup.string().required('Email cant be blank*').nullable(),
  password: Yup.string().required('Password cant be blank*').nullable(),
});

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);

  const onSubmit = (values, {setSubmitting}) => {
    setSubmitting(false);
    authServices('post', '/users/sign_in', {user: {...values}}, dispatch).then(res => {
      navigate('/admin');
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="background">
      <Container className="container-login" align={'center'}>
        <Card className="box-shadow"
              sx={{borderRadius: 1, pt: 5, pb: 5, pl: 2, pr: 2, backgroundColor: 'rgba(48, 47, 47, 0.3)'}}>
          <Formik initialValues={{email: '', password: ''}} onSubmit={onSubmit}
                  validationSchema={validateSchema}>
            <Form>
              <Typography sx={{fontSize: 30, fontWeight: '700', color: '#fff'}}>Login Form</Typography>
              <Field component={TextField} sx={{mb: 1, mt: 1}} variant={'outlined'}
                     placeholder={'Email or Phone'} name="email"
                     size={'small'} fullWidth
                     InputLabelProps={{style: {fontSize: 14, color: '#fff'}}}
                     autoComplete="new-password"
                     inputProps={{autoComplete: 'new-password'}}
                     InputProps={{
                       style: {ontSize: 14, color: '#1d1d1d', backgroundColor: '#fff', borderRadius: 0},
                       startAdornment: <InputAdornment position="start"><EmailIcon
                         sx={{color: '#000'}}/></InputAdornment>,
                     }}/>
              <Field component={TextField} sx={{mt: 1}} variant={'outlined'} placeholder={'Password'}
                     size={'small'} fullWidth name="password" type="password"
                     InputLabelProps={{style: {fontSize: 14, color: '#fff'}}}
                     autoComplete="new-password"
                     inputProps={{autoComplete: 'new-password'}}
                     InputProps={{
                       style: {fontSize: 14, color: '#1d1d1d', backgroundColor: '#fff', borderRadius: 0},
                       startAdornment: <InputAdornment position="start"><LockIcon
                         sx={{color: '#000'}}/></InputAdornment>,
                     }}/>
              <Typography sx={{color: '#fff', fontSize: 14, mb: 1.5, mt: 0.5, cursor: 'pointer'}} align={'left'}>Forgot
                password?</Typography>
              <Button className="buttonContained text-capitalize" type={'submit'}>Login</Button>
              <Button style={{
                marginTop: 10, backgroundColor: '#41ab03', width: '100%', color: 'white', textTransform: 'none'
              }} onClick={() => handleClickOpen()}>Don't have an account? Sign up</Button>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 15}}
                   align={'center'}>
                <CottageIcon sx={{color: '#fff'}}/>
                <Typography sx={{color: '#fff', fontSize: 14, ml: 1, cursor: 'pointer'}}
                            onClick={() => navigate('/')}>back to home</Typography>
              </div>
            </Form>)}
          </Formik>
        </Card>
        <SignUpSelection open={open} handleAction={handleClose}/>
      </Container>
    </div>);
}
