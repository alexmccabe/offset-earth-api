import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './errorMessage.module.scss';

const ErrorMessage = props => {
  const { children, className, ...rest } = props;

  return (
    <div className={classnames(styles.container, className)} {...rest}>
      {children}
    </div>
  );
};

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ErrorMessage;
