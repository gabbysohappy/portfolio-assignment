import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <Menu>
      <Menu.Item>
        <img src={require('../../images/logo1.png')} alt='gabby-logo' />
      </Menu.Item>
    <Link exact to='/'>
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link exact to='/Blog'>
      <Menu.Item>
        Blog
      </Menu.Item>
    </Link>
   </Menu>
)

export default Navbar;