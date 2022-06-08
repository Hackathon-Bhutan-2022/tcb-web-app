import React from 'react';
import './Banner.scss';
import Stack from '@mui/material/Stack';
import {Images} from '../../../common/Assets/Images';
import Typography from '@mui/material/Typography';

function Banner() {
  return (
    <Stack sx={{position: 'relative'}}>
      <img draggable={'false'} className='bannerImage card-shadow' src={Images.newBanner} alt="banner" />
      <Stack sx={{position: 'absolute', left: '8%', bottom: '15%'}}>
        <Typography className={'noselect'} fontWeight={700} color={'#fff'}
                    sx={{mt: -1, fontSize: {lg: 32, md: 32, sm: 32, xs: 20}}}>
          Striving towards achieving
        </Typography>
        <Typography className={'noselect'} fontWeight={700} color={'#fff'}
                    sx={{mt: -1, fontSize: {lg: 48, md: 48, sm: 48, xs: 25}}}>
          Vibrant and Sustainable
        </Typography>
        <Typography className={'noselect'} fontWeight={700} color={'#fff'}
                    sx={{mt: -1, fontSize: {lg: 48, md: 48, sm: 48, xs: 25}}}>
          Tourism Industry
        </Typography>
        <Typography className={'noselect'} fontWeight={700} color={'#fff'}
                    sx={{mt: -1, fontSize: {lg: 32, md: 32, sm: 32, xs: 15}}}>
          through connectedness
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Banner;
