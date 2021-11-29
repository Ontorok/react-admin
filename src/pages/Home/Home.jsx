import React from 'react';
import Featured from '../../parts/featured/Featured';
import classes from './Home.module.css';

const Home = function () {
  return (
    <div className={classes.home}>
      <Featured />
    </div>
  );
};

export default Home;
