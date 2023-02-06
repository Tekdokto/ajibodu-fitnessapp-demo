// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'

// ** Types Imports
import { CardStatsVerticalProps } from 'src/@core/components/card-statistics/types'

const CardStatsVertical = (props: CardStatsVerticalProps) => {
  // ** Props
  const { title, color, icon, stats, trend, chipText } = props

  const TrendIcon = trend === 'positive' ? ChevronUp : ChevronDown

  return (
    <Card sx={{ width: '35%', height: '35%', minWidth: '120px' }}>
      <CardContent sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Box sx={{ mb: 6, width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='h6'>
              {title}
            </Typography>
          </Box>
          <Box  >
            {icon}
          </Box>
        </Box>
        <Typography variant='h2' sx={{ mb: 1, margin: '0 auto' }}>
          {stats}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardStatsVertical

CardStatsVertical.defaultProps = {
  color: 'primary',
  trend: 'positive'
}
