import { useRoutes } from 'react-router-dom';
import './App.less';
import isMobileFn from 'is-mobile';
import routes from './config/routes';
import { Suspense, useEffect, useMemo } from 'react';
import { VconsoleSingleton } from './utils';
import { EnvEnum } from './enums';

function App() {
  const elementRoute = useRoutes(routes);

  const isMobile = useMemo(() => {
    return isMobileFn({
      tablet: true, // 将平板电脑视为移动端
    });
  }, []);

  useEffect(() => {
    if (import.meta.env.NODE_ENV === EnvEnum.QA && isMobile) {
      VconsoleSingleton.getInstance();
    }
  }, [isMobile]);

  return <Suspense fallback>{elementRoute}</Suspense>;
}

export default App;
