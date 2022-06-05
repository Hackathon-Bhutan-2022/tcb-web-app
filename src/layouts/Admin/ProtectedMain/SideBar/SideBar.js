import React from 'react';
import {Drawer} from '@mui/material';
import clsx from 'clsx';
import {useStyle} from './SideBarStyle';
import SideNavBar from '../SideNavBar/SideNavBar';
import {pages} from './SideBarPages';
import {useNavigate} from 'react-router-dom';
import {Images} from '../../../../common/Assets/Images';

const drawerWidth = 240;

export const SideBar = props => {
  const {open, variant, onClose, className, children, ...rest} = props;
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
          backgroundColor: '#373856'
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
        <div className='justify mt-3 hand-cursor' onClick={() => navigate('/')}>
          <img className={classes.lagthaLogo} src={Images.logo} alt="tourism logo"/>
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
