import React from 'react';
import {Box, Button, CssBaseline, Divider, Typography, useScrollTrigger, Zoom} from '@mui/material';
import * as PropTypes from 'prop-types';
import {Images} from '../../../common/Assets/Images';
import './Header.scss';
import ButtonContained from '../../../common/CustomButtons/ButtonContained';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import LogoutIcon from '@mui/icons-material/Logout';
import Stack from '@mui/material/Stack';

function ScrollTop(props) {
  const {children, window} = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined, disableHysteresis: true, threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

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
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
const scrollToTop = (element) => {
  var elementPosition = document.getElementById(element).offsetTop;
  window.scrollTo({
    top: elementPosition, behavior: 'smooth',
  });
};

export default function PhoneMenu(props) {
  const [state, setState] = React.useState({
    top: false, left: false, bottom: false, right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({...state, [anchor]: open});
  };

  const list = (anchor) => (
    <Box
      sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200, height: '100vh'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{display: 'block'}}>
        <Box sx={{mt: 2, mb: 2}}>
          <div className="hand-cursor">
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <img width={100} height={100}
                   src={Images.defaultProfile}
                   alt="profile" />
            </div>
            <Typography
              fontSize={14}
              className="text-capitalize"
              align={'center'}
            >
              Pema
            </Typography>
          </div>
        </Box>
        <Divider sx={{mb: 2}} />
        <Box sx={{ml: 2, mr: 2}}>
          <Box>
            <Link to="/" className="text-decoration-none">
              <Typography sx={{mb: 2, color: '#2d2d2d'}} fontWeight={500}>Home</Typography>
            </Link>
          </Box>
          <Box>
            <Typography className="text-decoration-none" onClick={() => scrollToTop('about')}>
              <Typography sx={{mb: 2, color: '#2d2d2d'}} fontWeight={500} className="hand-cursor">About
                us</Typography>
            </Typography>
          </Box>
          <Box>
            <Typography className="text-decoration-none" onClick={() => scrollToTop('service')}>
              <Typography sx={{mb: 2, color: '#2d2d2d'}} fontWeight={500} className="hand-cursor">FAQ</Typography>
            </Typography>
          </Box>
          <Box>
            <Link to="/customer" className="text-decoration-none">
              <Typography sx={{mb: 2, color: '#2d2d2d'}}>Dashboard</Typography>
            </Link>
          </Box>
        </Box>
        <Box>
          <Stack sx={{ml: 1, mr: 1}}>
            <Link to="/sign-up" className="text-decoration-none">
              <ButtonContained text="Sign Up" />
            </Link>
          </Stack>
        </Box>
        <Box sx={{m: 2}}>
          <Button fullWidth variant={'contained'}
                  startIcon={<LogoutIcon sx={{color: '#000'}} />}>
            <Typography sx={{color: '#fff'}} fontSize={14}>Logout</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <MenuIcon className="hand-cursor" sx={{color: '#fff', fontSize: 37}}
                      onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              sx={{minHeight: 0}}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
}
