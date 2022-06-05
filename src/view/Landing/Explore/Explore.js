import React, {useState} from 'react';
import {Box, Typography} from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Images} from '../../../common/Assets/Images';
import './Explore.scss';
import Stack from '@mui/material/Stack';

export default function Explore() {
  const loop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 34, 2, 3, 44, 55];

  const [responsive] = useState({
    responsive: {
      superLargeDesktop: {
        breakpoint: {max: 4000, min: 1920},
        items: 6.3,
      },
      desktop: {
        breakpoint: {max: 1919, min: 1280},
        items: 6.3,
      },
      ipadPro: {
        breakpoint: {max: 1279, min: 960},
        items: 4.3,
      },
      ipad: {
        breakpoint: {max: 959, min: 600},
        items: 3.3,
      },
      mobile: {
        breakpoint: {max: 599, min: 321},
        items: 2.7,
      },
      iPhone: {
        breakpoint: {max: 320, min: 0},
        items: 2.5,
      },
    },
  });
  return (
    <Box>
      <Typography fontSize={24} fontWeight={700} align={'center'} sx={{mt: 3, mb: 3}}>Explore by Interest</Typography>
      <Stack sx={{ml: 2, mr: 2}}>
        <Carousel
          ssr
          transition={0.5}
          swiping={true}
          swipeOn={true}
          swipeable={true}
          responsive={responsive.responsive}
          className='hand-cursor'
          removeArrowOnDeviceType={['mobile']}
          // showDots={true}
          // renderDotsOutside={true}
          shouldResetAutoplay={false}
        >
          {loop.map(value => (
            <div className='container'>
              <div>
                <img draggable={'false'} className="explore-image" src={Images.maskDance} alt="explore" />
                <Typography fontSize={14} align={'center'}>Culture</Typography>
              </div>
            </div>
          ))}
        </Carousel>
      </Stack>
    </Box>
  );
}
