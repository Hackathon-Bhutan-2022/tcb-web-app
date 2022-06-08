import React from 'react';
import Banner from './Banner/Banner';
import {Grid} from '@mui/material';
import AboutUs from './AboutUs/AboutUs';
import Announcement from './Announcement/Announcement';
import RecentPosts from './RecentPosts/RecentPosts';
import Stack from '@mui/material/Stack';
import Search from '../../common/Search/Search';
import './LandingComponent.scss';

export default function LandingComponents() {

  return (
    <Stack sx={{ml: {lg: 4, md: 4, sm: 4, xs: 1}, mr: {lg: 4, md: 4, sm: 4, xs: 1}}}>
      <Banner />
      <Stack>
        <Grid container spacing={2} sx={{mt: 2}}>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <AboutUs />
          </Grid>
          <Grid item lg={5.5} md={5.5} sm={5.5} xs={12}>
            <Stack sx={{mt: 2}}>
              <Announcement />
            </Stack>
          </Grid>
          <Grid item lg={2.5} md={2.5} sm={2.5} xs={12}>
            <RecentPosts />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}
