import React, { useEffect, useState } from 'react';

import { ApiService } from '../../services';
import { Chart, Loader } from '../../components';

const StatsScreen = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    ApiService.fetchAllPlanted().then(data => {
      setLoading(false);
      setData(data);
    });
  }, []);

  console.log(data);

  return (
    <div>
      <Loader isVisible={isLoading} />
      <Chart />
    </div>
  );
};

StatsScreen.propTypes = {};

export default StatsScreen;
