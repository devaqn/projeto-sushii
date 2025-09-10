import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';  // Importando ThemeProvider
import App from './App';

// Definindo o tema básico
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',  // Cor principal do tema
    },
    secondary: {
      main: '#dc004e',  // Cor secundária do tema
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>  {/* Envolvendo o App com ThemeProvider */}
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
