import React from 'react';
import {Autocomplete, Grid, TextField} from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function GuestDetail() {
  return (
    <Grid container spacing={2}>
      <Grid item lg={3.5} md={3.5} sm={3.5} xs={12} />
      <Grid item lg={5} md={5} sm={5} xs={12}>
        <Typography fontSize={12} fontWeight={700} sx={{mt: 1}} align={'left'}>Guest Name</Typography>
        <TextField fullWidth={true} size={'small'} placeholder={'Enter'} />
        <Typography fontSize={14} fontWeight={700} sx={{mt: 2}} align={'left'}>Age</Typography>
        <TextField size={'small'} placeholder={'Enter age'} fullWidth />
        <Typography fontSize={12} fontWeight={700} sx={{mt: 1}} align={'left'}>Nationality</Typography>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={accommodation}
          margin={'none'}
          size={'small'}
          fullWidth
          renderInput={(params) => <TextField {...params} label="Select hotel name" />}
        />
        <Button startIcon={<AddIcon />} variant={'outlined'}
                sx={{color: '#848282', border: '1px solid #848282', textTransform: 'none', mt: 2}}>
          Add more guest
        </Button>
      </Grid>
      <Grid item lg={3} md={3} sm={3} xs={12} />
    </Grid>
  );
}

const accommodation = [
  {label: 'Hotel Taj'},
  {label: 'Karmaling Hotle'},
  {label: 'March Hotle'},
];
