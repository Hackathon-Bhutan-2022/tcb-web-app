import Dashboard from '../layouts/Admin/Dashboard/Dashboard';

export const protectedRoutes = [
  {
    primaryText: 'Dashboard',
    path: '/admin',
    authorized: [''],
    component: <Dashboard />,
  },
];
