// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Import
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabContext from '@mui/lab/TabContext'

// Icons Import
import Fire from 'mdi-material-ui/Fire'
import WatchVariant from 'mdi-material-ui/WatchVariant'

// ** Type Imports
import { useTheme } from '@mui/material/styles'
import { ThemeColor } from 'src/@core/layouts/types'
import EcommerceSalesThisMonth from './TabsChild'
import AnalyticsChart from './AnalyticChart'
import TrendingWorkout from './TrendingWorkouts'

interface StatusObj {
  [ke: string]: {
    text: string
    color: ThemeColor
  }
}
interface TabAvatarType {
  imgWidth: number
  category: string
  imgHeight: number
}
interface TabContentType {
  imgAlt: string
  imgSrc: string
  product: string
  revenue: string
  conversion: string
  conversionDifference?: 'positive' | 'negative'
  status: 'in-stock' | 'coming-soon' | 'out-of-stock'
}
interface TabContentDataType {
  mobile: TabContentType[]
  desktop: TabContentType[]
  console: TabContentType[]
}





const Tabs = () => {
  // ** State
  const [value, setValue] = useState<string>('mobile')

  const theme = useTheme();
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <>
      <TabContext value={value}>
        <TabList
          variant='scrollable'
          scrollButtons='auto'
          onChange={handleChange}
          aria-label='top referral sources tabs'
          sx={{
            mb: 2.5,
            '& .MuiTab-root:not(:last-child)': {
              mr: 6,
             },
             '& .MuiTab-root': { 
              '& .MuiButtonBase-root-MuiTabScrollButton-root': {
                width: '0px !important'
              },
             },
            '& .MuiTabs-indicator': { display: 'none' }
          }}
        >
          <Tab value='mobile' sx={{ p: 0 }} label={<EcommerceSalesThisMonth icon={<Fire sx={{color: theme.palette.primary.main}} />} tabNumber={27} tabTitle='Left Today' />} />
          <Tab value='desktop' sx={{ p: 0 }} label={<EcommerceSalesThisMonth icon={<WatchVariant sx={{color: theme.palette.primary.main}} />} tabNumber={866} tabTitle='Calories Burn' />} />
          <Tab value='console' sx={{ p: 0 }} label={<EcommerceSalesThisMonth icon={<WatchVariant sx={{color: theme.palette.primary.main}} />} tabNumber={7579} tabTitle='Step' />} />
          <Tab value='cheffew' sx={{ p: 0 }} label={<EcommerceSalesThisMonth icon={<Fire sx={{color: theme.palette.primary.main}} />} tabNumber={27} tabTitle='Left Today' />} />
          <Tab value='monk' sx={{ p: 0 }} label={<EcommerceSalesThisMonth  icon={<WatchVariant sx={{color: theme.palette.primary.main}} />} tabNumber={866}  tabTitle='Calories Burn' />} />
          <Tab value='trova' sx={{ p: 0 }} label={<EcommerceSalesThisMonth icon={<Fire sx={{color: theme.palette.primary.main}} />} tabNumber={7579} tabTitle='Step' />} />
          <Tab value='enlew' sx={{ p: 0 }} label={<EcommerceSalesThisMonth icon={<Fire sx={{color: theme.palette.primary.main}} />} tabNumber={27} tabTitle='Left Today' />} />
          
        </TabList>
      </TabContext>

      <AnalyticsChart />
      
      <TrendingWorkout />
    </>
  )
}

export default Tabs
