import * as React from 'react';
import Grid from '@mui/material/Grid'

import { useSettings } from 'src/@core/hooks/useSettings'
import RechartsLineChart from './RechartsLineChart';


const Weight = () => {
  const { settings } = useSettings();
  
  return (
    <>
      <Grid item xs={12}>
        <br />
        <RechartsLineChart direction={settings.direction} />
      </Grid>
    </>
  );
}

export default Weight
