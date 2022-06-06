import React, {useState} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {SideBar} from './SideBar/SideBar';
import ProtectedHeader from './Header/ProtectedHeader';
import {Outlet} from 'react-router-dom';

const useStyles = makeStyles(({
  root: {
    padding: '56px 0 30px 0',
    minHeight: '100vh',
  },
  shiftContent: {
    paddingLeft: 240,
  },
  content: {
    margin: 15,
  },
}));

export const ProtectedMain = props => {
  const {children} = props;
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:1024px)', {
    defaultMatches: true,
  });
  const [openSidebar, setOpenSidebar] = useState(false);
  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop,
      })}
    >
      <ProtectedHeader onSidebarOpen={handleSidebarOpen} />
      <SideBar
        children={children}
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
};
