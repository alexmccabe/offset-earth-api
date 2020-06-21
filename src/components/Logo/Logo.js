import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import logo from '../../assets/logo/offset-earth-logo.svg';
import styles from './logo.module.scss';

const Logo = props => {
  const { className, ...rest } = props;

  return (
    <div className={classnames(styles.container, className)} {...rest}>
      <img src={logo} alt="Offset Earth Logo" className={styles.logo} />
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
