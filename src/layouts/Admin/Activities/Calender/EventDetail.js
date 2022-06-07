import React from 'react';
import {Dialog, DialogContent, DialogTitle} from '@mui/material';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

export default function EventDetail({open, handleClose}) {
  return (
    <Dialog
      open={open}
      onClose={(e) => handleClose(false, e)}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography fontWeight={'550'} sx={{mb: 2}}>First Aid refresher’s training</Typography>
          <CloseIcon className="hand-cursor" onClick={(e) => handleClose(true, e)} />
        </div>
      </DialogTitle>
      <DialogContent  sx={{width: 500}}>
        <img draggable={'false'} width="100%" height={200} style={{objectFit: 'cover'}}
             src={'https://picsum.photos/id/4/200/200'} alt="event profile" />
        <Typography fontSize={14} sx={{mt: 2}}>
          hi
        </Typography>
        <Typography fontSize={14} fontWeight={700} sx={{mt: 2}}>
          Course Duration
        </Typography>
        <Typography fontSize={14}>
          Three hours
        </Typography>
        <Typography fontSize={14} fontWeight={700} sx={{mt: 2}}>
          Topics Covered
        </Typography>
        <Typography fontSize={14}>
          hi
        </Typography>
      </DialogContent>
    </Dialog>
  );
}
