// ** MUI Imports
import { styled, Theme } from '@mui/material/styles'

// ** Styled Component Import


import CustomAvatar from 'src/@core/components/mui/avatar'
import { CustomAvatarProps } from 'src/@core/components/mui/avatar/types'
import Box from '@mui/material/Box'
import { CardContent, Typography } from '@mui/material'
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Tabs from 'src/views/dashboards/activities/Tabs'
// ** Styled Avatar component
const Avatar = styled(CustomAvatar)<CustomAvatarProps>({
  width: '2.375rem',
  height: '2.375rem',
  fontSize: '1.125rem'
})
const EcommerceDashboard = () => {
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
        {/* <Grid container spacing={6} className='match-height'> */}
            <Tabs />
        {/* </Grid> */}
      </KeenSliderWrapper>
    </ApexChartWrapper>
  )
}

export default EcommerceDashboard
