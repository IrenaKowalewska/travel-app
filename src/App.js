import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Country from './pages/Country';
import { useDispatch, useSelector } from 'react-redux';
import { initializeApp } from './redux/reducers/homeReducer';
import { Box } from '@material-ui/core';

function App() {
  const dispatch = useDispatch();
  const { allCountriesInfo, lang, isLoading } = useSelector((state) => ({
    allCountriesInfo: state.homeReducer.allCountriesInfo,
    lang: state.homeReducer.lang,
    isLoading: state.homeReducer.isLoading,
  }));
  React.useEffect(() => {
    dispatch(initializeApp(lang));
  }, [dispatch, lang]);
  return (
    <div className="App">
      
      {isLoading ? (
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress color="secondary" />
        </Box>
      ) : (<div>
        <CssBaseline />
      <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Home allCountriesInfo={allCountriesInfo} />}
          />
          <Route path="/country" exact component={Country} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer /></div>
      )}
      
    </div>
  );
}

export default App;
