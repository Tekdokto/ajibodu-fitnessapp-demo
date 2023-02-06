import * as React from 'react';
import Grid from '@mui/material/Grid'

import BmiApexChart from './BmiApexChart';


const BmiControl = () => {
  
  return (
    <>
      <Grid item xs={12}>
        <BmiApexChart />
      </Grid>
    </>
  );
}

export default BmiControl
