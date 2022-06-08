import React from 'react';
import {Card, Container, Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

export default function ItineraryDetail() {
  const navigate = useNavigate();
  const itinerary = [1, 2, 4, 5];
  return (
    <Container>
      <Stack sx={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Typography
          align={'left'}
          style={{
            fontWeight: 700,
            fontSize: 24,
            color: '#4F4B4B',
            marginBottom: 10,
          }}>
          Itinerary Detail
        </Typography>
        <Button onClick={() => navigate('/admin/itinerary/add')} variant={'contained'}
                sx={{height: 35, textTransform: 'none'}} color={'secondary'}>
          Add new Itinerary
        </Button>
      </Stack>
      <Card className='card-shadow' sx={{p: 3, backgroundColor: '#F7F7F7', border: '2px solid #F0EFEF'}}>
        <Grid container spacing={2}>
          {itinerary.map(value => (
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Card className="card-shadow" sx={{pl: 0.5, pr: 0.5, pt: 3, pb: 3, borderRadius: 3}}>
                <Stack
                  sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mb: 1, ml: 1, mr: 1}}>
                  <Typography fontSize={12}>6 Jun,2022</Typography>
                  <Typography fontSize={12} fontWeight={700} color={'secondary'}>Active</Typography>
                </Stack>
                <img draggable={'false'} height={138} width={'100%'} style={{objectFit: 'cover', borderRadius: 10}}
                     src={'https://picsum.photos/id/203/1000/200'} alt="itinerary" />
                <Stack sx={{ml: 1, mr: 1, mb: 1}}>
                  <Typography fontSize={15} fontWeight={550} sx={{mt: 2}}>A week in Bhutan</Typography>
                </Stack>
                <Container>
                  <Grid container spacing={2}>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                      <Typography align={'center'} fontSize={20} fontWeight={700}>6</Typography>
                      <Typography align={'center'} fontSize={12}>No. of days</Typography>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                      <Typography align={'center'} fontSize={20} fontWeight={700}>9</Typography>
                      <Typography align={'center'} fontSize={12}>No. of nights</Typography>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                      <Typography align={'center'} fontSize={20} fontWeight={700}>7</Typography>
                      <Typography align={'center'} fontSize={12}>No. of guests</Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Container>
  );
}
