// ** MUI Imports
import Card, {CardProps} from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'

import ReactApexcharts from 'src/@core/components/react-apexcharts'
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import { ApexOptions } from 'apexcharts'

const ParentCardWrapper = styled(Card)<CardProps>(({ theme }) => ({
    width: '100%',
    overflowX: 'auto',
    overflowY: 'hidden',
    borderRadius: '0px',
    height: '20rem',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    
}))

const CardWrapper = styled(Card)<CardProps>(({ theme }) => ({
    backgroundColor: '#787EFF',
    position: 'absolute',
    width: '12rem',
    height: '12rem',
    borderRadius: '25px',
    display: 'inline-block',
    transformStyle: 'preserve-3d',
    padding: '20px 70px',
    transform: 'perspective(500px) rotateX(330deg) translateZ(25px) translateY(5px)',
    // -webkit-backface-visibility: hidden;
    transition: 'all .3s ease-out',
    top: '140px',
    bottom: '30%',
    margin: '0 auto',
    color: '#fff !important',
    justifyContent: 'center',
    alignItems: 'center'
    
}))


const StatCard = () => {
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
        columnWidth: '40px',
        endingShape: 'flat',
        startingShape: 'flat'
      }
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: [
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
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
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
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
        width: '2440px',
        marginBottom: '-40px',
        padding: '0px !important',
        '& .apexcharts-canvas .apexcharts-text': { 
          fill: theme.palette.text.secondary },
          pt: [`${theme.spacing(10)} !important`, `${theme.spacing(10)} !important`, `${theme.spacing(0)} !important`],
          minWidth: '600px'
      }}
    >
      <ReactApexcharts type='bar' height={185} options={options} series={[{ data: [
          50, 15, 15, 15, 15, 50, 15, 15, 15, 15, 50, 15, 15, 15, 15, 50, 15, 15, 15, 
          15, 50, 15, 15, 15, 15, 50, 15, 15, 15, 15, 50, 15, 15, 15, 15, 50, 15, 15, 15, 15,
          50, 15, 15, 15, 15, 50, 15, 15, 15, 15, 50, 15, 15, 15, 15, 50, 15, 15, 15, 15,
          50, 15, 15, 15, 15, 50, 15, 15, 15, 15, 50, 15, 15, 15, 15, 50, 15, 15, 15, 15,
          50, 15, 15, 15, 15, 50, 15, 15, 15, 15, 50, 15, 15, 15, 15, 50, 15, 15, 15, 15,  
        ] }]} />
      
    </CardContent>
    )
  }
  return (
    <ParentCardWrapper className='weight-overflow'>
      <CardWrapper>
        <CardContent sx={{  display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Typography variant='h2' sx={{ mb: 2,  color: '#ffffff' }}>
            52,3
          </Typography>
        </CardContent>
      </CardWrapper>

      <Chart />
    </ParentCardWrapper>
  )
}

export default StatCard
