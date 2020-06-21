import React from 'react';

import logo from '../../assets/logo/offset-earth-logo.svg';

const Logo = () => {
  return (
    <div className="logoContainer">
      <img src={logo} alt="Offset Earth Logo" className="logo" />
    </div>
  );
};

Logo.propTypes = {};

export default Logo;
