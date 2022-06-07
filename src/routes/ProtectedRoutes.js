import Dashboard from '../layouts/Admin/Dashboard/Dashboard';
import {ListTravelAgent} from '../layouts/Admin/UserManagement/TravelAgent/ListTravelAgent';
import {ListTourGuides} from '../layouts/Admin/UserManagement/TourGuides/ListTourGuides';
import {ListAnnouncement} from '../layouts/Admin/Activities/Announcement/ListAnnouncement';
import TravelAgentDetail from '../layouts/Admin/UserManagement/TravelAgent/TravelAgentDetail';

export const protectedRoutes = [
  {
    primaryText: 'Dashboard',
    path: '/admin',
    authorized: [''],
    component: <Dashboard />,
  },
  {
    primaryText: 'Travel agent list',
    path: '/admin/users/agents',
    authorized: [''],
    component: <ListTravelAgent />,
  },
  {
    primaryText: 'Tour Guide list',
    path: '/admin/users/tour-guides',
    authorized: [''],
    component: <ListTourGuides />,
  },
  {
    primaryText: 'Announcement list',
    path: '/admin/activities/announcements',
    authorized: [''],
    component: <ListAnnouncement />,
  },
  {
    primaryText: 'Travel Agent Detail',
    path: '/admin/users/agents/:id',
    authorized: [''],
    component: <TravelAgentDetail />,
  },
];
