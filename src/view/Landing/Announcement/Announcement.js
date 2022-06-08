import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import {Card} from '@mui/material';
import Stack from '@mui/material/Stack';
import {Images} from '../../../common/Assets/Images';
import {announcementServices} from '../../../services/AnnouncementServices';
import Moment from 'react-moment';
import Search from '../../../common/Search/Search';

export default function Announcement(props) {
  const [announcements, setAnnouncements] = useState([]);
  const [querySearch, setQuerySearch] = useState('');

  useEffect(() => {
    fetchAnnouncements();
  }, [querySearch]);

  const fetchAnnouncements = async () => {
    await announcementServices('get', null, {query: querySearch}).then(response => {
      setAnnouncements(response?.announcements?.announcements);
    });
  };

  return (
    <div>
      <div>
        <Search placeholder={'Search...'} onChange={(value) => setQuerySearch(value)}/>
      </div>
      <Typography fontSize={18} fontWeight={700} sx={{mb: 2}}>
        Announcement and Events
      </Typography>
      <div className="sticky-top" style={{overflowY: 'scroll', height: '100vh'}}>
        {announcements.map(announcement => (
          <Card className={'card-shadow'} sx={{pb: 2, mb: 3, borderRadius: 2}}>
            <Stack sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', p: 2}}>
              <img width={50} height={50}
                   style={{marginRight: 12, objectFit: 'cover', borderRadius: '50%', backgroundColor: '#c3c3c3'}}
                   src={announcement?.user?.user?.profile?.picture_url || Images.defaultProfile} alt="profile"/>
              <Stack sx={{flexDirection: 'column'}}>
                <Typography sx={{color: '#058178'}}>
                  {announcement?.user?.user?.profile?.name || '---'}
                </Typography>
                <Typography sx={{fontSize: 14, color: '#4F4B4B', mt: -0.5}}>
                  <Moment format="DD/MM/YYYY">{announcement?.created_at || new Date()}</Moment>
                </Typography>
              </Stack>
            </Stack>
            <img draggable={'false'} width="100%" height={255} style={{objectFit: 'cover', backgroundColor: '#c3c3c3'}}
                 src={announcement?.image_url || Images.bannerImage}
                 alt="announcement"/>
            <Stack sx={{p: 2}}>
              <Typography fontSize={18} fontWeight={700} sx={{mb: 2}}>
                {announcement?.title || '---'}
              </Typography>
              <Typography sx={{fontSize: 14, color: '#4F4B4B', mt: -0.5}}>
                {announcement?.body} <span
                style={{color: '#4194a9', fontWeight: 700, cursor: 'pointer'}}>Read more</span>
              </Typography>
            </Stack>
          </Card>
        ))}
      </div>
    </div>
  );
}
