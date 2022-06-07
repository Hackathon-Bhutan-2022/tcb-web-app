import React from 'react';
import AppSelectIcon from '@rsuite/icons/AppSelect';
import User from '@rsuite/icons/legacy/User';

export const pages = [
  {
    title: 'Dashboard',
    href: '/admin',
    visible: true,
    index: 1,
    authorized: 'false',
    icon: <AppSelectIcon />,
  },
  {
    title: 'User Management',
    href: '',
    visible: true,
    index: 1,
    authorized: 'false',
    icon: <User />,
    children: [
      {
        title: 'Travel Agent',
        href: '/admin/users/travel-agent',
        visible: true,
        index: 1,
        authorized: 'false',
      },
    ]
  },
];
