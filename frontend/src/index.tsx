import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RelayEnvironmentProvider } from 'react-relay';
import { relayEnvironment } from './relay/Environment';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RelayEnvironmentProvider environment={relayEnvironment}>
    <App />
  </RelayEnvironmentProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
