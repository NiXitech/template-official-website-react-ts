import { AppRoutes } from '@/interfaces';
import MobileHome from '@/pages/mobile/home';
import Home from '@/pages/pc/home';

export default [
  {
    path: '/',
    name: 'home',
    component: <Home />,
    mobileComponent: <MobileHome />,
  },
] as AppRoutes;
