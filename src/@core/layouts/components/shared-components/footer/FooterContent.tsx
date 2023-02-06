// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { useRouter } from 'next/router'
import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import HomeVariant from 'mdi-material-ui/HomeVariant';
import ChatOutline from 'mdi-material-ui/ChatOutline';
import AccountOutline from 'mdi-material-ui/AccountOutline';
import Poll from 'mdi-material-ui/Poll';
import useMediaQuery from '@mui/material/useMediaQuery'

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const Router = useRouter();

  const handleHistory = () => {
    Router.push({
      pathname: '/dashboards/history',
    },undefined, { shallow: true })
  }
  const handleHome = () => {
    Router.push({
      pathname: '/dashboards/activities',
    },undefined, { shallow: true })
  }
  return (
    <Box sx={{ 
      display: 'flex', flexWrap: 'nowrap', 
      alignItems: 'center', justifyContent: 'space-between' }}>
        <Box component='span' sx={{ display: 'flex', alignItems: 'center', 
          justifyContent: 'space-between', width: '35%' }}>
          <HomeVariant onClick={handleHome} sx={{ color: 'primary.main', cursor: 'pointer'}} />
          <Poll onClick={handleHistory} sx={{ cursor: 'pointer'}} />
        </Box>
        <Box component='span' sx={{ 
          display: 'flex', alignItems: 'center', 
          justifyContent: 'space-between', width: '35%' }}>
          <ChatOutline sx={{ cursor: 'pointer'}} />
          <AccountOutline sx={{ cursor: 'pointer'}} />
        </Box>
    </Box>
  )
}

export default FooterContent

