import React from 'react';
import Featured from '../../parts/featured/Featured';
import UserChart from '../../parts/userChart/UserChart';
import classes from './Home.module.css';

const Home = function () {
  return (
    <div className={classes.home}>
      <Featured />
      <UserChart />
    </div>
  );
};

export default Home;
