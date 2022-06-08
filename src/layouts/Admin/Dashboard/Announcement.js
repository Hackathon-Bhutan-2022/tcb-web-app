import React from 'react';
import {Button, Card, Typography} from '@mui/material';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import {Images} from '../../../common/Assets/Images';
import AddAnnouncement from '../Activities/Announcement/AddAnnouncement';

export default function Announcement(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <AddAnnouncement open={open} handleAction={handleClose} />
      <div style={{backgroundColor: '#F7F7F7', padding: '15px 10px', borderRadius: 10}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography style={{fontWeight: 600, fontSize: 18, marginBottom: 10}}>Announcement</Typography>
          <AddSharpIcon style={{cursor: 'pointer'}} onClick={() => handleClickOpen()} />
        </div>
        <Card style={{
          padding: '15px 10px',
          boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.1)',
          marginBottom: 10,
          cursor: 'pointer',
        }}>
          <Typography style={{fontWeight: 400, fontSize: 12}}>12/12/2022</Typography>
          <img src={Images?.bannerImage}
               style={{width: '100%', objectFit: 'cover', borderRadius: 5, height: 150, marginTop: 5}} alt="" />
          <Typography style={{fontWeight: 400, fontSize: 13, marginTop: 10}}>
            Requirement for tour guide for Regional Tourist
          </Typography>
        </Card>
        <Button variant={'contained'} disableElevation
                style={{width: '100%', backgroundColor: '#fff', color: '#9A9999', textTransform: 'none'}}
                onClick={() => handleClickOpen()}>+ Add announcement</Button>
      </div>
    </div>
  );
}
