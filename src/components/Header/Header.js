import React from 'react';

import Logo from '../Logo/Logo';

const Header = props => {
  return (
    <header className="header" {...props}>
      <Logo />
    </header>
  );
};

Header.propTypes = {};

export default Header;
