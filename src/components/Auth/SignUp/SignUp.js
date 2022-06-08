import React from 'react';
import {Button, Card, Container, Typography} from '@mui/material';
import {useLocation, useNavigate} from 'react-router-dom';
import {Field, Form, Formik} from 'formik';
import {TextField} from 'formik-mui';
import ButtonContained from '../../../common/CustomButtons/ButtonContained';
import CottageIcon from '@mui/icons-material/Cottage';
import UploadIcon from '@mui/icons-material/Upload';
import {styled} from '@mui/material/styles';
import {signupInitialValues, signupValidateSchema} from '../AuthModels';

const Input = styled('input')({
  display: 'none',
});

export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (values, {setSubmitting}) => {

  };

  return (
    <div align={'center'}>
      <div className="background">
        <Container className="container-signup" align={'center'}>
          <Card className="box-shadow"
                sx={{borderRadius: 1, pt: 5, pb: 5, pl: 2, pr: 2, backgroundColor: 'rgba(48, 47, 47, 0.3)'}}>
            <Formik initialValues={signupInitialValues} validationSchema={signupValidateSchema} onSubmit={onSubmit}>
              <Form>
                <Typography sx={{fontSize: 30, fontWeight: '700', color: '#fff'}}>Sign Form</Typography>
                <Field component={TextField} sx={{mb: 1, mt: 1}} variant={'outlined'}
                       placeholder={'Name'} name="name"
                       size={'small'} fullWidth
                       InputLabelProps={{style: {fontSize: 14, color: '#fff'}}}
                       InputProps={{
                         style: {ontSize: 14, color: '#1d1d1d', backgroundColor: '#fff', borderRadius: 0}
                       }}/>
                <Field component={TextField} sx={{mb: 1, mt: 1}} variant={'outlined'}
                       placeholder={'Email or Phone'} name="email"
                       size={'small'} fullWidth
                       InputLabelProps={{style: {fontSize: 14, color: '#fff'}}}
                       autoComplete="new-password"
                       inputProps={{autoComplete: 'new-password'}}
                       InputProps={{
                         style: {ontSize: 14, color: '#1d1d1d', backgroundColor: '#fff', borderRadius: 0}
                       }}/>
                <Field component={TextField} sx={{mb: 1, mt: 1}} variant={'outlined'}
                       placeholder={'License Number'} name="license"
                       size={'small'} fullWidth
                       InputLabelProps={{style: {fontSize: 14, color: '#fff'}}}
                       InputProps={{
                         style: {ontSize: 14, color: '#1d1d1d', backgroundColor: '#fff', borderRadius: 0}
                       }}/>
                <div style={{border: '1px dashed #ffffff', marginTop: 10, padding: 10, borderRadius: 2}}>
                  <label className="hand-cursor" htmlFor="icon-button-file">
                    <Input id="icon-button-file"
                           hidden={true}
                           accept="image/*" type="file"
                      // onChange={(e) => handlePosterUpload(e.currentTarget?.files, formik)}
                    />
                    <UploadIcon style={{color: 'white'}}/>
                    <Typography fontSize="small" fontWeight={300} color="white">Choose logo to upload</Typography>
                  </label>
                </div>
                <Field component={TextField} sx={{mb: 1, mt: 1}} variant={'outlined'}
                       placeholder={'Description'} name="description"
                       size={'small'} fullWidth multiline rows={5}
                       InputLabelProps={{style: {fontSize: 14, color: '#fff'}}}
                       InputProps={{
                         style: {ontSize: 14, color: '#1d1d1d', backgroundColor: '#fff', borderRadius: 0}
                       }}/>
                <Field component={TextField} sx={{mt: 1}} variant={'outlined'} placeholder={'Password'}
                       size={'small'} fullWidth name="password" type="password"
                       InputLabelProps={{style: {fontSize: 14, color: '#fff'}}}
                       autoComplete="new-password"
                       inputProps={{autoComplete: 'new-password'}}
                       InputProps={{
                         style: {fontSize: 14, color: '#1d1d1d', backgroundColor: '#fff', borderRadius: 0}
                       }}/>
                <Field component={TextField} sx={{mt: 1}} variant={'outlined'} placeholder={'Confirm Password'}
                       size={'small'} fullWidth name="password_confirmation" type="password"
                       InputLabelProps={{style: {fontSize: 14, color: '#fff'}}}
                       autoComplete="new-password"
                       inputProps={{autoComplete: 'new-password'}}
                       InputProps={{
                         style: {fontSize: 14, color: '#1d1d1d', backgroundColor: '#fff', borderRadius: 0}
                       }}/>
                <Button style={{
                  marginTop: 10,
                  backgroundColor: '#41ab03',
                  width: '100%',
                  color: 'white',
                  textTransform: 'none',
                  marginBottom: 10
                }}
                        onClick={() => navigate('/sign-up')}>Sign up</Button>
                <ButtonContained text={'Back to login'} onClick={() => navigate('/login')}/>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 15,
                }}
                     align={'center'}>
                  <CottageIcon sx={{color: '#fff'}}/>
                  <Typography sx={{color: '#fff', fontSize: 14, ml: 1, cursor: 'pointer'}}
                              onClick={() => navigate('/')}>back to home</Typography>
                </div>
              </Form>
            </Formik>
          </Card>
        </Container>
      </div>
    </div>
  );
}
