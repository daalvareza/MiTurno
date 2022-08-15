import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#1F9547',
      contrastText: '#fff',
    },
    secondary: {
      main: '#3F3F41',
      contrastText: '#fff',
    },
    search: {
      main: '#EFEFEF',
      contrastText: '#A7A7A7',
    }
  },
});

export default theme;