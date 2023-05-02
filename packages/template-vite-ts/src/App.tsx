import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import isMobileFn from 'is-mobile';
import routes from './config/routes';
import { useMemo } from 'react';
import { VconsoleSingleton } from './utils';

function App() {
  const isMobile = useMemo(() => {
    return isMobileFn({
      tablet: true, // 将平板电脑视为移动端
    });
  }, []);

  if (import.meta.env.DEV) {
    VconsoleSingleton.getInstance();
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              element={isMobile ? route.mobileComponent : route.component}
            ></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
