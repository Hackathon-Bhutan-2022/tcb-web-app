import React from 'react';
import './Banner.scss';
import Stack from '@mui/material/Stack';

function Banner() {
  return (
    <Stack>
      <img draggable={'false'} className='bannerImage' src={'https://picsum.photos/id/999/1000/700'} alt="banner" />
    </Stack>
  );
}

export default Banner;
