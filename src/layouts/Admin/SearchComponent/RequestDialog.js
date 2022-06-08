import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import {Button, TextField, Typography} from '@mui/material';
import {Images} from '../../../common/Assets/Images';
import {Autocomplete} from '@mui/lab';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const languages = [
  {label: 'English', value: 'english'},
  {label: 'French', value: 'french'},
  {label: 'Japanese', value: 'japanese'},
];

export default function RequestDialog({handleAction, open}) {

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleAction}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent style={{backgroundColor: '#c4c4c4', width: 450}}>
          <Typography style={{fontWeight: 600, fontSize: 24, marginBottom: 15}}>Tour guide service request</Typography>
          <div style={{display: 'flex'}}>
            <img src={Images?.bannerImage}
                 style={{width: 50, objectFit: 'cover', borderRadius: 25, height: 50}} alt=""/>
            <div>
              <Typography style={{fontWeight: 600, fontSize: 16, marginLeft: 10}}>Pema Dorji</Typography>
              <Typography style={{fontWeight: 400, fontSize: 13, marginLeft: 10}}>cultural tour guide</Typography>
            </div>
          </div>
          <Typography style={{fontWeight: 400, fontSize: 14, marginTop: 10, color: '#4F4B4B'}}>Itinerary
            ID</Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={languages}
            renderInput={(params) => <TextField {...params} placeholder="Select Itinerary ID"
                                                size="small"/>}
          />
          <Button variant={'contained'} style={{backgroundColor: '#058178', marginTop: 10, width: '100%', textTransform: 'none'}}>Send
            Request</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
