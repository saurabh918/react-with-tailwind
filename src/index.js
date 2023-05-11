import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { OpticsProvider } from './context/Usecontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OpticsProvider>
      <App />
    </OpticsProvider>
  </React.StrictMode>
);

