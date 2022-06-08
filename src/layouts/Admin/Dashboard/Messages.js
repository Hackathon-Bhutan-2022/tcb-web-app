import React from 'react';
import {Button, Card, TextField, Typography} from '@mui/material';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import Search from '../../../common/Search/Search';
import {Images} from '../../../common/Assets/Images';
import AddAnnouncement from '../Activities/Announcement/AddAnnouncement';
import ReplyIcon from '@mui/icons-material/Reply';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function Messages() {
  const [open, setOpen] = React.useState(false);

  const handleReply = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div style={{backgroundColor: '#F7F7F7', padding: '15px 10px', borderRadius: 10}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography style={{fontWeight: 600, fontSize: 18, marginBottom: 10}}>Messages</Typography>
        </div>
        <div style={{marginBottom: 10}}>
          <Search placeholder={'Search user...'} style={{width: 500}}/>
        </div>
        <Card style={{
          padding: '15px 10px',
          boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.1)',
          marginBottom: 10,
          cursor: 'pointer',
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
          <div align="right">
            <Button variant={'contained'} size={'small'} disableElevation onClick={() => handleReply()}
                    style={{textTransform: 'none', color: 'gray', backgroundColor: '#dbd8d8'}}>
              <ReplyIcon fontSize={'small'} style={{color: 'gray'}}/> Reply</Button>
          </div>
          {open &&
            <>
          <div style={{display: 'flex', marginTop: 15}}>
            <img src={Images?.bannerImage}
                 style={{width: 40, objectFit: 'cover', borderRadius: 25, height: 40}} alt=""/>
            <TextField
              multiline maxRows={5}
              variant={'outlined'}
              placeholder={'Reply...'}
              size={'small'}
              InputProps={{
                style: {
                  fontSize: 14,
                },
              }}
              style={{borderRadius: 25, marginLeft: 5, border: 'none'}} fullWidth/>
          </div>
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
            </>
          }
        </Card>
      </div>
    </div>
  );
}
