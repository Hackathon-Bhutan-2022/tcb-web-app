import Dashboard from '../layouts/Admin/Dashboard/Dashboard';
import {ListTravelAgent} from '../layouts/Admin/UserManagement/TravelAgent/ListTravelAgent';

export const protectedRoutes = [
  {
    primaryText: 'Dashboard',
    path: '/admin',
    authorized: [''],
    component: <Dashboard />,
  },
  {
    primaryText: 'Travel agent list',
    path: '/admin/users/travel-agent',
    authorized: [''],
    component: <ListTravelAgent />,
  },
];
