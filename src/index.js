import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import MainPage from './pages/MainPage';
import { Toaster } from 'react-hot-toast';

ReactDOM.render(
  <React.StrictMode>
    <MainPage />
    <Toaster />
  </React.StrictMode>,
  document.getElementById('root'),
);
