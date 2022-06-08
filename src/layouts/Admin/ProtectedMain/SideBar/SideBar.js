import React, {useContext} from 'react';
import {Drawer, Typography} from '@mui/material';
import clsx from 'clsx';
import {useStyle} from './SideBarStyle';
import SideNavBar from '../SideNavBar/SideNavBar';
import {pages} from './SideBarPages';
import {useNavigate} from 'react-router-dom';
import {Images} from '../../../../common/Assets/Images';
import {StateContext} from '../../../../store';

const drawerWidth = 245;

export const SideBar = props => {
  const {open, variant, onClose, className, children, ...rest} = props;
  const {user} = useContext(StateContext);
  const classes = useStyle();
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = React.useState(1);
  const [openKeys, setOpenKeys] = React.useState([]);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#EEEFEF'
        },
      }}
      variant={variant}
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <div className={classes.profile} onClick={() => navigate('/')}>
          <img className={classes.lagthaLogo} src={user?.user?.profile?.picture_url || Images.defaultProfile}
               alt="tourism logo"/>
          <div>
            <Typography className={classes.profileName}>
              {user?.user?.profile?.name || '---'}
            </Typography>
            <Typography className={classes.role}>
              {user?.user?.role?.name || '---'}
            </Typography>
          </div>
        </div>
        <SideNavBar
          activeKey={activeKey}
          openKeys={openKeys}
          onSelect={setActiveKey}
          onOpenChange={setOpenKeys}
          children={children}
          className={classes.nav}
          pages={pages}
          onClose={onClose}
        />
      </div>
    </Drawer>
  );
};
