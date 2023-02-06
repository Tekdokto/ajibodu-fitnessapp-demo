import { SyntheticEvent, useState } from 'react'
// ** MUI Imports
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabContext from '@mui/lab/TabContext'

const ScrollDiv = styled('div')(({theme}) => ({
  overFlowY: 'hidden',
  overFlowX: 'scroll',
  maxWidth: '600px !important'
}))
// ** Third Party Imports
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts'


interface Props {
  direction: 'ltr' | 'rtl'
}

const data = [
  { pv: 200, name: 't' },
  { pv: 150, name: 'w' },
  { pv: 300, name: 't' },
  { pv: 100, name: 'f' },
  { pv: 170, name: 's' },
  { pv: 70, name: 's' },
  { pv: 210, name: 'm' }
]

const CustomTooltip = (props: TooltipProps<any, any>) => {
  // ** Props
  const { active, payload } = props
 
  if (active && payload) {
    return (
      <div className='recharts-custom-tooltip'>
        <span>{`${payload[0].value}%`}</span>
      </div>
    )
  }

  return null
}

const RechartsLineChart = ({ direction }: Props) => {
  // ** State
  const [value, setValue] = useState<string>('mobile')
  const theme = useTheme();
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  const Chart = () => {
    return (
      <ResponsiveContainer>
        <LineChart height={300} data={data} style={{ direction }} margin={{ left: -20 }}>
          {/* <CartesianGrid /> */}
          <XAxis dataKey='name' reversed={direction === 'rtl'} />
          {/* <YAxis orientation={direction === 'rtl' ? 'right' : 'left'} /> */}
          <Tooltip content={CustomTooltip} />
          <Line dataKey='pv' stroke={theme.palette.success.main} strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    )
  }
  return (
    <Card >
      
      <CardContent sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant='h6'>Weight</Typography>
      </CardContent>
      <CardContent >
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 150}} >
          <Typography variant='h2' sx={{ mr: 5 }}>
            52,3kg
          </Typography>
          <Chart />
        </Box>
      </CardContent>
    </Card>
  )
}

export default RechartsLineChart
