import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { Navbar } from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css'; //from node_modules


ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);
