import React, {useState} from 'react';
import {Box, Typography} from '@mui/material';
import Stack from '@mui/material/Stack';
import Carousel from 'react-multi-carousel';
import {Images} from '../../../common/Assets/Images';
import './TopAttraction.scss';

export default function TopAttraction() {
  const loop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 34, 2, 3];

  const [responsive] = useState({
    responsive: {
      superLargeDesktop: {
        breakpoint: {max: 4000, min: 1920},
        items: 6.3,
      },
      desktop: {
        breakpoint: {max: 1919, min: 1280},
        items: 5,
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
        items: 1.999,
      },
      iPhone: {
        breakpoint: {max: 320, min: 0},
        items: 1.999,
      },
    },
  });
  return (
    <Box>
      <Typography fontSize={24} fontWeight={700} sx={{mt: 2, mb: 2, ml: 2}}>Top Attractions</Typography>
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
            <>
              <div style={{position: 'relative'}}>
                <img draggable={'false'} className="attraction-image" src={Images.buddha} alt="explore" />
                <div className="container360">
                  <Typography fontSize={14} align={'center'} fontWeight={700} sx={{color: "#fff"}}>Buddha</Typography>
                  <img draggable={'false'} className="img-cam360" src={Images.cam360} alt="icon-360" />
                </div>
              </div>
            </>
          ))}
        </Carousel>
      </Stack>
    </Box>
  );
}
