import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App.tsx';
import './index.css';
import ErrorBoundary from './components/error/errorBoundary.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
