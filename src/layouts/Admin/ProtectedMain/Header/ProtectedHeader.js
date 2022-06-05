import React from 'react';
import {AppBar, IconButton, Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './ProtectedHeader.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useNavigate} from 'react-router-dom';
import {Images} from '../../../../common/Assets/Images';

export default function ProtectedHeader({onSidebarOpen}) {
  const navigate = useNavigate();

  return (
    <AppBar className='appbar pt-2 mb-4' position="fixed">
      <Toolbar variant="dense" className='space-between'>
        <div className='flex'>
          <div className='hand-cursor'>
            <ArrowBackIosNewIcon onClick={() => navigate(-1)} className='mr-4' color='primary' />
            <ArrowForwardIosIcon onClick={() => navigate(1)} color='primary' />
          </div>
        </div>
        <div className='flex hide-profile'>
          <img className='header-profile'
               src={Images.bannerImage}
               alt="profile" />
        </div>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="open drawer"
          sx={{mr: 2}}
          onClick={onSidebarOpen}
          className="hide-menu"
        >
          <MenuIcon color={'primary'} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
