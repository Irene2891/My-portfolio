import React from 'react'
import "./navbar.css"
import {NavLink,Link} from 'react-router-dom';

const navLinks =[
    {id:1, label: 'NUTSHELL', link: '/nutshell'},
    {id:2, label: 'WORK', link: '/work' } ,
    {id:3, label: 'CONTACT', link: '/contact' }  
   ];

const NavBar = () => {
    return(
        <nav className="navbar">
            <Link exact to="/nutshell" className="navbar-logo">iamireneezechi</Link>

  <ul className='navLink-wrapper'>
      {navLinks.map(navlink => (
     <li key={navlink.id} className='navbar-list'>
      <NavLink 
        to={navlink.link} 
        className='navbarLinks' 
        title={`Navigate to ${navlink.label}`} 
        activeClassName="active"
        >
        {navlink.label}  
      </NavLink>
     </li>
        ))}
    </ul>
        
    </nav>
    )
}

export default NavBar