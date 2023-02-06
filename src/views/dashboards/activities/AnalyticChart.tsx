// ** MUI Imports
import Box from '@mui/material/Box'
import Card, { CardProps } from '@mui/material/Card'
import { styled, useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'
import ChevronRight from 'mdi-material-ui/ChevronRight'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'


// Styled component for Blank Layout component
const CardWrapper = styled(Card)<CardProps>(({ theme }) => ({
    backgroundColor: '#666CFF !important',
    color: 'rgba(234, 234, 255, 0.87)',
  }))

const AnalyticsChart = () => {
  // ** Hook
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
        columnWidth: '43%',
        endingShape: 'flat',
        startingShape: 'rounded'
      }
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: [
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 0.1),
      hexToRGBA(theme.palette.success.main, 0.1),
      hexToRGBA(theme.palette.success.main, 1),
      hexToRGBA(theme.palette.success.main, 0.1),
      hexToRGBA(theme.palette.success.main, 0.1)
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
    yaxis: { 
      show: true,
     
    },
    grid: {
      show: false,
      padding: {
        top: 10,
        left: 7,
        right: -4
      }
    }
  }

  return (
    <>
    <CardHeader
        title='Goal for week'
        subheaderTypographyProps={{ sx: { lineHeight: 1.429 } }}
        titleTypographyProps={{ 
          sx: { 
            letterSpacing: '0.15px',
            '& .MuiCardHeader-root': {
              padding: '16px 0px !important',
          }
          } }}
        action={
            <Typography variant='body2'>42 of 45</Typography>
        }
      />
    <CardWrapper>
      <CardContent
        sx={{
          '& .apexcharts-canvas .apexcharts-text': { fill: '#fff' },
          pt: [`${theme.spacing(3)} !important`, `${theme.spacing(3)} !important`, `${theme.spacing(0)} !important`]
        }}
      >
        <ReactApexcharts type='bar' height={315} options={options} series={[{ data: [38, 55, 48, 65, 80, 38, 48] }]} />
      </CardContent>
    </CardWrapper>
    </>
  )
}

export default AnalyticsChart
