// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import LinearProgress from '@mui/material/LinearProgress'
// ** Icons Imports
import TabletAndroid from 'mdi-material-ui/TabletAndroid'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const EcommerceSalesThisMonth = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      dropShadow: {
        top: 14,
        blur: 4,
        left: 0,
        enabled: true,
        opacity: 0.12,
        color: theme.palette.primary.main
      }
    },
    tooltip: { enabled: false },
    grid: {
      xaxis: {
        lines: { show: false }
      },
      yaxis: {
        lines: { show: false }
      },
      padding: {
        top: -12,
        left: -2,
        right: 8,
        bottom: -10
      }
    },
    stroke: {
      width: 5,
      lineCap: 'round'
    },
    markers: { size: 0 },
    colors: [hexToRGBA(theme.palette.primary.main, 1)],
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      min: 0,
      labels: { show: false }
    }
  }

  return (
    <Card sx={{ maxWidth: 200, width: '100%', mb: 2.5, display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center' }}
    >
      <CustomAvatar
        skin='light'
        color='warning'
        variant='rounded'
        sx={{ ml: 3.5, height: 40, width: 40, borderRadius: '6px' }}
      >
        <TabletAndroid sx={{ fontSize: '100%' }} />
      </CustomAvatar>

      <CardContent sx={{ pb: '0 !important' }}>
        <Typography variant='h6' sx={{ mb: 1 }}>
          866
        </Typography>
        <Typography variant='body2'>Calories burn</Typography>

        <LinearProgress
          value={24}
          variant='determinate'
          sx={{
            mt: 2,
            mb: 7,
            height: 10,
            '&.MuiLinearProgress-colorPrimary': { backgroundColor: 'primary.main' },
            '& .MuiLinearProgress-bar': {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              backgroundColor: 'warning.main'
            }
          }}
        />
      </CardContent>
    </Card>
  )
}

export default EcommerceSalesThisMonth
