  import React from 'react';
  import { NavLink } from 'react-router-dom';
  import "../App.css";
  const Sidebar = () => {
    return (
      <div className="sidebar">
        <div className="sidebar__logo">
          <h3>Admin Panel</h3>
        </div>
        <ul className="sidebar__menu">
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/Products" className={({ isActive }) => (isActive ? 'active' : '')}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/Users" className={({ isActive }) => (isActive ? 'active' : '')}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/Cars" className={({ isActive }) => (isActive ? 'active' : '')}>
              Cars
            </NavLink>
          </li>
        </ul>
      </div>
    );
  };

  export default Sidebar;