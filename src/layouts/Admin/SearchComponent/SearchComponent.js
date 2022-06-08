import React from 'react';
import {
  Grid,
  Card,
  Container,
  IconButton,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import {Images} from '../../../common/Assets/Images';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ListNotification from '../../../common/Notification/ListNotification';
import Search from '../../../common/Search/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ApartmentIcon from '@mui/icons-material/Apartment';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import {Autocomplete} from '@mui/lab';
import FormGroup from 'rsuite/FormGroup';
import {TourGuidesList} from './TourGuidesList';

export default function SearchComponent() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const category = [
    {label: 'Cultural', value: 'cultural'},
    {label: 'Historical', value: 'historical'},
  ]
  const languages = [
    {label: 'English', value: 'english'},
    {label: 'French', value: 'french'},
    {label: 'Japanese', value: 'japanese'},
  ]

  return (
    <Container>
      <div style={{display: 'flex'}}>
        <Typography style={{fontWeight: 700, fontSize: 21, color: '#4F4B4B', marginBottom: 10}}>Search</Typography>
        <IconButton style={{backgroundColor: '#EAE8E8', width: 30, height: 30, marginLeft: 25}}>
          <Badge badgeContent={4} color="primary">
            <NotificationsNoneIcon onClick={() => handleClickOpen()}/>
          </Badge>
        </IconButton>
      </div>
      <div style={{backgroundColor: '#F7F7F7', paddingTop: 25, paddingBottom: 25, marginTop: 55, borderRadius: 5}} align="center">
        <img src={Images?.bannerImage}
             style={{width: 720, objectFit: 'cover', height: 170, marginBottom: 25}} alt=""/>
        <div style={{
          backgroundColor: '#141616E0',
          width: 670,
          borderRadius: 10,
          padding: 15,
          position: 'absolute',
          top: '35%',
          left: '35%'
        }}>
          <div style={{display: 'flex'}}>
            <Typography style={{fontWeight: 400, fontSize: 13, color: '#fff'}}>
              Searching in
            </Typography>
            <Typography style={{
              fontWeight: 400,
              fontSize: 13,
              color: '#fff',
              marginLeft: 25,
              backgroundColor: 'green',
              paddingLeft: 5,
              paddingRight: 5,
              borderRadius: 5
            }}>
              All
            </Typography>
            <Typography style={{fontWeight: 400, fontSize: 13, color: '#fff', marginLeft: 25}}>
              Hotels
            </Typography>
            <Typography style={{
              fontWeight: 400,
              fontSize: 13,
              color: '#fff',
              marginLeft: 25,
              backgroundColor: 'green',
              paddingLeft: 5,
              paddingRight: 5,
              borderRadius: 5
            }}>
              Tour Guides
            </Typography>
            <Typography style={{fontWeight: 400, fontSize: 13, color: '#fff', marginLeft: 25}}>
              Car hiring services
            </Typography>
          </div>
          {/*<div style={{marginTop: 10}}>*/}
          {/*  <Search placeholder="Search..."/>*/}
          {/*</div>*/}
          <div style={{marginTop: 10}}>
            <Grid container spacing={1}>
              <Grid item lg={3}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={category}
                  sx={{backgroundColor: 'white', borderRadius: 1}}
                  renderInput={(params) => <TextField {...params} label="Category" size="small" />}
                />
              </Grid>
              <Grid item lg={3}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={languages}
                  sx={{backgroundColor: 'white', borderRadius: 1}}
                  renderInput={(params) => <TextField {...params} label="Languages" size="small"/>}
                />
              </Grid>
              <Grid item lg={4}>
                <FormGroup>
                  <FormControlLabel style={{color: 'white'}} control={
                    <Checkbox  style={{color: 'white'}} defaultChecked />}
                                    label="Show only available" />
                </FormGroup>
              </Grid>
              <Grid item lg={2}>
                <Button variant="contained" style={{textTransform: 'none', backgroundColor: '#058178'}}>Search</Button>
              </Grid>
            </Grid>
          </div>
        </div>
        <div style={{width: 720}}>
          <TourGuidesList/>
        </div>
        <Card style={{
          width: 720,
          boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.1)',
          marginBottom: 10,
          padding: 100,
          cursor: 'pointer'
        }}>
          <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
            <div>
              <IconButton style={{backgroundColor: '#058178'}}>
                <AccountCircleIcon style={{color: 'white'}}/>
              </IconButton>
              <Typography style={{fontWeight: 700, fontSize: 16, marginTop: 5}}>
                6543
              </Typography>
              <Typography style={{fontWeight: 400, fontSize: 13, marginTop: 5}}>
                Tour Guides
              </Typography>
            </div>
            <div>
              <IconButton style={{backgroundColor: '#058178'}}>
                <ApartmentIcon style={{color: 'white'}}/>
              </IconButton>
              <Typography style={{fontWeight: 700, fontSize: 16, marginTop: 5}}>
                543
              </Typography>
              <Typography style={{fontWeight: 400, fontSize: 13, marginTop: 5}}>
                Hotels
              </Typography>
            </div>
            <div>
              <IconButton style={{backgroundColor: '#058178'}}>
                <DirectionsCarIcon style={{color: 'white'}}/>
              </IconButton>
              <Typography style={{fontWeight: 700, fontSize: 16, marginTop: 5}}>
                495
              </Typography>
              <Typography style={{fontWeight: 400, fontSize: 13, marginTop: 5}}>
                Car hiring services
              </Typography>
            </div>
          </div>
        </Card>
      </div>
      <ListNotification handleAction={handleClose} open={open}/>
    </Container>
  );
}
