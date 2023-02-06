// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import Zoom from '@mui/material/Zoom'
import { styled } from '@mui/material/styles'
import useScrollTrigger from '@mui/material/useScrollTrigger'

interface CenterButtonProps {
  className?: string
  children: ReactNode,
}

const CenterButtonStyled = styled('div')(({ theme }) => ({
  zIndex: 11,
  left: '0 auto',
  position: 'fixed',
  alignSelf: 'center',
  right: '45%',
  bottom: theme.spacing(10),
  margin: '0 auto !important',
}))

const CenterButton = (props: CenterButtonProps) => {
  // ** Props
  const { children, className } = props

  // ** init trigger
  const trigger = useScrollTrigger({
    threshold: 400,
    disableHysteresis: true
  })

  const handleClick = () => {

  }

  return (
    // <Zoom in={trigger}>
      <CenterButtonStyled className={className} onClick={handleClick} role='presentation'>
        {children}
      </CenterButtonStyled>
    // </Zoom>
  )
}

export default CenterButton
