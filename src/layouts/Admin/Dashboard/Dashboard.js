import React from 'react';
import {Button, Card, Container, Grid, TextField, Typography} from '@mui/material';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import AddAnnouncement from '../Activities/Announcement/AddAnnouncement';
import {Images} from '../../../common/Assets/Images';
import Search from '../../../common/Search/Search';

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Typography style={{fontWeight: 700, fontSize: 21, color: '#4F4B4B', marginBottom: 10}}>Dashboard</Typography>
      <Grid container spacing={4}>
        <Grid item lg={4} xs={12}>
          <div style={{backgroundColor: '#F7F7F7', padding: '15px 10px', borderRadius: 10}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <Typography style={{fontWeight: 600, fontSize: 18, marginBottom: 10}}>Announcement</Typography>
              <AddSharpIcon style={{cursor: 'pointer'}} onClick={() => handleClickOpen()}/>
            </div>
            <Card style={{
              padding: '15px 10px',
              boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.1)',
              marginBottom: 10,
              cursor: 'pointer'
            }}>
              <Typography style={{fontWeight: 400, fontSize: 12}}>12/12/2022</Typography>
              <img src={Images?.bannerImage}
                   style={{width: '100%', objectFit: 'cover', borderRadius: 5, height: 150, marginTop: 5}} alt=""/>
              <Typography style={{fontWeight: 400, fontSize: 13, marginTop: 10}}>
                Requirement for tour guide for Regional Tourist
              </Typography>
            </Card>
            <Button variant={'contained'} disableElevation
                    style={{width: '100%', backgroundColor: '#fff', color: '#9A9999', textTransform: 'none'}}
                    onClick={() => handleClickOpen()}>+ Add announcement</Button>
          </div>
        </Grid>
        <Grid item lg={4} xs={12}>
          <div style={{backgroundColor: '#F7F7F7', padding: '15px 10px', borderRadius: 10}}>
            <Typography style={{fontWeight: 600, fontSize: 18, marginBottom: 10}}>Posts</Typography>
            <Card style={{
              padding: '15px 10px',
              boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.1)',
              marginBottom: 10,
              cursor: 'pointer'
            }}>
              <div style={{display: 'flex'}}>
                <img src={Images?.bannerImage}
                     style={{width: 45, objectFit: 'cover', borderRadius: 25, height: 45}} alt=""/>
                <div>
                  <Typography style={{fontWeight: 600, fontSize: 14, marginLeft: 10}}>Pema Dorji</Typography>
                  <Typography style={{fontWeight: 400, fontSize: 12, marginLeft: 10, color: '#4F4B4B'}}>
                    12/12/2022, 10:00 AM</Typography>
                </div>
              </div>
              <Typography style={{fontWeight: 300, fontSize: 12, marginTop: 5}}>
                The road block a few kilometers from Shingkhar is anticipated to be cleared only by 7 am tomorrow.
                Please avoid...
              </Typography>
              <img src={Images?.bannerImage}
                   style={{width: '100%', objectFit: 'cover', borderRadius: 5, height: 150, marginTop: 5}} alt=""/>
            </Card>
            <Typography style={{
              fontSize: 15,
              marginBottom: 5,
              textAlign: 'right',
              fontWeight: 600,
              marginLeft: 5,
              marginTop: 10
            }}>3 comments</Typography>
            <div style={{display: 'flex'}}>
              <img src={Images?.bannerImage}
                   style={{width: 40, objectFit: 'cover', borderRadius: 25, height: 40}} alt=""/>
              <TextField variant={'outlined'} placeholder={'write a comment...'} size={'small'}
                         style={{borderRadius: 25, marginLeft: 5, border: 'none'}} fullWidth/>
            </div>
          </div>
        </Grid>
        <Grid item lg={4} xs={12}>
          <div style={{backgroundColor: '#F7F7F7', padding: '15px 10px', borderRadius: 10}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <Typography style={{fontWeight: 600, fontSize: 18, marginBottom: 10}}>Messages</Typography>
              <AddSharpIcon style={{cursor: 'pointer'}} onClick={() => handleClickOpen()}/>
            </div>
            <div style={{marginBottom: 10}}>
              <Search placeholder={'Search user...'} style={{width: 500}}/>
            </div>
            <Card style={{
              padding: '15px 10px',
              boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.1)',
              marginBottom: 10,
              cursor: 'pointer'
            }}>
              <div style={{display: 'flex'}}>
                <img src={Images?.bannerImage}
                     style={{width: 50, objectFit: 'cover', borderRadius: 25, height: 50}} alt=""/>
                <div>
                  <Typography style={{fontWeight: 600, fontSize: 14, marginLeft: 10, marginTop: 5}}>Hotel
                    Ariya</Typography>
                  <Typography style={{fontWeight: 400, fontSize: 12, marginLeft: 10, color: '#4F4B4B'}}>
                    2 mins ago</Typography>
                </div>
              </div>
              <Typography style={{fontWeight: 300, fontSize: 12, marginTop: 5}}>
                The road block a few kilometers from Shingkhar is anticipated to be cleared only by 7 am tomorrow.
                Please avoid...
              </Typography>
            </Card>
          </div>
        </Grid>
      </Grid>
      <AddAnnouncement open={open} handleAction={handleClose}/>
    </Container>
  );
}
