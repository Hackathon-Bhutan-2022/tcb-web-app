import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {Card} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import Typography from '@mui/material/Typography';

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
        <DialogTitle sx={{backgroundColor: '#D6D6D6', color: "#2f2f2f"}}>
          <Typography align={"center"} fontSize={20}>Select Registration type</Typography>
        </DialogTitle>
        <DialogContent sx={{width: 500, backgroundColor: '#d6d6d6'}}>
          <Card className={'card-shadow'} style={{padding: 20, textAlign: 'center', marginBottom: 10, cursor: 'pointer'}}
                onClick={() => navigate('/sign-up?as=agent')}>
            Travel Agent
          </Card>
          <Card className={'card-shadow'} style={{padding: 20, textAlign: 'center', marginBottom: 10, cursor: 'pointer'}}
                onClick={() => navigate('/sign-up?as=guide')}>
            Tour Guide
          </Card>
          <Card className={'card-shadow'} style={{padding: 20, textAlign: 'center', marginBottom: 10, cursor: 'pointer'}}
                onClick={() => navigate('/sign-up?as=hiring')}>
            Car / Bus Hiring Agency
          </Card>
          <Card className={'card-shadow'} style={{padding: 20, textAlign: 'center', cursor: 'pointer'}}
                onClick={() => navigate('/sign-up?as=hotel')}>
            Hotel Management
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
}
