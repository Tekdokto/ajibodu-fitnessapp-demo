// ** React Imports
import { forwardRef, Fragment, ReactElement, Ref, useState } from 'react'
import { useRouter } from 'next/router'
// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import Slide, { SlideProps } from '@mui/material/Slide'
import Fab from '@mui/material/Fab'
import Box from '@mui/material/Box'
// ** Icons Imports
import Plus from 'mdi-material-ui/Plus'
import HeadHeart from 'mdi-material-ui/HeadHeart'
import BagPersonalOutline from 'mdi-material-ui/BagPersonalOutline'
import Bike from 'mdi-material-ui/Bike'
import WatchVariant from 'mdi-material-ui/WatchVariant'

import CenterButton from 'src/@core/components/center-button'
import { useTheme } from '@mui/material/styles'

import List from '@mui/material/List'
import MuiAvatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'

// ** Icons Imports
import WeightDialogFullScreen from 'src/views/dashboards/history/FullScreenDialog'

const Transition = forwardRef(function Transition(
  props: SlideProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

let bikeIcon = <Bike />
let heartIcon = <HeadHeart />
let bagIcon = <BagPersonalOutline />
let watchIcon = <WatchVariant />
let weightTitle = <WeightDialogFullScreen />
const items = [
  {
    title: 'Add Blood Pressure', 
    icon: heartIcon
  },
  {
    title: weightTitle, 
    icon: bagIcon 
  },
  {
    title: 'Add Activity', 
    icon: bikeIcon
  },
  {
    title: 'Track My Workout', 
    icon: watchIcon 
  },
  
]
const PlusButtonDialog = () => {
  // ** State
  const theme = useTheme();
  const Router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [color, setColor] = useState<string>(theme.palette.primary.main);
  const [bgColor, setBgColor] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<any | any>(items[1])

  const handleClickOpen: any = () => setOpen(true)

  const handleDialogClose = () => setOpen(false)

  const handleClose = (value: string | any) => {
    setColor('#ffffff')
    setBgColor(theme.palette.primary.main)
    setTimeout(()=>setOpen(false), 500)
    setSelectedValue(value);
    switch(selectedValue){
      case 'Add Weight Measurement':
        Router.push({
          pathname: '/dashboards/crm',
        },undefined, { shallow: true })
        break;
      case 'Add Activity':
        Router.push({
          pathname: '/dashboards/activities',
        },undefined, { shallow: true })
        break;
    }
  }

  return (
    <Fragment>
      <CenterButton className='mui-fixed'>
        <Fab sx={{margin: '0 auto'}} onClick={handleClickOpen} color='primary' size='small' aria-label='scroll back to top'>
            <Plus />
        </Fab>
      </CenterButton>
        <Dialog 
            className='bubble' 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
                "& .MuiDialog-container": {
                  margin: '0 auto',
                justifyContent: "flex-start",
                alignItems: "flex-start"
                }
            }}
            PaperProps={{
              sx: {
              m: 0,
              top: '43%',
              height: '300px',
              padding: '15px',
              borderRadius: '30px',
              }
            }}
            open={open}
            keepMounted
            onClose={handleDialogClose}
            TransitionComponent={Transition}
            aria-labelledby='alert-dialog-slide-title'
            aria-describedby='alert-dialog-slide-description'
            >
        <List sx={{ pt: 0, px: '0 !important' }}>
          {items.map(({title, icon}, index) => (
            <ListItem sx={{marginTop: '15px'}} key={index} disablePadding onClick={() => handleClose(title)}>
              <ListItemButton className='item-buttons'>
                <ListItemAvatar className='item-avatar'>
                  <Box className='item-icon' sx={{color: theme.palette.primary.main}} >
                    {icon}
                  </Box>
                </ListItemAvatar>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
          {/* <ListItem disablePadding onClick={() => handleClose('addAccount')}>
            <ListItemButton>
              <ListItemAvatar>
                <MuiAvatar>
                  <Plus />
                </MuiAvatar>
              </ListItemAvatar>
              <ListItemText primary='Add account' />
            </ListItemButton>
          </ListItem> */}
        </List>
      </Dialog>
      <div className='pointer blurred'></div>
    </Fragment>
  )
}

export default PlusButtonDialog


