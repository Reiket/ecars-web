import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app/App';
import '@ecars/design/styles.scss'

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
