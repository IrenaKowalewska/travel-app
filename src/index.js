import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/video-react/dist/video-react.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

/*для material ui переопределение дефолтных цветов*/
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e1fafe', //фон главной страницы
      light: '#edfdff', //фон страницы страны
      dark: '#27b28e', //фон footer,header
      // contrastText: '#fff',
    },
    secondary: {
      light: '#ffff', //фон карточки
      main: '#f44336',
      //   dark: '#ba000d',
      //   contrastText: '#000',
    },
    text: {
      primary: '#031e11', //цвет всего текста
      secondary: '#196943', // для виджетов
      // disabled: '#00227b',
      // hint: '#ffc107',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
