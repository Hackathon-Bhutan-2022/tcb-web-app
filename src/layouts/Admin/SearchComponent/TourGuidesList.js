import {Button, Card, Fade, Grid, Paper, Popper, Typography} from '@mui/material';
import {Images} from '../../../common/Assets/Images';
import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarIcon from '@mui/icons-material/Star';
import TranslateIcon from '@mui/icons-material/Translate';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import RequestDialog from './RequestDialog';

export const TourGuidesList = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleClickOpen = () => {
    setShow(true);
  };

  return (
    <div>
      <Grid container>
        <Grid item lg={4}>
          <Card style={{
            boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.1)',
            marginBottom: 10,
            cursor: 'pointer'
          }}>
            <div style={{padding: '15px 10px'}}>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button variant={'outlined'} style={{
                  textTransform: 'none',
                  fontSize: 10,
                  borderColor: '#0DCD15',
                  borderRadius: 15,
                  height: 25,
                  color: '#0DCD15'
                }}>Available</Button>
                <MoreHorizIcon onClick={handleClick('bottom')}/>
              </div>
              <img src={Images?.bannerImage}
                   style={{width: 80, objectFit: 'cover', borderRadius: 50, height: 80, marginTop: '-10px'}} alt=""/>
              <Typography style={{fontWeight: 700, fontSize: 16, marginTop: 10}}>
                Karma Sonam
              </Typography>
              <Typography style={{fontWeight: 400, fontSize: 13, color: '#4F4B4B'}}>
                Cultural Tour Guide
              </Typography>
              <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <div>
                  <Typography style={{fontWeight: 700, fontSize: 16, marginTop: 10}}>
                    50
                  </Typography>
                  <Typography style={{fontWeight: 400, fontSize: 13, color: '#4F4B4B'}}>
                    Trips
                  </Typography>
                </div>
                <div>
                  <Typography style={{fontWeight: 700, fontSize: 16}}>
                    <span style={{marginBottom: 10}}>4.2</span>
                    <StarIcon style={{color: '#058178', marginTop: 10, fontSize: 18}}/>
                  </Typography>
                  <Typography style={{fontWeight: 400, fontSize: 13, color: '#4F4B4B'}}>
                    Rating
                  </Typography>
                </div>
              </div>
            </div>
            <div style={{backgroundColor: '#058178', color: 'white', padding: '30px 10px'}} align="left">
              <div style={{display: 'flex'}}>
                <TranslateIcon style={{color: 'white'}} fontSize={'small'}/>
                <span style={{color: 'white', marginLeft: 10}}>Speaks English and French</span>
              </div>
              <div style={{display: 'flex', marginTop: 10}}>
                <CardMembershipIcon style={{color: 'white'}} fontSize={'small'}/>
                <span style={{color: 'white', marginLeft: 10}}>Member since 2/2/1990</span>
              </div>
            </div>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
              {({TransitionProps}) => (
                <Fade {...TransitionProps} timeout={150}>
                  <Paper sx={{p: 2}}>
                    <Typography style={{cursor: 'pointer'}}>View profile</Typography>
                    <Typography style={{cursor: 'pointer'}} onClick={() => handleClickOpen()}>Request service</Typography>
                  </Paper>
                </Fade>
              )}
            </Popper>
          </Card>
        </Grid>
      </Grid>
      <RequestDialog open={show} handleAction={handleClose}/>
    </div>
  );
};