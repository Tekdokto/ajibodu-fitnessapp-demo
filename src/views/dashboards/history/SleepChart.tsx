import { SyntheticEvent, useState } from 'react'
// ** MUI Imports
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import { ApexOptions } from 'apexcharts'


const SleepChart = () => {
  // ** State
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        distributed: true,
        columnWidth: '60px',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: [
      hexToRGBA(theme.palette.primary.main, 0.3),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.primary.main, 0.3),
      hexToRGBA(theme.palette.primary.main, 0.3),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.primary.main, 0.3),
      hexToRGBA(theme.palette.primary.main, 0.3)
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['t', 'w', 't', 'f', 's', 's', 'm']
    },
    yaxis: { show: false},
    grid: {
      show: false,
      padding: {
        top: 10,
        left: 7,
        right: -4
      }
    }
  }
  const Chart = () => {
    return (
    <CardContent
      sx={{
        width: '100%',
        marginBottom: '50px',
        '& .apexcharts-canvas .apexcharts-text': { 
          width: '100%',
          fill: theme.palette.text.secondary },
          pt: [`${theme.spacing(6)} !important`, `${theme.spacing(6)} !important`, `${theme.spacing(0)} !important`]
      }}
    >
      <ReactApexcharts type='bar' height={215} options={options} series={[{ data: [45, 85, 35, 55, 70, 35, 18] }]} />
      
    </CardContent>
    )
  }
  return (
    <Card >
      <CardContent sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant='h6'>Sleep</Typography>
      </CardContent>
      <CardContent >
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 150}} >
          <Typography variant='h2' sx={{ mr: 5 }}>
            6h,20m
          </Typography>
          <Chart />
        </Box>
      </CardContent>
    </Card>
  )
}

export default SleepChart
