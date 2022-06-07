import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {Card} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SignUpSelection({handleAction, open}) {
  const navigate = useNavigate();

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleAction}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{'Select Registration type'}</DialogTitle>
        <DialogContent style={{width: 400}}>
          <Card style={{padding: 20, textAlign: 'center', marginBottom: 10, cursor: 'pointer'}}
                onClick={() => navigate('/sign-up')}>
            Travel Agent
          </Card>
          <Card style={{padding: 20, textAlign: 'center', marginBottom: 10, cursor: 'pointer'}}
                onClick={() => navigate('/sign-up')}>
            Tour Guide
          </Card>
          <Card style={{padding: 20, textAlign: 'center', marginBottom: 10, cursor: 'pointer'}}
                onClick={() => navigate('/sign-up')}>
            Car / Bus hiring agency
          </Card>
          <Card style={{padding: 20, textAlign: 'center', cursor: 'pointer'}} onClick={() => navigate('/sign-up')}>
            Hotel Management
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
}
