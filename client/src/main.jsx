import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import MainRoutes from './routes.jsx';
import { Provider } from 'react-redux';
import ReduxStore from './ReduxStore.jsx';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import WebApp from '@twa-dev/sdk';

// Ensure WebApp is ready before using it
WebApp.ready();

// Check if setHeaderColor is supported before calling it
if (typeof WebApp.setHeaderColor === 'function') {
  WebApp.setHeaderColor("#000000");
} else {
  console.warn("setHeaderColor is not supported in this Telegram version.");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ReduxStore}>
      <TonConnectUIProvider manifestUrl="https://hyperbull-api.syntax-siam.xyz/manifest">
        <RouterProvider router={MainRoutes} />
      </TonConnectUIProvider>
    </Provider>
  </React.StrictMode>
);

