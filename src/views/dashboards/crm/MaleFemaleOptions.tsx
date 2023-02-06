// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Import
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import Table from '@mui/material/Table'
import TabPanel from '@mui/lab/TabPanel'
import Avatar from '@mui/material/Avatar'
import TabContext from '@mui/lab/TabContext'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

// ** Icons Imports
import Plus from 'mdi-material-ui/Plus'
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Type Imports
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

interface StatusObj {
  [ke: string]: {
    text: string
    color: ThemeColor
  }
}
interface TabContentType {
  status: string
  parameter: string
  conversion: string
  totalRevenue: string
  conversionDifference?: 'positive' | 'negative'
}

const MaleFemaleOptions = () => {
  // ** State
  const [value, setValue] = useState<string>('male')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const RenderTabCard = ({ category }: { category: string }) => (
    <Card
      sx={{
        width: '100%',
        height: 'inherit',
        padding: '20px',
        border: theme =>
          value === category ? `1px solid ${theme.palette.success.main}` : `1px solid transparent`
      }}
    >
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant='h4' sx={{ fontWeight: 600, color: 'text.primary', textTransform: 'capitalize' }}>
          {category}
        </Typography>
      </Box>
    </Card>
  )

  return (
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='top referral sources tabs'
          sx={{
            mb: 2.5,
            px: 5,
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between !important',
            '& .MuiTabs-indicator': { display: 'none' },
            '& .MuiTabs-flexContainer': {
              display: 'flex',
              justifyContent: 'space-between',
              // flexWrap: 'wrap !important'
            }
          }}
        >
          <Tab value='male' sx={{ p: 0, width: '37%', minWidth: '120px' }} label={<RenderTabCard category='male' />} />
          <Tab value='female' sx={{ p: 0, width: '37%', minWidth: '120px'}} label={<RenderTabCard category='female' />} />
         
        </TabList>
      </TabContext>
  )
}

export default MaleFemaleOptions
