// ** Theme Type Import
import { Theme } from '@mui/material/styles'

const Typography = (theme: Theme) => {
  return {
    h1: {
      fontWeight: 700,
      fontFamily: 'Gilroy-Bold, sans-serif !important',
      letterSpacing: '-1.5px',
      color: theme.palette.text.primary
    },
    h2: {
      fontWeight: 700,
      fontFamily: 'Gilroy-Bold, sans-serif !important',
      letterSpacing: '-0.5px',
      color: theme.palette.text.primary
    },
    h3: {
      fontWeight: 700,
      fontFamily: 'Gilroy-Bold, sans-serif !important',
      letterSpacing: 0,
      color: theme.palette.text.primary
    },
    h4: {
      fontWeight: 700,
      fontFamily: 'Gilroy-Bold, sans-serif !important',
      letterSpacing: '0.25px',
      color: theme.palette.text.primary
    },
    h5: {
      fontWeight: 700,
      fontFamily: 'Gilroy-Bold, sans-serif !important',
      letterSpacing: 0,
      color: theme.palette.text.primary
    },
    h6: {
      fontWeight: 700,
      letterSpacing: '0.15px',
      fontFamily: 'Gilroy-Bold, sans-serif !important',
      color: theme.palette.text.primary
    },
    subtitle1: {
      fontWeight: 700,
      letterSpacing: '0.15px',
      fontFamily: 'Gilroy-Bold, sans-serif !important',
      color: theme.palette.text.primary
    },
    subtitle2: {
      fontWeight: 700,
      letterSpacing: '0.1px',
      color: theme.palette.text.secondary
    },
    body1: {
      fontWeight: 700,
      letterSpacing: '0.15px',
      fontFamily: 'Gilroy-Bold, sans-serif !important',
      color: theme.palette.text.primary
    },
    body2: {
      fontWeight: 700,
      lineHeight: 1.429,
      letterSpacing: '0.15px',
      fontFamily: 'Gilroy-Bold, sans-serif !important',
      color: theme.palette.text.secondary
    },
    button: {
      fontWeight: 700,
      letterSpacing: '0.4px',
      fontFamily: 'Gilroy-Bold, sans-serif !important',
      color: theme.palette.text.primary
    },
    caption: {
      fontWeight: 700,
      lineHeight: 1.25,
      letterSpacing: '0.4px',
      fontFamily: 'Gilroy-Bold, sans-serif !important',
      color: theme.palette.text.secondary
    },
    overline: {
      fontWeight: 700,
      letterSpacing: '1px',
      color: theme.palette.text.secondary
    }
  }
}

export default Typography
