import { ReactElement } from 'react';

export interface AppRoute {
  path: string;
  name: string;
  component?: ReactElement;
  mobileComponent?: ReactElement;
}

export type AppRoutes = Array<AppRoute>;
