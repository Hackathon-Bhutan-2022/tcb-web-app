import Dashboard from '../layouts/Admin/Dashboard/Dashboard';
import {ListTravelAgent} from '../layouts/Admin/UserManagement/TravelAgent/ListTravelAgent';
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
    primaryText: 'Travel Agent Detail',
    path: '/admin/users/agents/:id',
    authorized: [''],
    component: <TravelAgentDetail />,
  },
];
