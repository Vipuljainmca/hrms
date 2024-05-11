/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { SignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import { useSelector } from 'react-redux';
import Themeroutes from './routes/Router';
import ThemeSelector from './layouts/theme/ThemeSelector';
import Loader from './layouts/loader/Loader';

const App = () => {
  const routing = useRoutes(Themeroutes);
  const direction = useSelector((state) => state.customizer.isRTL);
  const isMode = useSelector((state) => state.customizer.isDark);
  return (
    <>
      <SignedOut>
        <div className="d-flex justify-content-center align-items-center vh-100">
          <SignIn />
        </div>
      </SignedOut>
      <SignedIn>
        <Suspense fallback={<Loader />}>
          <div
            className={`${direction ? 'rtl' : 'ltr'} ${isMode ? 'dark' : ''}`}
            dir={direction ? 'rtl' : 'ltr'}
          >
            <ThemeSelector />
          </div>
          {routing}
        </Suspense>
      </SignedIn>
    </>
  );
};

export default App;
