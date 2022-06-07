import React, {useState} from 'react';
import {Button, Card, Container} from '@mui/material';
import CustomizedInputs from '../../../../common/CustomTextField';
import Stack from '@mui/material/Stack';
import SearchVehicle from './SearchVehicle';

export default function TrackVehicle() {
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
  };
  const handleCloseAction = (result) => {
    setShow(false);
  };
  return (
    <Container>
      <Card
        className="card-shadow"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F7F7F7',
          border: '2px solid #F0EFEF',
          p: 3,
          boxShadow: 'none',
          height: '90vh',
        }}
      >
        <Stack sx={{flexDirection: 'column'}}>
          <CustomizedInputs label="Enter Vehicle Number" defaultValue={'ex: Bp-1-2345'} placeholder={'ex: Bp-1-2345'} />
          <Button onClick={handleOpen} variant={'contained'} sx={{backgroundColor: '#058178', mt: 2}}>Search</Button>
        </Stack>
      </Card>
      <SearchVehicle open={show} handleClose={handleCloseAction} />
    </Container>
  );
}
