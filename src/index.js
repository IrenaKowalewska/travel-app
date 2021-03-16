import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import store from './redux/store';
import { Provider } from 'react-redux';

import '../node_modules/video-react/dist/video-react.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

/*override the default colors material ui*/
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e1fafe', //background Home page
      light: '#edfdff', //background Country page
      dark: '#77cfb8', //background footer,header
    },
    secondary: {
      light: '#ffff', //background Card
      main: '#196943', // widgets color
    },
    text: {
      primary: '#031e11', //test color
      secondary: '#196943', // widgets color
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ScrollToTop />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
