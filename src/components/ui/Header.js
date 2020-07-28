import React from 'react';
import logo from '../../img/Lone-Wolf-Body-Art.png';

const Header = () => {
  return (
    <>
      <header className='center'>
        <div>
          <img src={logo} alt='logo' />
        </div>
      </header>
      <h1>Artists</h1>
      <p>Click image for more details</p>
    </>
  );
};

export default Header;
