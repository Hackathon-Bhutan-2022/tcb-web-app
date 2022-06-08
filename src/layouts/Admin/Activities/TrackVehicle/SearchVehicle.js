import React from 'react';
import {Card, Dialog, DialogContent, DialogTitle, Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import TabsTrackVehicle from './TabsTrackVehicle';

export default function SearchVehicle({open, handleClose}) {
  return (
    <Dialog
      open={open}
      onClose={(e) => handleClose(false, e)}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography fontWeight={'550'} sx={{mb: 2}}>GPS tracking</Typography>
          <CloseIcon className="hand-cursor" onClick={(e) => handleClose(true, e)} />
        </div>
      </DialogTitle>
      <DialogContent sx={{width: 600}}>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <img draggable={'false'} width="100%" height={200} style={{objectFit: 'cover'}}
                 src={'https://picsum.photos/id/5/200/200'} alt="event profile" />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <img draggable={'false'} width="100%" height={200} style={{objectFit: 'cover'}}
                 src={'https://picsum.photos/id/5/200/200'} alt="event profile" />
          </Grid>
        </Grid>
        <Card sx={{mt: 2}}>
          <TabsTrackVehicle />
        </Card>
      </DialogContent>
    </Dialog>
  );
}
