import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {TextField, Typography} from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import {styled} from '@mui/material/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Input = styled('input')({
  display: 'none',
});

export default function AddAnnouncement({handleAction, open}) {

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
        <DialogContent style={{width: 400}}>
          <TextField variant={'outlined'} label={'Title'} size={'small'} fullWidth/>
          <TextField variant={'outlined'} label={'Description'} size={'small'} fullWidth multiline rows={4}
                     style={{marginTop: 10}}/>
          <div style={{border: '1px dashed #c4c4c4', marginTop: 10, padding: 10, borderRadius: 2}} align="center">
            <label className="hand-cursor" htmlFor="icon-button-file">
              <Input id="icon-button-file"
                     hidden={true}
                     accept="image/*" type="file"
                // onChange={(e) => handlePosterUpload(e.currentTarget?.files, formik)}
              />
              <UploadIcon style={{color: '#c4c4c4'}}/>
              <Typography fontSize="small" fontWeight={300}>Choose image to upload</Typography>
            </label>
          </div>
          <Button onClick={handleAction} variant={'contained'} size={'small'}
                  style={{
                    backgroundColor: '#058178',
                    textTransform: 'none',
                    marginTop: 15,
                    float: 'right'
                  }}>Publish</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
