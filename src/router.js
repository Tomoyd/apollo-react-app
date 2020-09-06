import {lazy} from 'react';

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
  {
    path: '/jsplumb',
    exact: true,
    component: lazy(() => import('./pages/ReactPlumb')),
  },
  {
    path: '/homepage',
    exact: true,
    component: lazy(() => import('./pages/homePage')),
  },
  {
    path: '/echarts',
    exact: true,
    component: lazy(() => import('./pages/echarts')),
  },
  {
    path: '/ReactEcharts',
    exact: true,
    component: lazy(() => import('./pages/echarts/EchartsReact')),
  },
  {
    path: '/flexGap',
    exact: true,
    component: lazy(() => import('./pages/cssPage/flexGap')),
  },
];

export default routers;
