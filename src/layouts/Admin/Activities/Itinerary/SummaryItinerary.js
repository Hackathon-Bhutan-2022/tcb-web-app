import React, {useContext} from 'react';
import {Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import {StateContext} from '../../../../store';

export default function SummaryItinerary(props) {
  const loop = [1, 2];
  const {values} = useContext(StateContext);

  return (
    <Grid container spacing={2}>
      <Grid item lg={3.5} md={3.5} sm={3.5} xs={12}/>
      <Grid item lg={5} md={5} sm={5} xs={12}>
        <Typography fontSize={20} fontWeight={700} sx={{mt: 1}} align={'center'}>Summary</Typography>
        {values?.itinerary_items_attributes?.map((item, index) => (
          <div key={index}>
            <Typography fontSize={14} sx={{mt: 1}} align={'left'}>Day {index + 1}</Typography>
            <Typography fontSize={16} fontWeight={700} align={'left'}>{item?.title || '---'}</Typography>
            <Typography fontSize={14} fontWeight={700} sx={{color: '#8d8d8d'}}
                        align={'left'}>{item?.destination || '---'}</Typography>
            <Typography fontSize={14} sx={{mt: 1, color: '#747272'}} align={'left'}>
              {item?.description || '---'}
            </Typography>
            <Stack sx={{flexDirection: 'row'}}>
              {item?.pictures?.map((image, ind) => (
                <Stack
                  key={ind}
                  sx={{
                    backgroundColor: '#fff',
                    width: 90,
                    height: 90,
                    mt: 3,
                    mr: 2,
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                  }}>
                  <img draggable={'false'} style={{objectFit: 'cover', margin: 4}}
                       src={image || 'https://picsum.photos/id/1000/1000'}
                       alt=""/>
                </Stack>
              ))}
            </Stack>
            <Typography sx={{mt: 3}} fontSize={16} fontWeight={700} align={'left'}>Accommodation</Typography>
            <Stack sx={{flexDirection: 'row', alignItems: 'center', mt: 2}}>
              <img width={50} style={{borderRadius: '50%'}} src={'https://picsum.photos/id/4/1000/1000'}
                   alt="accommodation"/>
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
                       alt=""/>
                </Stack>
              ))}
            </Stack>
          </div>
        ))}
      </Grid>
      <Grid item lg={3} md={3} sm={3} xs={12}/>
    </Grid>
  );
}
