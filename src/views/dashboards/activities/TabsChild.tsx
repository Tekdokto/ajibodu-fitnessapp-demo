// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import LinearProgress from '@mui/material/LinearProgress'
// ** Icons Imports
import TabletAndroid from 'mdi-material-ui/TabletAndroid'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

interface TabProps {
  tabTitle: string,
  tabNumber: number,
  icon: any
}
const TabsChild = (props: TabProps) => {
  // ** Hook
  const { tabTitle, tabNumber, icon } = props;
  const theme = useTheme();

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
    <Card sx={{ maxWidth: '200px', minWidth: '200px', width: '100%', mb: 2.5, display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center' }}
    >
      <Box
        sx={{ ml: 3.5, height: 40, width: 40, borderRadius: '6px' }}
      >
        {icon}
      </Box>

      <CardContent sx={{ pb: '0 !important', width: '150px', textAlign: 'left' }}>
        <Typography variant='h6' sx={{ mb: 1, textTransform: 'capitalize' }}>
          {tabTitle === 'Left Today'? `${tabNumber}min`: tabNumber}
        </Typography>
        <Typography sx={{textTransform: 'capitalize'}} variant='body2'>{tabTitle}</Typography>

        <LinearProgress
          value={24}
          variant='determinate'
          sx={{
            mt: 2,
            mb: 7,
            height: 7,
            '&.MuiLinearProgress-colorPrimary': { backgroundColor: '#ccc' },
            '& .MuiLinearProgress-bar': {
              borderTopRightRadius: 0,
              width: '300px',
              borderBottomRightRadius: 0,
              backgroundColor: 'success.main'
            }
          }}
        />
      </CardContent>
    </Card>
  )
}

export default TabsChild
