import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

export function NavMenu() {
  return (
    <nav className="mvl-navbar">
      <div className="mvl-navbar--left">
        <NavLink className="mvl-navbar-item mlv-navbar__image" href="#">
          <img src="/images/marvel_logo.png" className="mvl-navbar__img" alt="compny logo" />
        </NavLink>

        <div className="mvl-navbar__actions">
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/">
            Characters
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/comics">
            Comics
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/creator">
            Creators
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/events">
            Events
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/">
            Series
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/">
            Stories
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/featured-characters">
            featured characters
          </NavLink>
        </div>
      </div>

      <div className="mvl-navbar--right"></div>
    </nav>
  );
}
