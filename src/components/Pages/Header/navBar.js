import React from 'react'
import "../Header/navBar.css"
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const NavBar = () => {
    const [activeSection, setActiveSection] = useState('');

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
  };
    return(
        <div className="navbar">

  <div className="my-name">
    <p className="name">iamireneezechi</p>
  </div>
        <ul className="nav-wrapper">
        
        <li className="navContent">
        {/* <NavLink to="#trees"   className={activeSection === 'nutshell' ? 'active' : ''} >
            NUTSHELL
        </NavLink> */}
        <a href="#trees" className="nav" >
          NUTSHELL
        </a>
        </li>
        <li className="navContent">
        <NavLink to="/" className="nav" >
            WORK
        </NavLink>
        </li>
        <li className="navContent">
        <NavLink to="/contact" className="nav">
            CONTACT
        </NavLink>
        </li>
        
        </ul>
        
    </div>
    )
}

export default NavBar