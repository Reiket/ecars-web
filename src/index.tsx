import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app/App';
import '@ecars/design/styles.scss';
import {store} from './app/store';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
);
