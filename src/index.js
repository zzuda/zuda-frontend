import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import MainPage from './pages/MainPage';
import RoomPage from './pages/RoomPage';
import AdminPage from './pages/AdminPage';
import { BrowserRouter, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { SocketProvider } from './hooks/useSocket';
import { InfoProvider } from './hooks/useInfo';

ReactDOM.render(
  <React.StrictMode>
    <SocketProvider>
      <InfoProvider>
        <BrowserRouter>
          <Route exact path="/" component={MainPage} />
          <Route path="/room" component={RoomPage} />
          <Route path="/admin" component={AdminPage} />
        </BrowserRouter>
      </InfoProvider>
    </SocketProvider>
    <Toaster />
  </React.StrictMode>,
  document.getElementById('root'),
);
