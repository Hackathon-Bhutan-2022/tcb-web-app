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
    authorized: ['Portal Admin', 'Tour Agency', 'Flight Ticket Operator', 'Hotel', 'Tour guide', 'Automobile Agencies'],
    icon: <AppSelectIcon/>,
  },
  {
    title: 'Search',
    href: '/admin/search',
    visible: true,
    index: 2,
    authorized: ['Portal Admin', 'Tour Agency', 'Flight Ticket Operator', 'Hotel', 'Tour guide', 'Automobile Agencies'],
    icon: <Search/>,
  },
  {
    title: 'Users',
    href: '',
    visible: true,
    index: 3,
    authorized: ['Portal Admin'],
    icon: <User/>,
    children: [
      {
        title: 'Travel Agents',
        href: '/admin/users/agents',
        visible: true,
        index: 1,
        authorized: ['Portal Admin'],
      },
      {
        title: 'Tour Guides',
        href: '/admin/users/tour-guides',
        visible: true,
        index: 2,
        authorized: ['Portal Admin'],
      },
    ]
  },
  {
    title: 'Activities',
    href: '',
    visible: true,
    index: 4,
    authorized: ['Portal Admin', 'Tour Agency', 'Flight Ticket Operator', 'Hotel', 'Tour guide', 'Automobile Agencies'],
    icon: <Calendar/>,
    children: [
      {
        title: 'Itinerary',
        href: '/admin/activities/itinerary',
        visible: true,
        index: 1,
        authorized: ['Portal Admin', 'Tour Agency', 'Flight Ticket Operator', 'Hotel', 'Tour guide', 'Automobile Agencies'],
      },
      {
        title: 'My Itinerary',
        href: '/admin/activities/my/itinerary',
        visible: true,
        index: 2,
        authorized: 'false',
      },
      {
        title: 'Announcements',
        href: '/admin/activities/announcements',
        visible: true,
        index: 3,
        authorized: ['Portal Admin'],
      },
      {
        title: 'Calender',
        href: '/admin/users/calender',
        visible: true,
        index: 4,
        authorized: ['Portal Admin', 'Tour Agency', 'Flight Ticket Operator', 'Hotel', 'Tour guide', 'Automobile Agencies'],
      },
      {
        title: 'Track Vehicles',
        href: '/admin/users/vehicle',
        visible: true,
        index: 5,
        authorized: ['Portal Admin', 'Tour Agency', 'Flight Ticket Operator', 'Hotel', 'Tour guide', 'Automobile Agencies'],
      },
    ]
  },
];
