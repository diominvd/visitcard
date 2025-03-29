import React from 'react';
import ReactDOM from 'react-dom/client';
// Components;
import { App } from '@app/app';
// Styles;
import '@styles/main.scss';
import '@styles/colors.scss';
import '@styles/fonts.scss';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
