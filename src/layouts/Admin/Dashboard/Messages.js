import React from 'react';
import {Card, Container, Typography} from '@mui/material';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import Search from '../../../common/Search/Search';
import {Images} from '../../../common/Assets/Images';
import AddAnnouncement from '../Activities/Announcement/AddAnnouncement';

export default function Messages() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div style={{backgroundColor: '#F7F7F7', padding: '15px 10px', borderRadius: 10}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography style={{fontWeight: 600, fontSize: 18, marginBottom: 10}}>Messages</Typography>
          <AddSharpIcon style={{cursor: 'pointer'}} onClick={() => handleClickOpen()} />
        </div>
        <div style={{marginBottom: 10}}>
          <Search placeholder={'Search user...'} style={{width: 500}} />
        </div>
        <Card style={{
          padding: '15px 10px',
          boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.1)',
          marginBottom: 10,
          cursor: 'pointer',
        }}>
          <div style={{display: 'flex'}}>
            <img src={Images?.bannerImage}
                 style={{width: 50, objectFit: 'cover', borderRadius: 25, height: 50}} alt="" />
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
      <AddAnnouncement open={open} handleAction={handleClose} />
    </div>
  );
}
