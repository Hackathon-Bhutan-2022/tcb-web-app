import React from 'react';
import {Card, Container, Grid, IconButton, TextField, Typography} from '@mui/material';
import AddAnnouncement from '../Activities/Announcement/AddAnnouncement';
import {Images} from '../../../common/Assets/Images';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ListNotification from '../../../common/Notification/ListNotification';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Announcement from './Announcement';
import Messages from './Messages';

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [comments, setComments] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShow(false);
  };

  const handleNotificationOpen = () => {
    setShow(true);
  };

  const handleComments = () => {
    setComments(!comments);
  };

  return (
    <Container>
      <div style={{display: 'flex'}}>
        <Typography style={{fontWeight: 700, fontSize: 21, color: '#4F4B4B', marginBottom: 10}}>Dashboard</Typography>
        <IconButton style={{backgroundColor: '#EAE8E8', width: 30, height: 30, marginLeft: 25}}>
          <Badge badgeContent={4} color="primary">
            <NotificationsNoneIcon onClick={() => handleNotificationOpen()} />
          </Badge>
        </IconButton>
      </div>
      <Grid container spacing={4}>
        <Grid item lg={4} xs={12}>
          <Announcement />
        </Grid>
        <Grid item lg={4} xs={12}>
          <div style={{backgroundColor: '#F7F7F7', padding: '15px 10px', borderRadius: 10}}>
            <Typography style={{fontWeight: 600, fontSize: 18, marginBottom: 10}}>Posts</Typography>
            <Card style={{
              padding: '15px 10px',
              boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.1)',
              marginBottom: 10,
              cursor: 'pointer',
            }}>
              <div style={{display: 'flex'}}>
                <img src={Images?.bannerImage}
                     style={{width: 45, objectFit: 'cover', borderRadius: 25, height: 45}} alt="" />
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
                   style={{width: '100%', objectFit: 'cover', borderRadius: 5, height: 150, marginTop: 5}} alt="" />
              <div style={{display: 'flex', marginTop: 15}}>
                <img src={Images?.bannerImage}
                     style={{width: 40, objectFit: 'cover', borderRadius: 25, height: 40}} alt="" />
                <TextField
                  multiline maxRows={5}
                  variant={'outlined'}
                  placeholder={'write a comment...'}
                  size={'small'}
                  InputProps={{
                    style: {
                      fontSize: 14,
                    },
                  }}
                  style={{borderRadius: 25, marginLeft: 5, border: 'none'}} fullWidth />
              </div>
              <Typography onClick={handleComments} className={'hand-cursor noselect'} style={{
                fontSize: 15,
                marginBottom: 5,
                textAlign: 'right',
                fontWeight: 600,
                marginLeft: 5,
                marginTop: 5,
                color: '#696969',
              }}>3 comments</Typography>
              {comments ?
                <>
                  <Box>
                    <Box sx={{display: 'flex', mt: 1}}>
                      <img style={{borderRadius: '50%'}} width={35} height={35}
                           src={'https://picsum.photos/id/755/1000/700'} alt="profile" />
                      <Stack sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#b5b5b5',
                        borderRadius: 2,
                        p: 1,
                        ml: 1,
                      }}>
                        <Typography fontSize={14} fontWeight={700} sx={{ml: 1, color: '#fff'}}>Pema Zomba</Typography>
                        <Typography fontSize={12} sx={{ml: 1, color: '#fff'}}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ipsa laudantium necessitatibus
                          nemo
                          quod rem,...
                        </Typography>
                      </Stack>
                    </Box>
                  </Box>
                </> : <div />
              }
            </Card>
          </div>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Messages />
        </Grid>
      </Grid>
      <AddAnnouncement open={open} handleAction={handleClose} />
      <ListNotification handleAction={handleClose} open={show} />
    </Container>
  );
}
