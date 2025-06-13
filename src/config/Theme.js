import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#1b2055' },
    secondary: { main: '#1A71F6'},
    background: { default: '#ffffff' },
  },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
});