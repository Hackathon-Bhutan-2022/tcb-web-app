import React from 'react';
import AppSelectIcon from '@rsuite/icons/AppSelect';
import User from '@rsuite/icons/legacy/User';
import Calendar from '@rsuite/icons/Calendar';
import {Search} from '@rsuite/icons';

export const pages = [
  {
    title: 'Dashboard',
    href: '/admin',
    visible: true,
    index: 1,
    authorized: 'false',
    icon: <AppSelectIcon/>,
  },
  {
    title: 'Search',
    href: '/admin/search',
    visible: true,
    index: 2,
    authorized: 'false',
    icon: <Search/>,
  },
  {
    title: 'Users',
    href: '',
    visible: true,
    index: 3,
    authorized: 'false',
    icon: <User/>,
    children: [
      {
        title: 'Travel Agents',
        href: '/admin/users/agents',
        visible: true,
        index: 1,
        authorized: 'false',
      },
      {
        title: 'Tour Guides',
        href: '/admin/users/tour-guides',
        visible: true,
        index: 2,
        authorized: 'false',
      },
    ]
  },
  {
    title: 'Activities',
    href: '',
    visible: true,
    index: 4,
    authorized: 'false',
    icon: <Calendar/>,
    children: [
      {
        title: 'Itinerary',
        href: '/admin/activities/itinerary',
        visible: true,
        index: 1,
        authorized: 'false',
      },
      {
        title: 'Announcements',
        href: '/admin/activities/announcements',
        visible: true,
        index: 2,
        authorized: 'false',
      },
      {
        title: 'Calender',
        href: '/admin/users/calender',
        visible: true,
        index: 3,
        authorized: 'false',
      },
      {
        title: 'Track Vehicles',
        href: '/admin/users/vehicle',
        visible: true,
        index: 4,
        authorized: 'false',
      },
    ]
  },
];
