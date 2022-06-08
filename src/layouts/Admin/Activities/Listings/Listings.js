import {Card, Container, Grid, IconButton, Typography} from '@mui/material';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import React, {useState} from 'react';
import ListNotification from '../../../../common/Notification/ListNotification';
import Button from '@mui/material/Button';

export const Listings = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleNotificationOpen = () => {
    setOpen(true);
  };

  return (
    <Container>
      <div style={{display: 'flex'}}>
        <Typography style={{fontWeight: 700, fontSize: 21, color: '#4F4B4B', marginBottom: 10}}>Listings</Typography>
        <IconButton style={{backgroundColor: '#EAE8E8', width: 30, height: 30, marginLeft: 25}}>
          <Badge badgeContent={4} color="primary">
            <NotificationsNoneIcon onClick={() => handleNotificationOpen()}/>
          </Badge>
        </IconButton>
      </div>
      <Typography style={{fontWeight: 500, fontSize: 14, color: '#4F4B4B', marginBottom: 10}}>
        Browse all the available rooms (including exchange request), cars for rental, and flight tickets available for
        the next three days
      </Typography>
      <Typography style={{fontWeight: 700, fontSize: 21, color: '#4F4B4B', marginBottom: 10}}>Rooms</Typography>
      <div style={{backgroundColor: '#F7F7F7', padding: 15}}>
        <Grid container spacing={2}>
          <Grid item lg={3}>
            <Card style={{boxShadow: 'none', padding: 5}}>
              <div style={{display: 'flex'}}>
                <img src={require('../../../../assets/Images/hotel-logo.png')} alt=""/>
                <div>
                  <Typography style={{fontWeight: 600, fontSize: 15, marginLeft: 5}}>Punakha Residency</Typography>
                  <Typography style={{fontWeight: 300, fontSize: 11, marginLeft: 5}}>30m ago</Typography>
                </div>
              </div>
              <img src={require('../../../../assets/Images/resident.png')}
                   style={{width: '100%', marginTop: 15, objectFit: 'contain'}} alt=""/>
              <Typography style={{fontWeight: 300, fontSize: 13, marginLeft: 5, marginTop: 10}}>
                Available rooms: <span style={{fontWeight: 700}}>2</span>
              </Typography>
              <Typography style={{fontWeight: 300, fontSize: 13, marginLeft: 5}}>
                Room type: <span style={{fontWeight: 700}}>Double</span>
              </Typography>
              <Button variant={'contained'}
                      style={{
                        backgroundColor: '#058178',
                        textTransform: 'none',
                        borderRadius: 10,
                        width: '100%',
                        marginTop: 10
                      }}>Send Reservation</Button>
            </Card>
          </Grid>
          <Grid item lg={3}>
            <Card style={{boxShadow: 'none', padding: 5}}>
              <div style={{display: 'flex'}}>
                <img src={require('../../../../assets/Images/hotel-logo2.png')} alt=""/>
                <div>
                  <Typography style={{fontWeight: 600, fontSize: 15, marginLeft: 5}}>Yangphel Residency</Typography>
                  <Typography style={{fontWeight: 300, fontSize: 11, marginLeft: 5}}>10m ago</Typography>
                </div>
              </div>
              <img src={require('../../../../assets/Images/resident1.png')}
                   style={{width: '100%', marginTop: 15, objectFit: 'contain'}} alt=""/>
              <Typography style={{fontWeight: 300, fontSize: 13, marginLeft: 5, marginTop: 10}}>
                Available rooms: <span style={{fontWeight: 700}}>4</span>
              </Typography>
              <Typography style={{fontWeight: 300, fontSize: 13, marginLeft: 5}}>
                Room type: <span style={{fontWeight: 700}}>Single</span>
              </Typography>
              <Button variant={'contained'}
                      style={{
                        backgroundColor: '#058178',
                        textTransform: 'none',
                        borderRadius: 10,
                        width: '100%',
                        marginTop: 10
                      }}>Send Reservation</Button>
            </Card>
          </Grid>
          <Grid item lg={3}>
            <Card style={{boxShadow: 'none', padding: 5}}>
              <div style={{display: 'flex'}}>
                <img src={require('../../../../assets/Images/hotel-logo.png')} alt=""/>
                <div>
                  <Typography style={{fontWeight: 600, fontSize: 15, marginLeft: 5}}>Thimphu City Hotel</Typography>
                  <Typography style={{fontWeight: 300, fontSize: 11, marginLeft: 5}}>5m ago</Typography>
                </div>
              </div>
              <img src={require('../../../../assets/Images/resident.png')}
                   style={{width: '100%', marginTop: 15, objectFit: 'contain'}} alt=""/>
              <Typography style={{fontWeight: 300, fontSize: 13, marginLeft: 5, marginTop: 10}}>
                Available rooms: <span style={{fontWeight: 700}}>2</span>
              </Typography>
              <Typography style={{fontWeight: 300, fontSize: 13, marginLeft: 5}}>
                Room type: <span style={{fontWeight: 700}}>Double</span>
              </Typography>
              <Button variant={'contained'}
                      style={{
                        backgroundColor: '#058178',
                        textTransform: 'none',
                        borderRadius: 10,
                        width: '100%',
                        marginTop: 10
                      }}>Send Reservation</Button>
            </Card>
          </Grid>
          <Grid item lg={3}>
            <Card style={{boxShadow: 'none', padding: 5}}>
              <div style={{display: 'flex'}}>
                <img src={require('../../../../assets/Images/hotel-logo2.png')} alt=""/>
                <div>
                  <Typography style={{fontWeight: 600, fontSize: 15, marginLeft: 5}}>Punakha Le meridian</Typography>
                  <Typography style={{fontWeight: 300, fontSize: 11, marginLeft: 5}}>1m ago</Typography>
                </div>
              </div>
              <img src={require('../../../../assets/Images/resident1.png')}
                   style={{width: '100%', marginTop: 15, objectFit: 'contain'}} alt=""/>
              <Typography style={{fontWeight: 300, fontSize: 13, marginLeft: 5, marginTop: 10}}>
                Available rooms: <span style={{fontWeight: 700}}>4</span>
              </Typography>
              <Typography style={{fontWeight: 300, fontSize: 13, marginLeft: 5}}>
                Room type: <span style={{fontWeight: 700}}>Single</span>
              </Typography>
              <Button variant={'contained'}
                      style={{
                        backgroundColor: '#058178',
                        textTransform: 'none',
                        borderRadius: 10,
                        width: '100%',
                        marginTop: 10
                      }}>Send Reservation</Button>
            </Card>
          </Grid>
        </Grid>
      </div>
      <Typography style={{fontWeight: 700, fontSize: 21, color: '#4F4B4B', marginBottom: 10, marginTop: 20}}>Cars for
        hire</Typography>
      <div style={{backgroundColor: '#F7F7F7', padding: 15}}>
        <Grid container spacing={2}>
          <Grid item lg={3}>
            <Card style={{boxShadow: 'none', padding: 5}}>
              <div style={{display: 'flex'}}>
                <img src={require('../../../../assets/Images/rental-logo.png')} alt=""/>
                <div>
                  <Typography style={{fontWeight: 600, fontSize: 15, marginLeft: 5}}>Luxury car rental</Typography>
                  <Typography style={{fontWeight: 300, fontSize: 11, marginLeft: 5}}>30m ago</Typography>
                </div>
              </div>
              <img src={require('../../../../assets/Images/hire1.png')}
                   style={{width: '100%', marginTop: 15, objectFit: 'contain'}} alt=""/>
              <Typography style={{fontWeight: 300, fontSize: 13, marginLeft: 5, marginTop: 10}}>
                Vehicle type: <span style={{fontWeight: 700}}>SUV</span>
              </Typography>
              <Typography style={{fontWeight: 300, fontSize: 13, marginLeft: 5}}>
                Numbers: <span style={{fontWeight: 700}}>1</span>
              </Typography>
              <Button variant={'contained'}
                      style={{
                        backgroundColor: '#058178',
                        textTransform: 'none',
                        borderRadius: 10,
                        width: '100%',
                        marginTop: 10
                      }}>Send Reservation</Button>
            </Card>
          </Grid>
          <Grid item lg={3}>
            <Card style={{boxShadow: 'none', padding: 5}}>
              <div style={{display: 'flex'}}>
                <img src={require('../../../../assets/Images/rental-logo.png')} alt=""/>
                <div>
                  <Typography style={{fontWeight: 600, fontSize: 15, marginLeft: 5}}>Carrental bhutan</Typography>
                  <Typography style={{fontWeight: 300, fontSize: 11, marginLeft: 5}}>10m ago</Typography>
                </div>
              </div>
              <img src={require('../../../../assets/Images/hire2.png')}
                   style={{width: '100%', marginTop: 15, objectFit: 'contain'}} alt=""/>
              <Typography style={{fontWeight: 300, fontSize: 13, marginLeft: 5, marginTop: 10}}>
                Vehicle type: <span style={{fontWeight: 700}}>Prado</span>
              </Typography>
              <Typography style={{fontWeight: 300, fontSize: 13, marginLeft: 5}}>
                Numbers: <span style={{fontWeight: 700}}>2</span>
              </Typography>
              <Button variant={'contained'}
                      style={{
                        backgroundColor: '#058178',
                        textTransform: 'none',
                        borderRadius: 10,
                        width: '100%',
                        marginTop: 10
                      }}>Send Reservation</Button>
            </Card>
          </Grid>
          <Grid item lg={3}>
            <Card style={{boxShadow: 'none', padding: 5}}>
              <div style={{display: 'flex'}}>
                <img src={require('../../../../assets/Images/rental-logo.png')} alt=""/>
                <div>
                  <Typography style={{fontWeight: 600, fontSize: 15, marginLeft: 5}}>Luxury car rental</Typography>
                  <Typography style={{fontWeight: 300, fontSize: 11, marginLeft: 5}}>5m ago</Typography>
                </div>
              </div>
              <img src={require('../../../../assets/Images/hire3.png')}
                   style={{width: '100%', marginTop: 15, objectFit: 'contain'}} alt=""/>
              <Typography style={{fontWeight: 300, fontSize: 13, marginLeft: 5, marginTop: 10}}>
                Vehicle type: <span style={{fontWeight: 700}}>23 seater bus</span>
              </Typography>
              <Typography style={{fontWeight: 300, fontSize: 13, marginLeft: 5}}>
                Numbers: <span style={{fontWeight: 700}}>1</span>
              </Typography>
              <Button variant={'contained'}
                      style={{
                        backgroundColor: '#058178',
                        textTransform: 'none',
                        borderRadius: 10,
                        width: '100%',
                        marginTop: 10
                      }}>Send Reservation</Button>
            </Card>
          </Grid>
        </Grid>
      </div>
      <ListNotification open={open} handleAction={handleClose}/>
    </Container>
  );
};