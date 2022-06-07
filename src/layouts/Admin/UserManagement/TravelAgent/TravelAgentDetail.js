import React from 'react';
import {Card, Container, Grid} from '@mui/material';
import {Images} from '../../../../common/Assets/Images';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';

const customIcons = {
  1: {
    icon: <CircleIcon sx={{color: '#058178'}} />,
  },
  2: {
    icon: <CircleIcon sx={{color: '#058178'}} />,
  },
  3: {
    icon: <CircleIcon sx={{color: '#058178'}} />,
  },
  4: {
    icon: <CircleOutlinedIcon />,
  },
  5: {
    icon: <CircleOutlinedIcon />,
  },
};

function IconContainer(props) {
  const {value, ...other} = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};
export default function TravelAgentDetail() {
  const training = [1, 2, 3];
  return (
    <Container>
      <Typography style={{fontWeight: 700, fontSize: 24, color: '#4F4B4B', marginBottom: 10}}>Profile</Typography>
      <Card sx={{backgroundColor: '#F7F7F7', border: '2px solid #F0EFEF', p: 3, boxShadow: "none"}}>
        <Grid container spacing={2}>
          <Grid item lg={3} md={3} sm={3} xs={12} />
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Card className="card-shadow">
              <img width="100%" height={209} style={{objectFit: 'cover'}} src={Images.buddha}
                   alt="profile_background" />
              <Container sx={{mt: 1, mb: 2}}>
                <Grid container spacing={2}>
                  <Grid item lg={7} md={7} sm={7} xs={12}>
                    <Typography fontSize={24} fontWeight={550}>Dawa Tshomo</Typography>
                    <Typography fontSize={14}>Cultural Tour Guide</Typography>
                    <Grid container spacing={2}>
                      <Grid item lg={4} md={4} sm={4} xs={12}>
                        <Typography fontSize={18} fontWeight={700}>24</Typography>
                        <Typography fontSize={14}>Trips</Typography>
                      </Grid>
                      <Grid item lg={4} md={4} sm={4} xs={12}>
                        <Typography fontSize={18} fontWeight={700}>3.4</Typography>
                        <Typography fontSize={14}>Rating</Typography>
                      </Grid>
                      <Grid item lg={4} md={4} sm={4} xs={12}>
                        <Typography fontSize={18} fontWeight={700}>02/05/2019</Typography>
                        <Typography fontSize={14}>Member since</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item lg={5} md={5} sm={5} xs={12}
                        sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography fontSize={14} align={'right'}>
                      Current Status: <span style={{color: '#034f0c'}}>Engaged</span>
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Card>
            <Card className="card-shadow" sx={{p: 2, mt: 2}}>
              <Typography fontSize={20} fontWeight={700}>Description</Typography>
              <Typography fontSize={15} sx={{color: '#4F4B4B'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque incidunt iste provident! Dolorum
                ipsum
                magni nesciunt obcaecati, perspiciatis quia sint suscipit ut veniam voluptatem? Dignissimos expedita
                iusto
                nam vitae.
              </Typography>
            </Card>
            <Card className="card-shadow" sx={{p: 2, mt: 2}}>
              <Typography fontSize={20} fontWeight={700}>Training</Typography>
              <Stack sx={{display: 'flex', flexDirection: 'row', mt: 1}}>
                <AccountBoxIcon sx={{fontSize: 20}} />
                <Typography fontSize={14} sx={{color: '#4F4B4B', marginLeft: 1}}>
                  Bhutan Institute for Tourism and Hospitality
                </Typography>
              </Stack>
              <Stack sx={{display: 'flex', flexDirection: 'row', mt: 1}}>
                <AddLocationAltIcon sx={{fontSize: 20}} />
                <Typography fontSize={14} sx={{color: '#4F4B4B', marginLeft: 1}}>
                  Thimphu
                </Typography>
              </Stack>
              <Stack sx={{display: 'flex', flexDirection: 'row', mt: 1}}>
                <CalendarTodayIcon sx={{fontSize: 20}} />
                <Typography fontSize={14} sx={{color: '#4F4B4B', marginLeft: 1}}>
                  07/09/2022
                </Typography>
              </Stack>
            </Card>
            <Card className="card-shadow" sx={{p: 2, mt: 2}}>
              <Typography fontSize={20} fontWeight={700}>Language</Typography>
              <Stack sx={{display: 'flex', flexDirection: 'row', mt: 1}}>
                <Rating
                  name="highlight-selected-only"
                  defaultValue={2}
                  IconContainerComponent={IconContainer}
                  highlightSelectedOnly
                />
                <Typography fontSize={15} sx={{color: '#4F4B4B', ml: 1}}>English</Typography>
              </Stack>
            </Card>
            <Card className="card-shadow" sx={{p: 2, mt: 2}}>
              <Typography fontSize={20} fontWeight={700}>Worked With</Typography>
              <Stack sx={{display: 'flex', flexDirection: 'row'}}>
                {training.map(value => (
                  <Stack
                    sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 1, width: 100, mr: 1}}>
                    <img draggable={'false'} width={60} height={60} src={'https://picsum.photos/id/999/60/60'}
                         style={{borderRadius: '50%'}} alt="training" />
                    <Typography align={'center'} fontSize={12} fontWeight={700} sx={{color: '#4F4B4B', mt: 0.5}}>
                      Bhutan Monyul Travel
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Card>
            <Card className="card-shadow" sx={{p: 2, mt: 2}}>
              <Typography fontSize={20} fontWeight={700}>Employer Feedback</Typography>
              <Typography fontSize={15} sx={{color: '#4F4B4B'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque incidunt iste provident! Dolorum
                ipsum
                magni nesciunt obcaecati, perspiciatis quia sint suscipit ut veniam voluptatem? Dignissimos expedita
                iusto
                nam vitae.
              </Typography>
            </Card>
            <Card className="card-shadow" sx={{p: 2, mt: 2}}>
              <Typography fontSize={20} fontWeight={700}>Skills</Typography>
              {training.map(value => (
                <Typography fontSize={15} sx={{color: '#4F4B4B'}}>
                  Teamwork
                </Typography>
              ))}
            </Card>
            <Card className="card-shadow" sx={{p: 2, mt: 2}}>
              <Typography fontSize={20} fontWeight={700}>Interests</Typography>
              {training.map(value => (
                <Typography fontSize={15} sx={{color: '#4F4B4B'}}>
                  Watching Movie
                </Typography>
              ))}
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={12} />
        </Grid>
      </Card>
    </Container>
  );
}
