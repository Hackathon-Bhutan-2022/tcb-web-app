import React, {useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import events from './Events';
import EventDetail from './EventDetail';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Search from '../../../../common/Search/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {Autocomplete, Button, Container, TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddEvents from './AddEvents';

export default function Calender() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseAction = (result) => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setShow(true);
  };
  const handleclose = () => {
    setShow(false);
  };

  return (
    <Container className="App">
      <Stack sx={{mb: 3, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography
          align={'left'}
          style={{
            fontWeight: 700,
            fontSize: 24,
            color: '#4F4B4B',
            marginBottom: 10,
          }}>
          Calender
        </Typography>
        <Stack sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Search placeholder={'Search...'} />
          <FilterAltIcon sx={{ml: 2}} />
          <Typography fontSize={14} sx={{mr: 1}}>Filter</Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={month}
            margin={'none'}
            size={'small'}
            sx={{width: 300}}
            renderInput={(params) => <TextField {...params} label="Month" />}
          />
          <Button startIcon={<AddIcon/>} variant={'contained'} sx={{backgroundColor: '#058178', width: 200, ml: 2, borderRadius: 25}}
                  fullWidth onClick={() => handleClickOpen()}>Add event</Button>
        </Stack>
      </Stack>
      <FullCalendar
        defaultView="dayGridMonth"
        // themeSystem="Simplex"
        // header={{
        //   left: "prev,next",
        //   center: "title",
        //   right: "dayGridMonth,timeGridWeek,timeGridDay",
        // }}
        plugins={[dayGridPlugin]}
        events={events}
        displayEventEnd="true"
        eventClick={handleOpen}
        eventColor={'#058178'}
      />
      <EventDetail open={open} handleClose={handleCloseAction} />
      <AddEvents handleAction={handleclose} open={show}/>
    </Container>
  );
}

const month = [
  {label: 'Jan'},
  {label: 'Feb'},
  {label: 'March'},
];
