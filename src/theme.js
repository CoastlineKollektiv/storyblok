import { createTheme } from '@mui/material';
import { monoFont, normFont } from './constants';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#000' },
    colors: {
      footerBackground: '#F3F1E9',
      dotColor: '#333333'
    }
  },
  cssVariables: true,
  typography: {
    fontFamily: [normFont.style.fontFamily]
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
          margin: 0
        }
        a {
          font-weight: bold;
          text-decoration: none;
        }
      `
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: monoFont.style.fontFamily
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1.25
        }
      }
    }
  }
});

export default theme;
