import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { KioskApp } from './KioskApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <KioskApp />
  </React.StrictMode>
);
