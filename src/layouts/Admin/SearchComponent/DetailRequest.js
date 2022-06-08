import {Button, Container, IconButton, Typography} from '@mui/material';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import React from 'react';
import ListNotification from '../../../common/Notification/ListNotification';

export const DetailRequest = () => {
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
        <Typography style={{fontWeight: 700, fontSize: 21, color: '#4F4B4B', marginBottom: 10}}>Service
          request</Typography>
        <IconButton style={{backgroundColor: '#EAE8E8', width: 30, height: 30, marginLeft: 25}}>
          <Badge badgeContent={4} color="primary">
            <NotificationsNoneIcon onClick={() => handleClickOpen()}/>
          </Badge>
        </IconButton>
      </div>
      <div align="center" style={{backgroundColor: '#F7F7F7', borderRadius: 5, paddingTop: 25, paddingBottom: 25}}>
        <div style={{width: 500}}>
          <Typography style={{fontWeight: 700, fontSize: 20}}>Summary</Typography>
          <Typography style={{fontWeight: 700, fontSize: 20}}>ID: ITI02384</Typography>
          <div>
            <Typography style={{fontWeight: 300, fontSize: 13, textAlign: 'left'}}>Day 1</Typography>
            <Typography style={{color: '#000', fontWeight: 700, fontSize: 14, textAlign: 'left'}}>Hike to
              taktshang</Typography>
            <Typography style={{fontWeight: 500, fontSize: 12, textAlign: 'left'}}>Paro</Typography>
            <Typography style={{fontWeight: 300, fontSize: 12, textAlign: 'left', color: '#747272', marginTop: 5}}>
              The hike to the temple takes around five hours and travellers will pass through a dense forest and emerge
              on
              the edge of a rocky chasm, where they will need to climb down to a trickling waterfall and then back up
              the
              cliff face to the monastery on the other side.
            </Typography>
            <div style={{marginTop: 15, marginBottom: 25}} align="left">
              <img src={require('../../../assets/Images/taktshang1.png')}
                   style={{objectFit: 'cover', borderRadius: 2, marginTop: 5}} alt=""/>
              <img src={require('../../../assets/Images/taktshang2.png')}
                   style={{objectFit: 'cover', borderRadius: 2, marginTop: 5, marginLeft: 10}}
                   alt=""/>
              <img src={require('../../../assets/Images/taktshang3.png')}
                   style={{objectFit: 'cover', borderRadius: 2, marginTop: 5, marginLeft: 10}}
                   alt=""/>
              <img src={require('../../../assets/Images/taktshang4.png')}
                   style={{objectFit: 'cover', borderRadius: 2, marginTop: 5, marginLeft: 10}}
                   alt=""/>
              <img src={require('../../../assets/Images/taktshang5.png')}
                   style={{objectFit: 'cover', borderRadius: 2, marginTop: 5, marginLeft: 10}}
                   alt=""/>
            </div>
          </div>
          <div>
            <Typography style={{fontWeight: 300, fontSize: 13, textAlign: 'left'}}>Day 2</Typography>
            <Typography style={{color: '#000', fontWeight: 700, fontSize: 14, textAlign: 'left'}}>Hike to
              Thimphu</Typography>
            <Typography style={{fontWeight: 500, fontSize: 12, textAlign: 'left'}}>Thimphu</Typography>
            <Typography style={{fontWeight: 300, fontSize: 12, textAlign: 'left', color: '#747272', marginTop: 5}}>
              The hike to the temple takes around five hours and travellers will pass through a dense forest and emerge
              on
              the edge of a rocky chasm, where they will need to climb down to a trickling waterfall and then back up
              the
              cliff face to the monastery on the other side.
            </Typography>
            <div style={{marginTop: 15, marginBottom: 25}} align="left">
              <img src={require('../../../assets/Images/tphu.png')}
                   style={{objectFit: 'cover', borderRadius: 2, marginTop: 5}}
                   alt=""/>
              <img src={require('../../../assets/Images/tphu1.png')}
                   style={{objectFit: 'cover', borderRadius: 2, marginTop: 5, marginLeft: 10}}
                   alt=""/>
              <img src={require('../../../assets/Images/tphu2.png')}
                   style={{objectFit: 'cover', borderRadius: 2, marginTop: 5, marginLeft: 10}}
                   alt=""/>
            </div>
          </div>
          <div>
            <Typography style={{fontWeight: 700, fontSize: 14, textAlign: 'left'}}>Accomodation</Typography>
            <Typography style={{fontWeight: 500, fontSize: 12, textAlign: 'left'}}>Taj Tashi</Typography>
            <div style={{marginTop: 15, marginBottom: 25}} align="left">
              <img src={require('../../../assets/Images/taj1.png')}
                   style={{objectFit: 'cover', borderRadius: 2, marginTop: 5}}
                   alt=""/>
              <img src={require('../../../assets/Images/taj2.png')}
                   style={{objectFit: 'cover', borderRadius: 2, marginTop: 5, marginLeft: 10}}
                   alt=""/>
            </div>
          </div>
          <div>
            <Typography style={{fontWeight: 300, fontSize: 13, textAlign: 'left'}}>Day 3</Typography>
            <Typography style={{color: '#000', fontWeight: 700, fontSize: 14, textAlign: 'left'}}>Essence of
              west-central Bhutan</Typography>
            <Typography style={{fontWeight: 500, fontSize: 12, textAlign: 'left'}}>Punakha</Typography>
            <Typography style={{fontWeight: 300, fontSize: 12, textAlign: 'left', color: '#747272', marginTop: 5}}>
              Khamsum Yuley Temple - There is no temple in Bhutan built elaborately as this. This fascinating temple was
              built by the Queen Mother of the 5th King to bring universal peace in this world. The best of the
              spiritual art works are painted on the inner walls. There are also paintings of Buddhist teachers and
              tutelary deities of the country. This is a great temple to study the symbolic meanings from frescoes and
              sculptures.
            </Typography>
            <div style={{marginTop: 15, marginBottom: 25}} align="left">
              <img src={require('../../../assets/Images/punakha1.png')}
                   style={{objectFit: 'cover', borderRadius: 2, marginTop: 5}}
                   alt=""/>
              <img src={require('../../../assets/Images/punakha2.png')}
                   style={{objectFit: 'cover', borderRadius: 2, marginTop: 5, marginLeft: 10}}
                   alt=""/>
              <img src={require('../../../assets/Images/punakha3.png')}
                   style={{objectFit: 'cover', borderRadius: 2, marginTop: 5, marginLeft: 10}}
                   alt=""/>
            </div>
          </div>
          <div>
            <Typography style={{fontWeight: 700, fontSize: 14, textAlign: 'left'}}>Accomodation</Typography>
            <Typography style={{fontWeight: 500, fontSize: 12, textAlign: 'left'}}>Hotel Noryang</Typography>
            <div style={{marginTop: 15, marginBottom: 25}} align="left">
              <img src={require('../../../assets/Images/hotel1.png')}
                   style={{objectFit: 'cover', borderRadius: 2, marginTop: 5}}
                   alt=""/>
              <img src={require('../../../assets/Images/hotel2.png')}
                   style={{objectFit: 'cover', borderRadius: 2, marginTop: 5, marginLeft: 10}}
                   alt=""/>
            </div>
          </div>
          <div>
            <Typography style={{fontWeight: 300, fontSize: 13, textAlign: 'left'}}>Day 4</Typography>
            <Typography style={{color: '#000', fontWeight: 700, fontSize: 14, textAlign: 'left'}}>Departure</Typography>
            <Typography style={{fontWeight: 500, fontSize: 12, textAlign: 'left'}}>Paro</Typography>
            <Typography style={{fontWeight: 300, fontSize: 12, textAlign: 'left', color: '#747272', marginTop: 5}}>
              Today we will bid fond farewell to this beautiful Himalayan country. We hope by now you would have made
              some friends and also kept many photos and beautiful memories of Bhutan! And we look forward to seeing you
              again in this beautiful land of endless Enchantments! Tashi Delek!
            </Typography>
          </div>
          <div align="left" style={{marginTop: 15}}>
            <Button variant={'outlined'}
                    style={{
                      textTransform: 'none',
                      borderColor: '#0DCD15',
                      color: '#0DCD15',
                      width: 135
                    }}>Accept</Button>
            <Button variant={'outlined'}
                    style={{
                      textTransform: 'none',
                      marginLeft: 10,
                      borderColor: '#F50B0B',
                      color: '#F50B0B',
                      width: 135
                    }}>Reject</Button>
          </div>
        </div>
      </div>
      <ListNotification handleAction={handleClose} open={open}/>
    </Container>
  );
};