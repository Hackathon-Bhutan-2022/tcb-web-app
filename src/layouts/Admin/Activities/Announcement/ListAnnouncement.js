import {Button, Card, Container, Grid, Typography} from '@mui/material';
import Search from '../../../../common/Search/Search';
import React from 'react';
import {Images} from '../../../../common/Assets/Images';
import AddAnnouncement from './AddAnnouncement';

export const ListAnnouncement = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography style={{fontWeight: 700, fontSize: 24, color: '#4F4B4B', marginBottom: 10}}>Activities</Typography>
        <Button variant={'contained'} style={{textTransform: 'none', height: 35, backgroundColor: '#058178'}}
                onClick={() => handleClickOpen()}>+ Add announcement</Button>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 10}}>
        <Typography style={{fontWeight: 700, color: '#4F4B4B', marginTop: 10}}>Announcement</Typography>
        <Search placeholder="Search..."/>
      </div>
      <div style={{backgroundColor: '#F7F7F7', marginTop: 15, padding: 20}}>
        <Grid container spacing={2}>
          <Grid item lg={4} xs={12}>
            <Card style={{padding: '15px 10px', boxShadow: '0 1rem 6rem rgba(0, 0, 0, 0.155)', cursor: 'pointer'}}>
              <Typography style={{fontWeight: 400, fontSize: 12}}>12/12/2022</Typography>
              <img src={Images?.bannerImage}
                   style={{width: '100%', objectFit: 'cover', borderRadius: 5, height: 150, marginTop: 5}} alt=""/>
              <Typography style={{fontWeight: 400, fontSize: 13, marginTop: 10}}>
                Requirement for tour guide for Regional Tourist
              </Typography>
            </Card>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Card style={{padding: '15px 10px', boxShadow: '0 1rem 6rem rgba(0, 0, 0, 0.155)', cursor: 'pointer'}}>
              <Typography style={{fontWeight: 400, fontSize: 12}}>12/12/2022</Typography>
              <img src={Images?.bannerImage}
                   style={{width: '100%', objectFit: 'cover', borderRadius: 5, height: 150, marginTop: 5}} alt=""/>
              <Typography style={{fontWeight: 400, fontSize: 13, marginTop: 10}}>
                Requirement for tour guide for Regional Tourist
              </Typography>
            </Card>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Card style={{padding: '15px 10px', boxShadow: '0 1rem 6rem rgba(0, 0, 0, 0.155)', cursor: 'pointer'}}>
              <Typography style={{fontWeight: 400, fontSize: 12}}>12/12/2022</Typography>
              <img src={Images?.bannerImage}
                   style={{width: '100%', objectFit: 'cover', borderRadius: 5, height: 150, marginTop: 5}} alt=""/>
              <Typography style={{fontWeight: 400, fontSize: 13, marginTop: 10}}>
                Requirement for tour guide for Regional Tourist
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </div>
      <AddAnnouncement open={open} handleAction={handleClose}/>
    </Container>
  );
};