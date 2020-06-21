import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import turbine from '../../assets/turbine.svg';
import styles from './loader.module.scss';

const Loader = props => {
  const { className, isVisible, ...rest } = props;

  return isVisible ? (
    <div className={classnames(styles.container, className)} {...rest}>
      <img src={turbine} alt="" className={styles.loader} />
    </div>
  ) : null;
};

Loader.propTypes = {
  className: PropTypes.string,
};

export default Loader;
