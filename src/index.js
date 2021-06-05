import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import MainPage from './pages/MainPage';
import RoomPage from './pages/RoomPage';
import { BrowserRouter, Route } from 'react-router-dom';
import { SocketProvider } from './hooks/useSocket';
import { RoomInfoProvider } from './hooks/useRoom';

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
