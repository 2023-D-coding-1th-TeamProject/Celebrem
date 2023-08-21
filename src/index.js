import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 개발 환경에서만 활성화
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
