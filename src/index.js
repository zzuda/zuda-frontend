import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import MainPage from './pages/MainPage';
import RoomPage from './pages/RoomPage';
import SocketProvider from './Providers/SocketProvider';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <SocketProvider>
      <BrowserRouter>
        <Route exact path="/" component={MainPage} />
        <Route path="/room" component={RoomPage} />
      </BrowserRouter>
    </SocketProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
