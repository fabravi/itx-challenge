import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from '@/components/header/Header';

const App: React.FC = () => {
  return <Header />;
};

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
