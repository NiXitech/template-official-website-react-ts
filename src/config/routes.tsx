import { AppRoutes } from '@/interfaces';
import { lazy } from 'react';

export const Home = lazy(() => import('@/pages/pc/home'));
export const MobileHome = lazy(() => import('@/pages/mobile/home'));

export default [
  {
    path: '/',
    name: 'home',
    component: <Home />,
    mobileComponent: <MobileHome />,
  },
] as AppRoutes;
