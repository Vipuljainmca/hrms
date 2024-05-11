/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { ClerkProvider } from '@clerk/clerk-react';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ToastProvider from './providers/ToasterProvider';
import { store } from './store/Store';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const publishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const container = document.getElementById('root');
const root = createRoot(container);
const queryClient = new QueryClient();
root.render(
  <ClerkProvider publishableKey={publishableKey}>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <ToastProvider />
          <App />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </ClerkProvider>,
);
