import React from 'react';
import {Dialog, DialogContent, DialogTitle, Grid, TextField} from '@mui/material';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

export default function AddItinerary({open, handleClose}) {
  const [value, setValue] = React.useState(null);
  return (
    <Dialog
      open={open}
      onClose={(e) => handleClose(false, e)}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <CloseIcon className="hand-cursor" onClick={(e) => handleClose(true, e)} />
        </div>
      </DialogTitle>
      <Typography fontWeight={'550'} align={'center'}>New Itinerary</Typography>
      <DialogContent sx={{width: 600, mb: 4}}>
        <Grid container spacing={2}>
          <Grid item lg={1.5} md={4.5} sm={4.5} xs={12} />
          <Grid item lg={6} md={7} sm={7} xs={12}>
            <Typography fontSize={12} fontWeight={700} sx={{mt: 1}} align={'left'}>Title</Typography>
            <TextField size={'small'} placeholder={'Enter title'} sx={{width: 400}} />
            <Typography fontSize={12} fontWeight={700} sx={{mt: 1}} align={'left'}>Number of days</Typography>
            <TextField size={'small'} placeholder={'Enter number'} type={'number'} sx={{width: 400}} />
            <Typography fontSize={12} fontWeight={700} sx={{mt: 1}} align={'left'}>Number of nights</Typography>
            <TextField size={'small'} placeholder={'Enter number'} type={'number'} sx={{width: 400}} />
            <Typography fontSize={12} fontWeight={700} sx={{mt: 1, mb: 1}} align={'left'}>Start Date</Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Select Date"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField size={'small'} {...params} />}
              />
            </LocalizationProvider>
            <Typography fontSize={12} fontWeight={700} sx={{mt: 1, mb: 1}} align={'left'}>End Date</Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Select Date"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField size={'small'} {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
