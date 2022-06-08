import React from 'react';
import {Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function SummaryItinerary(props) {
  const loop = [1, 2, 3];
  return (
    <Grid container spacing={2}>
      <Grid item lg={3.5} md={3.5} sm={3.5} xs={12} />
      <Grid item lg={5} md={5} sm={5} xs={12}>
        <Typography fontSize={20} fontWeight={700} sx={{mt: 1}} align={'center'}>Summary</Typography>
        {loop.map(value => (
          <>
            <Typography fontSize={14} sx={{mt: 1}} align={'left'}>Day 1</Typography>
            <Typography fontSize={16} fontWeight={700} align={'left'}>Hike to Taktshang Monastry</Typography>
            <Typography fontSize={14} fontWeight={700} sx={{color: '#8d8d8d'}} align={'left'}>Paro</Typography>
            <Typography fontSize={14} sx={{mt: 1, color: '#747272'}} align={'left'}>
              The hike to the temple takes around five
              hours and travellers will pass through a dense forest and emerge on the edge of a rocky chasm, where they
              will
              need to climb down to a trickling waterfall and then back up the cliff face to the monastery on the other
              side.
            </Typography>
            <Stack sx={{flexDirection: 'row'}}>
              {loop.map(value => (
                <Stack
                  sx={{
                    backgroundColor: '#fff',
                    width: 90,
                    height: 90,
                    mt: 3,
                    mr: 2,
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                  }}>
                  <img draggable={'false'} style={{objectFit: 'cover', margin: 4}}
                       src={'https://picsum.photos/id/1000/1000'}
                       alt="" />
                </Stack>
              ))}
            </Stack>
            <Typography sx={{mt: 3}} fontSize={16} fontWeight={700} align={'left'}>Accommodation</Typography>
            <Stack sx={{flexDirection: 'row', alignItems: 'center', mt: 2}}>
              <img width={50} style={{borderRadius: '50%'}} src={'https://picsum.photos/id/4/1000/1000'}
                   alt="accommodation" />
              <Typography sx={{ml: 1}} fontSize={16} fontWeight={700} align={'left'}>Parp koichu</Typography>
            </Stack>
            <Stack sx={{flexDirection: 'row', mb: 5}}>
              {loop.map(value => (
                <Stack
                  sx={{
                    backgroundColor: '#fff',
                    width: 90,
                    height: 90,
                    mt: 3,
                    mr: 2,
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                  }}>
                  <img draggable={'false'} style={{objectFit: 'cover', margin: 4}}
                       src={'https://picsum.photos/id/12/1000/1000'}
                       alt="" />
                </Stack>
              ))}
            </Stack>
          </>
        ))}
      </Grid>
      <Grid item lg={3} md={3} sm={3} xs={12} />
    </Grid>
  );
}
