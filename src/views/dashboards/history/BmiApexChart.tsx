// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'

// ** Icons Imports
import TableContainer from '@mui/material/TableContainer'
import Circle from 'mdi-material-ui/Circle'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { ThemeColor } from 'src/@core/layouts/types'
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

interface DataType {
  title: string
  amount: string
  color: ThemeColor
  trendAmount: number
}

const data: DataType[] = [
  {
    amount: '$845k',
    trendAmount: 82,
    color: 'success',
    title: 'Low',
  },
  {
    amount: '$84k',
    trendAmount: 23,
    color: 'warning',
    title: 'Normal',
  },
  {
    trendAmount: 52,
    amount: '$12.5k',
    color: 'primary',
    title: 'High',
    // icon: <ChevronDown sx={{ color: 'error.main' }} />
  }
]
const series = [
  {
    name: 'Low',
    data: [-240]
  },
  
  {
    name: 'Normal',
    data: [240]
  },
  {
    name: 'High',
    data: [240 ]
  }
]

const BmiApexChart = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        barHeight: '13px',
        horizontal: true,
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    xaxis: {
      labels: {show: false}
    },
    yaxis: {
      show: false,
      labels: {show: false}
    },
    colors: [
      hexToRGBA(theme.palette.success.main, 1), 
      hexToRGBA('6D788D1F', 0.1), 
      hexToRGBA(theme.palette.primary.main, 0.2)],
    grid: {
      xaxis: {
        lines: { show: false }
      },
      yaxis: {
        lines: { show: false }
      },
      padding: {
        top: 5,
        bottom: 5
      }
    },
    // legend: { 
    //   show: true,
    // },
    dataLabels: { enabled: false },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    
  }

  return (
    <Card> 
      <CardContent sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant='h6'>BMI</Typography>
        <Typography variant='body2'>17,3</Typography>
      </CardContent>
        <ReactApexcharts type='bar' height={208} series={series} options={options} />
      <CardContent sx={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
        <Typography variant='body2'>
          18,7
        </Typography>
        <Typography variant='body2'>
          25
        </Typography>
      </CardContent>
      <TableContainer sx={{ display: 'flex', marginLeft: '20px', mb: 3.75 }}>
        {data.map((item, index) => (
          <Box key={index} sx={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>
            <Circle sx={{ mr: 2.25, fontSize: '0.75rem', color: `${theme.palette[item.color].main}` }} />
            <Typography variant='body2' sx={{ fontWeight: 600, whiteSpace: 'nowrap', color: 'text.primary' }}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </TableContainer>
    </Card>
  )
}

export default BmiApexChart
