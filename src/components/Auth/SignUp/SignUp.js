import React, {useContext} from 'react';
import {Autocomplete, Button, Card, Container, Typography} from '@mui/material';
import {useLocation, useNavigate} from 'react-router-dom';
import {Field, Form, Formik} from 'formik';
import {TextField} from 'formik-mui';
import ButtonContained from '../../../common/CustomButtons/ButtonContained';
import CottageIcon from '@mui/icons-material/Cottage';
import UploadIcon from '@mui/icons-material/Upload';
import {styled} from '@mui/material/styles';
import {signupInitialValues, signupValidateSchema} from '../AuthModels';
import {usersServices} from '../../../services/UserServices';
import {DispatchContext} from '../../../store';
import {SNACKBAR_OPEN} from '../../../reducers';
import {serialize as o2f} from 'object-to-formdata';
import {imageServices} from '../../../services/ImageServices';

const Input = styled('input')({
  display: 'none',
});

const roles = [{id: 2, value: 'agent'}, {id: 5, value: 'guide'}, {id: 6, value: 'hiring'}, {id: 4, value: 'hotel'},];
export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);
  const {search} = useLocation();
  const urlParams = new URLSearchParams(search);
  const roleId = urlParams.get('as');

  const onSubmit = (values, {setSubmitting}) => {
    values.role_id = roles.find(val => val.value === roleId)?.id;
    if (roleId === 'agent') {
      usersServices('post', null, {
        user: {
          ...values, tour_agency_profile_attributes: {...values?.profile}
        }
      }).then(response => {
        navigate('/login');
        dispatch({
          type: SNACKBAR_OPEN, payload: {isNotify: true, severity: 'success', message: 'Agent registered successfully'}
        });
      });
    } else {
      usersServices('post', null, {
        user: {
          ...values, tour_guide_profile_attributes: {...values?.profile}
        }
      }).then(response => {
        navigate('/login');
        dispatch({
          type: SNACKBAR_OPEN, payload: {isNotify: true, severity: 'success', message: 'User registered successfully'}
        });
      });
    }
    setSubmitting(false);
  };

  const handleLogoUpload = (file, setFieldValue) => {
    if (file) {
      const formData = o2f({image: file?.[0]}, null, null, 'picture');
      imageServices(formData).then(res => {
        if (roleId === 'agent') {
          setFieldValue('profile.logo_url', res?.url);
        } else {
          setFieldValue('profile.picture_url', res?.url);
        }
      });
    }
  };

  const handleCoverUpload = (file, setFieldValue) => {
    if (file) {
      const formData = o2f({image: file?.[0]}, null, null, 'picture');
      imageServices(formData).then(res => {
        setFieldValue('profile.cover_url', res?.url);
      });
    }
  };

  return (<div align={'center'}>
    <div className="background">
      <Container className="container-signup" align={'center'}>
        <Card className="box-shadow"
              sx={{borderRadius: 1, pt: 5, pb: 5, pl: 2, pr: 2, backgroundColor: 'rgba(48, 47, 47, 0.3)'}}>
          <Formik initialValues={signupInitialValues} validationSchema={signupValidateSchema} onSubmit={onSubmit}>
            {({values, isSubmitting, setFieldValue, ...formik}) => (<Form>
              <Typography sx={{fontSize: 30, fontWeight: '700', color: '#fff'}}>Sign Form</Typography>
              <Field component={TextField} sx={{mb: 1, mt: 1}} variant={'outlined'}
                     placeholder={roleId === 'agent' ? 'Agent name' : 'Name'} name="profile.name"
                     size={'small'} fullWidth
                     InputLabelProps={{style: {fontSize: 14, color: '#fff'}}}
                     InputProps={{
                       style: {ontSize: 14, color: '#1d1d1d', backgroundColor: '#fff', borderRadius: 0}
                     }}/>
              <Field component={TextField} sx={{mb: 1}} variant={'outlined'}
                     placeholder={'Email'} name="email"
                     size={'small'} fullWidth type="email"
                     InputLabelProps={{style: {fontSize: 14, color: '#fff'}}}
                     autoComplete="new-password"
                     inputProps={{autoComplete: 'new-password'}}
                     InputProps={{
                       style: {fontSize: 14, color: '#1d1d1d', backgroundColor: '#fff', borderRadius: 0}
                     }}/>
              <Field component={TextField} sx={{mb: 1}} variant={'outlined'}
                     placeholder={'Phone'} name="profile.mobile_no"
                     size={'small'} fullWidth type="number"
                     InputLabelProps={{style: {fontSize: 14, color: '#fff'}}}
                     autoComplete="new-password"
                     inputProps={{autoComplete: 'new-password'}}
                     InputProps={{
                       style: {fontSize: 14, color: '#1d1d1d', backgroundColor: '#fff', borderRadius: 0}
                     }}/>
              <Field component={TextField} sx={{mb: 1}} variant={'outlined'}
                     placeholder={'License Number'} name="profile.licence_no"
                     size={'small'} fullWidth
                     InputLabelProps={{style: {fontSize: 14, color: '#fff'}}}
                     InputProps={{
                       style: {fontSize: 14, color: '#1d1d1d', backgroundColor: '#fff', borderRadius: 0}
                     }}/>
              {roleId === 'guide' && <Autocomplete
                id="combo-box-demo"
                options={['cultural', 'trakking']}
                margin={'none'}
                size={'small'}
                sx={{mb: 1}}
                onChange={(e, option) => setFieldValue('profile.category', option)}
                renderInput={(params) => <Field component={TextField} name="category" {...params} label="Category"/>}
              />}
              <div style={{border: '1px dashed #ffffff', marginTop: 6, padding: 10, borderRadius: 2}}>
                <label className="hand-cursor" htmlFor="icon-button-file">
                  <Input id="icon-button-file"
                         hidden={true}
                         accept="image/*" type="file"
                         onChange={(e) => handleLogoUpload(e.currentTarget?.files, setFieldValue)}
                  />
                  {(!values?.profile?.picture_url) ? <>
                    <UploadIcon style={{color: 'white'}}/>
                    <Typography fontSize="small" fontWeight={300}
                                color="white">Choose {roleId === 'agent' ? 'logo' : 'picture'} to
                      upload</Typography>
                  </> : <img src={values?.profile?.picture_url || values?.profile?.logo_url} width={100} height={100}
                             alt=""/>}
                </label>
              </div>
              {roleId === 'guide' &&
                <div style={{border: '1px dashed #ffffff', marginTop: 10, padding: 10, borderRadius: 2}}>
                  <label className="hand-cursor" htmlFor="icon-cover-file">
                    <Input id="icon-cover-file"
                           hidden={true}
                           accept="image/*" type="file"
                           onChange={(e) => handleCoverUpload(e.currentTarget?.files, setFieldValue)}
                    />
                    {!values?.profile?.cover_url ? <>
                      <UploadIcon style={{color: 'white'}}/>
                      <Typography fontSize="small" fontWeight={300}
                                  color="white">Choose cover photo to upload</Typography>
                    </> : <img src={values?.profile?.cover_url} width={100} height={100} alt=""/>}
                  </label>
                </div>}
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
              }} type="submit">Sign up</Button>
              <ButtonContained text={'Back to login'} onClick={() => navigate('/login')}/>
              <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 15,
              }}
                   align={'center'}>
                <CottageIcon sx={{color: '#fff'}}/>
                <Typography sx={{color: '#fff', fontSize: 14, ml: 1, cursor: 'pointer'}}
                            onClick={() => navigate('/')}>back to home</Typography>
              </div>
            </Form>)}
          </Formik>
        </Card>
      </Container>
    </div>
  </div>);
}
