// ** MUI Imports

// ** Icons Imports
import CogOutline from 'mdi-material-ui/CogOutline'
import CardStatisticsVertical from './card-stats-vertical'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'


const TwoCards = () => {
  return (
    <CardContent sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
        <CardStatisticsVertical
          stats='21'
          color='success'
          title='Age'
          icon={<CogOutline />}
          chipText='Last Six Month'
        />
        <CardStatisticsVertical
          stats='173'
          color='success'
          title='Height'
          icon={<CogOutline />}
          chipText='Last Six Month'
        />
    </CardContent>
  )
}

export default TwoCards
