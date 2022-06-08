import React from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import {Grid, TextField} from '@mui/material';
import Typography from '@mui/material/Typography';
import {DatePicker, LocalizationProvider} from '@mui/lab';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

export default function AddItinerary() {
  const [value, setValue] = React.useState(null);
  const navigation = useNavigate();
  return (
    <div>
      <Typography fontWeight={'550'} fontSize={20} align={'center'}>New Itinerary</Typography>
      <Grid container spacing={2}>
        <Grid item lg={3.5} md={3.5} sm={3.5} xs={12} />
        <Grid item lg={5} md={5} sm={5} xs={12}>
          <Typography fontSize={12} fontWeight={700} sx={{mt: 1}} align={'left'}>Title</Typography>
          <TextField fullWidth={true} size={'small'} placeholder={'Enter title'} />
          <Typography fontSize={12} fontWeight={700} sx={{mt: 1}} align={'left'}>Number of days</Typography>
          <TextField size={'small'} placeholder={'Enter number'} type={'number'} fullWidth />
          <Typography fontSize={12} fontWeight={700} sx={{mt: 1}} align={'left'}>Number of nights</Typography>
          <TextField size={'small'} placeholder={'Enter number'} type={'number'} fullWidth />
          <Typography fontSize={12} fontWeight={700} sx={{mt: 1, mb: 1}} align={'left'}>Start Date</Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Select Date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField fullWidth size={'small'} {...params} />}
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
              renderInput={(params) => <TextField fullWidth size={'small'} {...params} />}
            />
          </LocalizationProvider>
          <div align={'right'}>
            <Button sx={{ backgroundColor: "#058178", mt: 3}} endIcon={<ArrowForwardIosRoundedIcon style={{fontSize: 15}}/>} onClick={() => navigation('/admin/itinerary/add/1')} variant={'contained'}>Next</Button>
          </div>
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={12} />
      </Grid>
    </div>
  );
}
