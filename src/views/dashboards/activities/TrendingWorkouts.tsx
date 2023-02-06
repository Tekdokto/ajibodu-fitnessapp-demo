import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Bike from 'mdi-material-ui/Bike'
import PlayCircleOutlineIcon from 'mdi-material-ui/PlayCircleOutline';
// import ArrowBackIosIcon from 'mdi-material-ui/ArrowBackIos';

export default function TrendingWorkout() {
  const theme = useTheme();

  return (
    <>
      <CardHeader
        title='Trending Workouts'
        subheaderTypographyProps={{ sx: { lineHeight: 1.429 } }}
        titleTypographyProps={{ sx: { letterSpacing: '0.15px' } }}
        action={
            <Typography variant='body2'>See all</Typography>
        }
      />
    <Card sx={{ display: 'flex', alignItems:'center', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems:'center' }}>
        <Box>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Bike sx={{ color: `${theme.palette.primary.main}`, height: 20, width: 20 }} />
          </CardContent>
        </Box>
          <Typography component="div" variant="h6">
            Muscle Builder
          </Typography>
      </Box>
      <Box>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <PlayCircleOutlineIcon sx={{ 
            color: `${theme.palette.primary.main}`, 
            height: 38, width: 38 }} />
        </CardContent>
      </Box>
    </Card>
    </>
  );
}