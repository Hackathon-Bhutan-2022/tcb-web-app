import React from 'react';
import {Autocomplete, Grid, TextField} from '@mui/material';
import {styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const Input = styled('input')({
  display: 'none',
});
export default function CreateItinerary() {
  const [value, setValue] = React.useState(null);
  const loop = [1, 2, 3];
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={3.5} md={3.5} sm={3.5} xs={12} />
        <Grid item lg={5} md={5} sm={5} xs={12}>
          <Typography fontSize={12} fontWeight={700} sx={{mt: 1}} align={'left'}>Where to?</Typography>
          <TextField fullWidth={true} size={'small'} placeholder={'Select destination dzongkhag'} />
          <Typography fontSize={12} fontWeight={700} sx={{mt: 1, mb: 1}} align={'left'}>Start time</Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="Basic example"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField size={'small'} fullWidth {...params} />}
            />
          </LocalizationProvider>
          <Typography fontSize={14} fontWeight={700} sx={{mt: 2}} align={'left'}>Activity</Typography>
          <Typography fontSize={12} fontWeight={700} align={'left'}>Activity / destination title</Typography>
          <TextField size={'small'} placeholder={'Enter title'} fullWidth />
          <Typography fontSize={12} fontWeight={700} sx={{mt: 1}} align={'left'}>Description</Typography>
          <TextField multiline={true} rows={5} sx={{mb: 1}} placeholder={'Enter description'} fullWidth />
          <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" />
            <Box className='hand-cursor' sx={{border: '2px dotted #A4A2A2', borderRadius: 2, mb: 2}} align={'center'}>
              <div align={'center'} style={{padding: 10}}>
                <ImageIcon sx={{fontSize: 45, color: '#058178'}} />
                <Typography fontSize={14}>
                  Upload itinerary images
                </Typography>
              </div>
            </Box>
          </label>
          <Stack sx={{display: 'flex', flexDirection: 'row'}}>
            {loop.map(value => (
              <Stack sx={{backgroundColor: '#D9D9D9', borderRadius: 5, width: '35%', p: 0.5, ml: 1}}>
                <Stack
                  sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Typography sx={{ml: 1}}>Paro.jpg</Typography>
                  <div>
                    <CloseIcon style={{fontSize: 20, mt: 0.5}} className={'hand-cursor'} />
                  </div>
                </Stack>
              </Stack>
            ))}
          </Stack>
          <Button startIcon={<AddIcon />} variant={'outlined'}
                  sx={{color: '#848282', border: '1px solid #848282', textTransform: 'none', mt: 2}}>Add more
            activity</Button>
          <Typography fontSize={12} fontWeight={700} sx={{mt: 1, mb: 1}} align={'left'}>Accommodation</Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={accommodation}
            margin={'none'}
            size={'small'}
            fullWidth
            renderInput={(params) => <TextField {...params} label="Select hotel name" />}
          />
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={12} />
      </Grid>
    </div>
  );
}


const accommodation = [
  {label: 'Hotel Taj'},
  {label: 'Karmaling Hotle'},
  {label: 'March Hotle'},
];
