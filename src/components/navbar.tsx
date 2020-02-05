import React from 'react';
import { NavLink } from 'react-router-dom';


export const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="container">
      <div className="navbar-brand">
        Books and News
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/genre" className="nav-link">Genres</NavLink>
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
