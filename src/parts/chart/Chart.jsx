import React from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import classes from './Chart.module.css';

const data = [
  {
    name: 'Jan',
    'Active User': 2000
  },
  {
    name: 'Feb',
    'Active User': 3000
  },
  {
    name: 'Mar',
    'Active User': 2000
  },
  {
    name: 'Apr',
    'Active User': 2780
  },
  {
    name: 'May',
    'Active User': 1890
  },
  {
    name: 'Jun',
    'Active User': 2390
  },
  {
    name: 'Jul',
    'Active User': 3490
  },
  {
    name: 'Aug',
    'Active User': 3000
  },
  {
    name: 'Sep',
    'Active User': 1700
  },
  {
    name: 'Oct',
    'Active User': 1800
  },
  {
    name: 'Nov',
    'Active User': 1890
  },
  {
    name: 'Dec',
    'Active User': 2390
  }
];

const Chart = function () {
  return (
    <div className={classes.chart}>
      <h3 className={classes.chartTitle}>User Anylytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" interval="preserveStartEnd" />
          <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
