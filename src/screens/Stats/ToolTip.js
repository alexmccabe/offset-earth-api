import React from 'react';
import PropTypes from 'prop-types';
import { format as dateFormat, parseISO } from 'date-fns';

import styles from './statsScreen.module.scss';

const ToolTip = props => {
  const { point } = props;
  const parsed = parseISO(point.data.x);
  const date = dateFormat(parsed, 'do MMM yyyy');

  return (
    <div className={styles.tooltip}>
      <div>Date: {date}</div>
      <div>Planted: {point.data.y}</div>
    </div>
  );
};

ToolTip.propTypes = {};

export default ToolTip;
