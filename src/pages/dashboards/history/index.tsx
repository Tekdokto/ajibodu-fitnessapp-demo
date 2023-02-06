
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import Cached from 'mdi-material-ui/Cached'
import Weight from 'src/views/dashboards/history/Weight'
import BmiControl from 'src/views/dashboards/history/BmiControl'
import SleepChart from 'src/views/dashboards/history/SleepChart'

const HistoryDashboard = () => {
  const todayDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", day:"numeric"});
  
    return (
      <ApexChartWrapper>
        <Box sx={{display: 'flex', alignItems: 'center', 
          justifyContent: 'space-between'}}>
          
            <Typography variant='h4' >
              History
            </Typography>
          <Box sx={{width: '20px', marginRight: '10px'}}>
            <Cached />
          </Box>
        </Box>
        <br />
        <Box>
          <Typography variant='h4'>
            {todayDate}
          </Typography>
        </Box>
        <br />
        <Weight />
        <br />
        <BmiControl />
        <br />
        <SleepChart />
        <br />
    </ApexChartWrapper>
  )
}

export default HistoryDashboard
