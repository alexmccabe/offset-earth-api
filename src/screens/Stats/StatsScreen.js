import React, { useEffect, useState } from 'react';

import { ApiService } from '../../services';
import { Chart, ErrorMessage, Header, Loader } from '../../components';
import styles from './statsScreen.module.scss';

const StatsScreen = () => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [data, setData] = useState([]);

  const showError = !isLoading && !isSuccess;

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

        {!showError && <Chart />}
      </main>
    </div>
  );
};

StatsScreen.propTypes = {};

export default StatsScreen;
