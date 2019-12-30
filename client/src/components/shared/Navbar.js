import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css'

const Navbar = () => (
  <div class='navbar'>
  <img src={require('../../images/logo1.png')} alt='gabby-logo' class='logo'/>
  <ul>
    <li><Link exact to='/'>
        Home
    </Link></li>
    <li><Link exact to='/Blog'>
        Blog
    </Link></li>
  </ul>
  </div>
)

export default Navbar;