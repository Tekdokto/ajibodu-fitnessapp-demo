
import { styled } from '@mui/material/styles'
import CustomAvatar from 'src/@core/components/mui/avatar'
import { CustomAvatarProps } from 'src/@core/components/mui/avatar/types'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Tabs from 'src/views/dashboards/activities/Tabs'

const Avatar = styled(CustomAvatar)<CustomAvatarProps>({
  width: '2.375rem',
  height: '2.375rem',
  fontSize: '1.125rem'
})
const ActivityDashboard = () => {
  return (
    <ApexChartWrapper>
      <Box sx={{display: 'flex', alignItems: 'center', 
          justifyContent: 'space-between'}}>
              <Typography variant='h4' >
                My Activity
              </Typography>
          <Box sx={{width: '20px', marginRight: '10px'}}>
            
          <Avatar alt='Flora' src='/images/avatars/6.png' />
          </Box>
        </Box>
        <br />
      <KeenSliderWrapper>
            <Tabs />
      </KeenSliderWrapper>
    </ApexChartWrapper>
  )
}

export default ActivityDashboard
