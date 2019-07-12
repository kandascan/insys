import React from 'react'
import { NavLink } from 'react-router-dom';

export default function navbarComponent() {
  return (
    <div className="navbar">
      <ul>
        <li><NavLink to={'/profile'}><i className="fas fa-user-alt"></i></NavLink></li>
        <li><NavLink to={'/gallery'}><i className="far fa-image"></i></NavLink></li>
      </ul>
    </div>
  )
}
