import React, {useContext} from 'react';
import {AppBar, Box, CssBaseline, Toolbar, Typography, useScrollTrigger, Zoom} from '@mui/material';
import * as PropTypes from 'prop-types';
import {Images} from '../../../common/Assets/Images';
import './Header.scss';
import PhoneMenu from './PhoneMenu';
import {Link} from 'react-router-dom';
import {StateContext} from '../../../store';

function ScrollTop(props) {
  const {children, window} = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined, disableHysteresis: true, threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor',);

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth', block: 'center',
      });
    }
  };

  return (<Zoom in={trigger}>
    <Box
      onClick={handleClick}
      role="presentation"
      sx={{position: 'fixed', bottom: 16, right: 16}}
    >
      {children}
    </Box>
  </Zoom>);
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired, /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Header(props) {
  const {user} = useContext(StateContext);
  return (<React.Fragment>
    <CssBaseline/>
    <AppBar sx={{boxShadow: 'none', bgcolor: 'transparent'}} position={'static'}>
      <Toolbar className="headerContent">
        <Box>
          <img draggable={'false'} width={56} height={62} style={{marginLeft: 50}} src={Images.newLogo} alt="site logo"/>
        </Box>
        <Box className="flex-center" sx={{display: {lg: 'flex', md: 'flex', sm: 'none', xs: 'none'}}}>
          <Box className="flex list-type">
            <Box>
              <Link to="/" className="text-decoration-none">
                <Typography className="header-mr" color="secondary">Travel Blogs</Typography>
              </Link>
            </Box>
            {user?.authenticated ? <Box>
              <Link to="/admin" className="text-decoration-none">
                <Typography className="header-mr" color="secondary">Dashboard</Typography>
              </Link>
            </Box> : <Box>
              <Link to="/login" className="text-decoration-none">
                <Typography className="header-mr" color="secondary">Login</Typography>
              </Link>
            </Box>}
          </Box>
        </Box>
        <Box sx={{display: {lg: 'none', md: 'none', sm: 'inline', xs: 'inline'}}}>
          <PhoneMenu/>
        </Box>
      </Toolbar>
    </AppBar>

  </React.Fragment>);
}
