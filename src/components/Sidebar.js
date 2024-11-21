import React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';
import links from '../constants/links';

const Sidebar = () => {
  return (
    <div>
      <div className='logo'>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <div className='links'>
        {links.map((item, index) => {
          return (
            <span key={index}>
              <Link className='link' to={item.path}>
                {item.text}
              </Link>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
