import * as React from 'react';
import {useContext} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {serialize as o2f} from 'object-to-formdata';
import {Typography} from '@mui/material';
import {TextField} from 'formik-mui';
import UploadIcon from '@mui/icons-material/Upload';
import {styled} from '@mui/material/styles';
import {Field, Form, Formik} from 'formik';
import {announcementServices} from '../../../../services/AnnouncementServices';
import {DispatchContext} from '../../../../store';
import {SNACKBAR_OPEN} from '../../../../reducers';
import {imageServices} from '../../../../services/ImageServices';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Input = styled('input')({
  display: 'none',
});

const initialValue = {
  title: '',
  body: '',
  image_url: null
};

export default function AddAnnouncement({handleAction, open}) {
  const dispatch = useContext(DispatchContext);
  const onCreateAnnouncement = (values, {setSubmitting}) => {
    setSubmitting(false);
    const formData = o2f(values, null, null, 'announcement');
    announcementServices('post', formData).then(response => {
      handleAction(true);
      dispatch({
        type: SNACKBAR_OPEN,
        payload: {isNotify: true, severity: 'success', message: 'Announcement created successfully'}
      });
    });
  };

  const handlePosterUpload = (file, setFieldValue) => {
    if (file) {
      const formData = o2f({image: file?.[0]}, null, null, 'picture');
      imageServices(formData).then(res => {
        setFieldValue('image_url', res?.url);
      });
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleAction}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{'New Announcement'}</DialogTitle>
        <Formik initialValues={initialValue} onSubmit={onCreateAnnouncement}>
          {({values, isSubmitting, setFieldValue, ...formik}) => (
            <Form>
              <DialogContent style={{width: 400}}>
                <Field component={TextField} name="title" variant={'outlined'} label={'Title'} size={'small'}
                       fullWidth/>
                <Field component={TextField} name="body" variant={'outlined'} label={'Description'} size={'small'}
                       fullWidth multiline rows={4}
                       style={{marginTop: 10}}/>
                <div style={{border: '1px dashed #c4c4c4', marginTop: 10, padding: 10, borderRadius: 2}} align="center">
                  <label className="hand-cursor" htmlFor="icon-button-file">
                    <Input id="icon-button-file"
                           hidden={true}
                           accept="image/*" type="file"
                           onChange={(e) => handlePosterUpload(e.currentTarget?.files, setFieldValue)}
                    />
                    <UploadIcon style={{color: '#c4c4c4'}}/>
                    <Typography fontSize="small" fontWeight={300}>Choose image to upload</Typography>
                  </label>
                </div>
                <Button type={'submit'} variant={'contained'} size={'small'}
                        disabled={isSubmitting}
                        style={{
                          backgroundColor: '#058178',
                          textTransform: 'none',
                          marginTop: 15,
                          float: 'right'
                        }}>Publish</Button>
              </DialogContent>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
}
