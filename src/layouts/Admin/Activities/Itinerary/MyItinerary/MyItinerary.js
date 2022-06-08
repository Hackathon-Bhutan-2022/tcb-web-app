import {Card, Container, Grid, IconButton, Typography} from '@mui/material';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import React from 'react';
import ListNotification from '../../../../../common/Notification/ListNotification';
import {Images} from '../../../../../common/Assets/Images';

export const MyItinerary = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <div style={{display: 'flex'}}>
        <Typography style={{fontWeight: 700, fontSize: 21, color: '#4F4B4B', marginBottom: 10}}>My
          Itinerary</Typography>
        <IconButton style={{backgroundColor: '#EAE8E8', width: 30, height: 30, marginLeft: 25}}>
          <Badge badgeContent={4} color="primary">
            <NotificationsNoneIcon onClick={() => handleClickOpen()}/>
          </Badge>
        </IconButton>
      </div>
      <Grid container>
        <Grid item lg={3}>
          <Card style={{
            padding: '10px 10px',
            boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.1)',
            marginBottom: 10,
            cursor: 'pointer'
          }}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 5}}>
              <Typography style={{fontWeight: 400, fontSize: 12}}>12/12/2022</Typography>
              <Typography style={{fontWeight: 400, fontSize: 12, color: 'red'}}>expired</Typography>
              <Typography style={{fontWeight: 400, fontSize: 12, color: 'green'}}>Active</Typography>
            </div>
            <img src={Images?.bannerImage}
                 style={{width: '100%', objectFit: 'cover', borderRadius: 5, height: 130, marginTop: 5}} alt=""/>
            <Typography style={{fontWeight: 400, fontSize: 13, marginTop: 10}}>
              Honeymoon in paradise
            </Typography>
            <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: 10}}>
              <div align={'center'}>
                <Typography style={{fontWeight: 700, fontSize: 18}}>
                  4
                </Typography>
                <Typography style={{fontWeight: 400, fontSize: 12}}>
                  No. of days
                </Typography>
              </div>
              <div align={'center'}>
                <Typography style={{fontWeight: 700, fontSize: 18}}>
                  3
                </Typography>
                <Typography style={{fontWeight: 400, fontSize: 12}}>
                  No. of nights
                </Typography>
              </div>
              <div align={'center'}>
                <Typography style={{fontWeight: 700, fontSize: 18}}>
                  2
                </Typography>
                <Typography style={{fontWeight: 400, fontSize: 12}}>
                  No. of guests
                </Typography>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>

      <ListNotification handleAction={handleClose} open={open}/>
    </Container>
  );
};