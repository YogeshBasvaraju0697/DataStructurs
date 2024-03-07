import React from 'react';
import { LOGO_URL } from '../../utils/constant';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
