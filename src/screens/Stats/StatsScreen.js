import React, { useEffect, useMemo, useState } from 'react';

import { ApiService } from '../../services';
import { Chart, ErrorMessage, Header, Loader } from '../../components';

import ToolTip from './ToolTip';
import styles from './statsScreen.module.scss';

const StatsScreen = () => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [data, setData] = useState([]);

  const showError = !isLoading && !isSuccess;

  const chartData = useMemo(() => {
    const dates = data.slice(50).reduce((objectAcc, item) => {
      const { value, createdAt } = item;
      const date = createdAt.split('T')[0];

      if (!objectAcc[date]) {
        objectAcc[date] = { x: date, y: value };
      }

      objectAcc[date].y = objectAcc[date].y + value;

      return objectAcc;
    }, {});

    return [
      {
        id: 'treesByDay',
        color: '#ff8e9c',
        data: Object.keys(dates).map(item => dates[item]),
      },
    ];
  }, [data]);

  useEffect(() => {
    setLoading(true);
    ApiService.fetchAllPlanted()
      .then(data => {
        setLoading(false);
        setSuccess(true);
        setData(data);
      })
      .catch(error => {
        setLoading(false);
        setSuccess(false);
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.statsScreen}>
      <Header />

      <main className={styles.content}>
        <Loader className={styles.loader} isVisible={isLoading} />

        {showError && (
          <ErrorMessage>
            Oops! Looks like we were unable to fetch the data.
          </ErrorMessage>
        )}

        {!showError && !isLoading && (
          <Chart data={chartData} tooltip={ToolTip} />
        )}
      </main>
    </div>
  );
};

StatsScreen.propTypes = {};

export default StatsScreen;
