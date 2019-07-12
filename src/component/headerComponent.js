import React from 'react'
import logo from '../img/sand.jpg';
import marylin from '../img/marylin.jpg';
import Navbar from './navbarComponent';

export default function headerComponent() {
  return (
    <div className="header-container">
        <div className="crop">        
            <img className="logo-img" src={logo} alt="sand" />
        </div>
        <img className="maryliny-img" src={marylin} alt="maryling" />
        <Navbar />
    </div>
  )
}
