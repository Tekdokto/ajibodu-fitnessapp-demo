// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import StatCard from '../crm/StatCard'
import MaleFemaleOptions from '../crm/MaleFemaleOptions'
import TwoCards from '../crm/TwoCards'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { CardContent, Typography } from '@mui/material'
import ChevronLeft from 'mdi-material-ui/ChevronLeft'
import Cached from 'mdi-material-ui/Cached'
import ZodiacCancer from 'mdi-material-ui/ZodiacCancer'


const WeightWrapper = styled(ApexChartWrapper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: '10rem'
}))

const WeightDialogFullScreen = () => {
  // ** State
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <div>
      <div onClick={handleClickOpen}>
        Add Weight Measurement
      </div>
      <Dialog fullScreen onClose={handleClose} 
        aria-labelledby='full-screen-dialog-title' open={open}>
        <Box sx={{display: 'flex', alignItems: 'center', 
          justifyContent: 'space-between'}}>
          <CardContent sx={{display: 'flex', alignItems: 'center'}}>
            <Box onClick={handleClose} >
            <ChevronLeft sx={{ fontSize: '50px', width: '50px', 
              marginRight: '20px', cursor: 'pointer'}} />
            </Box>
              <Typography variant='h4' >
                Add Weight
              </Typography>
            </CardContent>
          <Box sx={{width: '20px', marginRight: '20px'}}>
            <ZodiacCancer />
          </Box>
        </Box>
      <WeightWrapper>
        <StatCard />
      <CardContent sx={{height: '110px'}}>
        <MaleFemaleOptions />
      </CardContent>
        <CardContent sx={{height: '200px'}}>
          <TwoCards />
        </CardContent>
          <DialogActions>
            <Button onClick={handleClose} sx={{ 
              width: '24rem', minWidth: '200px', margin: '0 auto', 
              textTransform: 'capitalize' }} variant='contained' >
            save
          </Button>
          </DialogActions>
        </WeightWrapper>
      </Dialog>
    </div>
  )
}

export default WeightDialogFullScreen
