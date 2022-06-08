import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';

export default function TabsTrackVehicle() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width: '100%', typography: 'body1'}}>
      <TabContext value={value}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" color={'secondary'}>
            <Tab className='text-capitalize' label="Vehicle detail" value="1" />
            <Tab className='text-capitalize' label="Owned by" value="2" />
            <Tab className='text-capitalize' label="Today’s Itinerary" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Stack sx={{display: 'flex', flexDirection: 'row'}}>
            <img draggable={'false'} width={120} height={90} style={{objectFit: 'cover'}}
                 src={require('../../../../assets/Images/car1.png')}
                 alt="vehicle" />
            <Stack sx={{display: 'flex', flexDirection: 'column'}}>
              <Typography fontSize={14} fontWeight={700} sx={{ml: 2}}><span
                style={{color: '#868686'}}>Vehicle Type:</span> SUV</Typography>
              <Typography fontSize={14} fontWeight={700} sx={{ml: 2}}><span
                style={{color: '#868686'}}>Vehicle No:</span> BP-1-2356</Typography>
              <Typography fontSize={14} fontWeight={700} sx={{ml: 2}}><span style={{color: '#868686'}}>Year:</span> 2022</Typography>
              <Typography fontSize={14} fontWeight={700} sx={{ml: 2}}><span style={{color: '#868686'}}>Registration Date:</span> 13
                September 2022</Typography>
            </Stack>
          </Stack>
        </TabPanel>
        <TabPanel value="2">
          <Stack sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <img draggable={'false'} width={50} height={50}
                 style={{objectFit: 'cover', borderRadius: '50%', border: '1px solid #000'}}
                 src={'https://picsum.photos/id/200/200/200'}
                 alt="vehicle" />
            <Stack sx={{display: 'flex', flexDirection: 'column'}}>
              <Typography fontSize={14} fontWeight={700} sx={{ml: 2}}><span
                style={{color: '#868686'}}>Owned by:</span> Dorji Hiring Service</Typography>
              <Typography fontSize={14} fontWeight={700} sx={{ml: 2}}><span
                style={{color: '#868686'}}>Hired by:</span> Bhutan Monyul Travels</Typography>
            </Stack>
          </Stack>
          <Stack sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 2}}>
            <img draggable={'false'} width={50} height={50}
                 style={{objectFit: 'cover', borderRadius: '50%', border: '1px solid #000'}}
                 src={'https://picsum.photos/id/7/200/200'}
                 alt="vehicle" />
            <Stack sx={{display: 'flex', flexDirection: 'column'}}>
              <Typography fontSize={14} fontWeight={700} sx={{ml: 2}}><span
                style={{color: '#868686'}}>Hired by:</span> Bhutan Monyul Travels</Typography>
            </Stack>
          </Stack>
        </TabPanel>
        <TabPanel value="3">
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={6} sx={12}>
              <Typography fontSize={14} fontWeight={700} sx={{ml: 2}}><span
                style={{color: '#868686'}}>Today’s Destination:</span> Bumthang</Typography>
              <Typography fontSize={14} fontWeight={700} sx={{ml: 2}}><span
                style={{color: '#868686'}}>No. of Guest:</span> 3</Typography>
            </Grid>
            <Grid item lg={6} md={6} sm={6} sx={12}>
              <Typography fontSize={14} fontWeight={700} sx={{ml: 2}}><span
                style={{color: '#868686'}}>Driver name:</span> Pema Dorji
              </Typography>
              <Typography fontSize={14} fontWeight={700} sx={{ml: 2}}><span
                style={{color: '#868686'}}>Phone #:</span> 77898765
              </Typography>
              <Typography fontSize={14} fontWeight={700} sx={{ml: 2}}>
                <span style={{color: '#868686'}}>Tour Guide:</span>
                Sangy Dorji
              </Typography>
              <Typography fontSize={14} fontWeight={700} sx={{ml: 2}}>
                <span style={{color: '#868686'}}>Phone #:</span>
                17653465
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
