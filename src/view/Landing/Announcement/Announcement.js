import React from 'react';
import Typography from '@mui/material/Typography';
import {Card} from '@mui/material';
import Stack from '@mui/material/Stack';
import {Images} from '../../../common/Assets/Images';

export default function Announcement(props) {
  const announcement = [1, 2, 3, 4, 5];
  return (
    <div>
      <Typography fontSize={18} fontWeight={700} sx={{mb: 2}}>
        Announcement and Events
      </Typography>
      <div className="sticky-top" style={{overflowY: 'scroll', height: '100vh'}}>
        {announcement.map(value => (
          <Card className={'card-shadow'} sx={{pb: 2, mb: 3, borderRadius: 2}}>
            <Stack sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', p: 2}}>
              <img width={50} height={50}
                   style={{marginRight: 12, objectFit: 'cover', borderRadius: '50%', backgroundColor: '#c3c3c3'}}
                   src={Images.defaultProfile} alt="profile" />
              <Stack sx={{flexDirection: 'column'}}>
                <Typography sx={{color: '#058178'}}>
                  Bhutan Tourism council of Bhutan
                </Typography>
                <Typography sx={{fontSize: 14, color: '#4F4B4B', mt: -0.5}}>
                  23 min ago
                </Typography>
              </Stack>
            </Stack>
            <img draggable={'false'} width="100%" height={255} style={{objectFit: 'cover', backgroundColor: '#c3c3c3'}}
                 src={Images.bannerImage}
                 alt="announcement" />
            <Stack sx={{p: 2}}>
              <Typography fontSize={18} fontWeight={700} sx={{mb: 2}}>
                Requirement for tour guide for Regional Tourist
              </Typography>
              <Typography sx={{fontSize: 14, color: '#4F4B4B', mt: -0.5}}>
                All tourists (excluding Indian, Bangladeshi and Maldivian passport holders) who wish to travel to Bhutan
                require a visa and must book their holiday through a Bhutanese tour operator or one of their
                international
                partners. The tour operator will take care of Visa arrangements for visitors... <span
                style={{color: '#4194a9', fontWeight: 700, cursor: 'pointer'}}>Read more</span>
              </Typography>
            </Stack>
          </Card>
        ))}
      </div>
    </div>
  );
}
