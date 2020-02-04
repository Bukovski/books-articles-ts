import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //from node_modules
import './index.sass';
import Routes from './routes';
import { Navbar } from "./components/Navbar";


ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);
