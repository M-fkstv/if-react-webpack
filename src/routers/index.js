import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { App } from '../Components/App/App';
import { ErrorBoundary } from '../Components/ErrorBoundaryRouter.js';
import { Loader } from '../Components/Loader';

// import { Layout } from '../Context/LayoutContext';

import { PATH } from '../Constants/paths';
import { LogIn } from '../Pages/LogIn';
import { Wrapper } from '../Components/Wrapper';

const Hotel = lazy(() => import('../Pages/Hotel'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Wrapper />}>
      <Route errorElement={<ErrorBoundary />}>
        <Route path={PATH.login} element={<LogIn />} />
        <Route index element={<App />} />
        <Route
          path={PATH.hotels}
          element={
            <Suspense fallback={<Loader />}>
              <Hotel />
            </Suspense>
          }
        />
      </Route>
    </Route>,
  ),
);
