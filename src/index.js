import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import MainPage from './pages/MainPage';
import SocketProvider from './Providers/SocketProvider';

ReactDOM.render(
  <React.StrictMode>
    <MainPage />
    <SocketProvider>
    </SocketProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
