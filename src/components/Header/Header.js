import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Logo from '../Logo/Logo';
import styles from './header.module.scss';

const Header = props => {
  const { className, ...rest } = props;

  return (
    <header className={classnames(styles.container, className)} {...rest}>
      <Logo className={styles.logo} />
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
