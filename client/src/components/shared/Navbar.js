import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/navbar.css'

const Navbar = () => (
  <div class='navbar'>
  <img src={require('../../images/logo1.png')} alt='gabby-logo' class='logo'/>
  <ul>
    <li><NavLink exact to='/' activeStyle={{ color: '#FF00ED' }}>
        Home
 </NavLink></li>
    <li><NavLink exact to='/Blog' activeStyle={{ color: '#FF00ED' }}>
        Blog
    </NavLink></li>
  </ul>
  </div>
)

export default Navbar;