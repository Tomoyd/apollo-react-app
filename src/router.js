import { lazy } from 'react';

const routers = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('./pages/home')),
  },
];

export default routers;
