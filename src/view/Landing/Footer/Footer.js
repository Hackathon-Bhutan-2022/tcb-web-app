import React from 'react';
import {Typography} from '@mui/material';
import Stack from '@mui/material/Stack';

export default function Footer() {
  return (
    <Stack sx={{backgroundColor: "#5F5E5E", height: "30vh", p: 3}}>
      <Typography align={'center'} sx={{color: '#fff'}}>Footer</Typography>
    </Stack>
  );
}
