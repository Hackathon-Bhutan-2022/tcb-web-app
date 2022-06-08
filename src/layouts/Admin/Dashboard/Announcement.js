import React from 'react';
import {Button, Card, Typography} from '@mui/material';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import {Images} from '../../../common/Assets/Images';
import AddAnnouncement from '../Activities/Announcement/AddAnnouncement';
import {announcementServices} from '../../../services/AnnouncementServices';
import Moment from 'react-moment';
import RenderAuthorized from '../../../routes/RenderAuthorized';

export default function Announcement(props) {
  const [open, setOpen] = React.useState(false);
  const [announcements, setAnnouncements] = React.useState([]);

  React.useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    await announcementServices('get').then(response => {
      setAnnouncements(response?.announcements?.announcements);
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (result) => {
    if (result) {
      fetchAnnouncements();
    }
    setOpen(false);
  };
  return (
    <div>
      <AddAnnouncement open={open} handleAction={handleClose}/>
      <div style={{backgroundColor: '#F7F7F7', padding: '15px 10px', borderRadius: 10}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography style={{fontWeight: 600, fontSize: 18, marginBottom: 10}}>Announcement</Typography>
          <RenderAuthorized authorized={['Portal Admin']}>
            <AddSharpIcon style={{cursor: 'pointer'}} onClick={() => handleClickOpen()}/>
          </RenderAuthorized>
        </div>
        {announcements?.map((announcement, index) => (
          <Card key={index} sx={{
            padding: '15px 10px',
            boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.1)',
            marginBottom: 10,
            cursor: 'pointer',
            mb: 2
          }}>
            <Typography style={{fontWeight: 400, fontSize: 12}}>
              <Moment format="DD/MM/YYYY">{announcement?.created_at || new Date()}</Moment>
            </Typography>
            <img src={announcement?.image_url || Images?.bannerImage}
                 style={{width: '100%', objectFit: 'cover', borderRadius: 5, height: 150, marginTop: 5}} alt=""/>
            <Typography style={{fontWeight: 400, fontSize: 13, marginTop: 10}}>
              {announcement?.title || '---'}
            </Typography>
          </Card>
        ))}
        <RenderAuthorized authorized={['Portal Admin']}>
          <Button variant={'contained'} disableElevation
                  style={{width: '100%', backgroundColor: '#fff', color: '#9A9999', textTransform: 'none'}}
                  onClick={() => handleClickOpen()}>+ Add announcement</Button>
        </RenderAuthorized>
      </div>
    </div>
  );
}
