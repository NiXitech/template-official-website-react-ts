import { lazy } from 'react';
import isMobileFn from 'is-mobile';

export const Home = lazy(() => import('@/pages/pc/home'));
export const MobileHome = lazy(() => import('@/pages/mobile/home'));

const isMobile = isMobileFn({
  tablet: true, // 将平板电脑视为移动端
});

export default [
  {
    path: '/',
    element: isMobile ? <MobileHome /> : <Home />,
  },
];
