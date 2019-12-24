import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <Menu>
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