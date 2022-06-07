import React from 'react';
import {AppBar, Box, CssBaseline, Toolbar, Typography, useScrollTrigger, Zoom} from '@mui/material';
import * as PropTypes from 'prop-types';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Images} from '../../../common/Assets/Images';
import './Header.scss';
import {Nav, NavItem, NavLink} from 'reactstrap';
import PhoneMenu from './PhoneMenu';

function ScrollTop(props) {
  const {children, window} = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{position: 'fixed', bottom: 16, right: 16}}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Header(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar sx={{boxShadow: 'none', bgcolor: 'transparent', top: 10}} position="absolute">
        <Toolbar className='headerContent'>
          <Box>
            <img draggable={'false'} width={80} height={45} src={Images.logo} alt="site logo" />
          </Box>
          <Box className='flex-center' sx={{display: {lg: 'flex', md: 'flex', sm: 'none', xs: 'none'}}}>
            <Nav className='flex list-type' navbar>
              <NavItem>
                <NavLink href="/" className='text-decoration-none'>
                  <Typography className='header-mr' color="secondary">Travel Blogs</Typography>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin" className='text-decoration-none'>
                  <Typography className='header-mr' color="secondary">Dashboard</Typography>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login" className='text-decoration-none'>
                  <Typography className='header-mr' color="secondary">Login</Typography>
                </NavLink>
              </NavItem>
            </Nav>
            {/*<Box>*/}
            {/*  <ButtonContained text='Sign Up' onClick={() => navigate('/sign-up')} />*/}
            {/*</Box>*/}
          </Box>
          <Box sx={{display: {lg: 'none', md: 'none', sm: 'inline', xs: 'inline'}}}>
            <PhoneMenu />
          </Box>
        </Toolbar>
      </AppBar>
      {/*<Toolbar id="back-to-top-anchor" />*/}
      {/*<ScrollTop {...props}>*/}
      {/*  <Fab color="primary" size="small" aria-label="scroll back to top">*/}
      {/*    <KeyboardArrowUpIcon sx={{color: '#fff'}} />*/}
      {/*  </Fab>*/}
      {/*</ScrollTop>*/}
    </React.Fragment>
  );
}
