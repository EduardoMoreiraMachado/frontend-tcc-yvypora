import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-style.css';
import Test from './templates/Test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
);
