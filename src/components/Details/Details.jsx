import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';
import { ArcElement } from 'chart.js';
import Chart from 'chart.js/auto';


import useStyles from './styles';

Chart.register(ArcElement)

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);
  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant='h5'>R{total}</Typography>
        {chartData ? <Doughnut data={chartData} /> : <div></div>}
      </CardContent>
    </Card>
  );
};

export default Details;
