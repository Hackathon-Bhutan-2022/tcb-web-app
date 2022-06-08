import React from 'react';
import Typography from '@mui/material/Typography';
import {Avatar, Card, Grid} from '@mui/material';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import HailOutlinedIcon from '@mui/icons-material/HailOutlined';
import {Images} from '../../../common/Assets/Images';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function AboutUs() {
  const listing = [
    {
      image: require('../../../assets/Images/Hotle.png'),
      profile: require('../../../assets/Images/pm.png'),
      title: 'Punakha residency',
      room: '2',
      type: 'Duplex'
    },
    {
      image: require('../../../assets/Images/RoomTwo.png'),
      profile: require('../../../assets/Images/Sangay.png'),
      title: 'Paro main town',
      room: '5',
      type: 'Single'
    }
  ];
  return (
    <div className="sticky-top">
      <Card className={'card-shadow'} sx={{p: 2, mb: 2}}>
        <Typography fontSize={18} fontWeight={700} sx={{mb: 2}}>
          About us
        </Typography>
        <Typography fontSize={14}>
          Looking to learn more about Connectedness? Whether you want to know more about how to use your Connectedness
          theme to succeed, or how to help someone harness theirs, you've come to the right place.
        </Typography>
      </Card>
      <Card className={'card-shadow'} sx={{p: 2, mb: 2}}>
        <Typography fontSize={18} fontWeight={700} sx={{mb: 2}}>
          Members
        </Typography>
        <Grid container spacing={2}>
          <Grid item lg={4} md={4} sm={4} xs={4} align={'center'}>
            <Avatar sx={{backgroundColor: '#058178'}}>
              <HailOutlinedIcon sx={{fontSize: 20}} />
            </Avatar>
            <Typography fontSize={20} fontWeight={700}>
              2345
            </Typography>
            <Typography fontSize={12} sx={{mt: -0.5, mb: 2}}>
              Tour Guides
            </Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={4} align={'center'}>
            <Avatar sx={{backgroundColor: '#058178'}}>
              <ApartmentOutlinedIcon sx={{fontSize: 20}} />
            </Avatar>
            <Typography fontSize={20} fontWeight={700}>
              2345
            </Typography>
            <Typography fontSize={12} sx={{mt: -0.5, mb: 2}}>
              Travel agencies
            </Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={4} align={'center'}>
            <Avatar sx={{backgroundColor: '#058178'}}>
              <DirectionsCarOutlinedIcon sx={{fontSize: 20}} />
            </Avatar>
            <Typography fontSize={20} fontWeight={700}>
              2345
            </Typography>
            <Typography fontSize={12} sx={{mt: -0.5, mb: 2}}>
              Hotels
            </Typography>
          </Grid>
        </Grid>
        <Typography fontSize={14} sx={{mb: 2}}>
          Join today to have all the information related to Tourism Industry in bhutan so that you will always be
          prepared for any circumstances
        </Typography>
      </Card>
      <Typography fontSize={18} fontWeight={700} sx={{mb: 2}}>
        Latest listing
      </Typography>
      <Grid container spacing={1}>
        {listing.map(value => (
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Card className={'card-shadow'}>
              <Stack sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', pt: 2, pl: 1, pr: 1, mb: 1}}>
                <img draggable={'false'} width={30} height={30} style={{objectFit: 'cover', borderRadius: '50%', backgroundColor: "#c3c3c3"}}
                     src={value?.profile || Images.defaultProfile} alt="profile" />
                <Stack sx={{display: 'flex', flexDirection: 'column', ml: 1}}>
                  <Typography fontSize={14} fontWeight={700}>{value?.title}</Typography>
                  <Typography fontSize={12} sx={{mt: -0.5}}>30 min ago</Typography>
                </Stack>
              </Stack>
              <img width={'100%'} height={120} style={{objectFit: 'cover', backgroundColor: "#c3c3c3"}} src={value?.image || Images.bannerImage} alt="travel" />
              <Stack sx={{m: 2}}>
                <Typography fontSize={13}>
                  Available Rooms: <span style={{fontWeight: 700}}>{value?.room}</span>
                </Typography>
                <Typography fontSize={13}>
                  Rooms Type: <span style={{fontWeight: 700}}>{value?.type}</span>
                </Typography>
                <Button variant={'contained'} sx={{backgroundColor: '#058178', textTransform: 'none', mt: 1}}>Send Reservation</Button>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
