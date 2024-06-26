import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/adapters/ui/App';
import './styles/reset.scss';
import './styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
