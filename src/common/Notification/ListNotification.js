import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import {Divider, Typography} from '@mui/material';
import {Images} from '../Assets/Images';
import {useNavigate} from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function ListNotification({handleAction, open, notifications = []}) {
  const navigation = useNavigate();

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleAction}
        aria-describedby="alert-dialog-slide-description"
        style={{width: 400}}
      >
        <DialogContent style={{backgroundColor: '#c4c4c4'}}>
          <Typography style={{fontWeight: 600, fontSize: 24}}>Notifications</Typography>
          {notifications.map(value => (
            <>
              <div style={{display: 'flex'}} onClick={() => navigation('/admin/detail/service')}>
                <img src={Images?.bannerImage}
                     style={{width: 50, objectFit: 'cover', borderRadius: 25, height: 50}} alt=""/>
                <div>
                  <Typography style={{fontWeight: 600, fontSize: 14, marginLeft: 10}}>Pema Dorji <span
                    style={{fontWeight: 400}}>created a post on road condition from thimphu to phuentsholing</span>
                  </Typography>
                  <Typography style={{fontWeight: 400, fontSize: 12, marginLeft: 10, color: '#4F4B4B'}}>
                    12/12/2022, 10:00 AM</Typography>
                </div>
              </div>
              <Divider style={{marginTop: 15, marginBottom: 15}}/>
            </>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
}
