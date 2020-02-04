import React from 'react';
import { NavLink } from 'react-router-dom';
import Genres from "../containers/Genres";


export const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="container">
      <div className="navbar-brand">
        NYtimes
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">Genres</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/arts" className="nav-link">Arts</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/science" className="nav-link">Science</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
