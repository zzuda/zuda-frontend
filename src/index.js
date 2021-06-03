import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import MainPage from './pages/MainPage';
import RoomPage from './pages/RoomPage';
import SocketProvider from './Providers/SocketProvider';
import RoomInfoProvider from './Providers/RoomInfoProvider';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <SocketProvider>
      <RoomInfoProvider>
        <BrowserRouter>
          <Route exact path="/" component={MainPage} />
          <Route path="/room" component={RoomPage} />
        </BrowserRouter>
      </RoomInfoProvider>
    </SocketProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
