import { lazy } from 'react';

const routers = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('./pages/home')),
  },
  {
    path: '/test',
    exact: true,
    component: lazy(() => import('./pages/test')),
  },
];

export default routers;
