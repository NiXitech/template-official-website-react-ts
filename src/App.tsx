import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.less';
import isMobileFn from 'is-mobile';
import routes from './config/routes';
import { Suspense, useMemo } from 'react';
import { VconsoleSingleton } from './utils';
import { EnvEnum } from './enums';

function App() {
  const isMobile = useMemo(() => {
    return isMobileFn({
      tablet: true, // 将平板电脑视为移动端
    });
  }, []);

  if (import.meta.env.NODE_ENV === EnvEnum.QA && isMobile) {
    VconsoleSingleton.getInstance();
  }

  return (
    <>
      <BrowserRouter>
        <Suspense fallback>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                element={isMobile ? route.mobileComponent : route.component}
              ></Route>
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
