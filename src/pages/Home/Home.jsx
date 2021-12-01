import React from 'react';
import Chart from '../../parts/chart/Chart';
import Featured from '../../parts/featured/Featured';
import classes from './Home.module.css';

const Home = function () {
  return (
    <div className={classes.home}>
      <Featured />
      <Chart />
    </div>
  );
};

export default Home;
