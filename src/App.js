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
import {
  initializeApp,
  setCurrentLanguage,
} from './redux/reducers/homeReducer';
import { Box } from '@material-ui/core';

export const LangContext = React.createContext();

function App() {
  const dispatch = useDispatch();

  const { allCountriesInfo, lang, isLoading, countryInfo,authors,notFoundMessage } = useSelector(
    (state) => ({
      allCountriesInfo: state.homeReducer.filteredAllCountriesInfo,
      lang: state.homeReducer.lang,
      isLoading: state.homeReducer.isLoading,
      authors: state.homeReducer.authors,
      notFoundMessage: state.homeReducer.notFoundMessage,
      countryInfo: state.countryReducer.countryInfo,
      wether: state.countryReducer.countryInfo,
    }),
  );
 
  React.useEffect(() => {
    dispatch(initializeApp(lang));
  }, [dispatch, lang]);

  React.useEffect(() => {
    if (window.localStorage.getItem('lang') !== null) {
      dispatch(setCurrentLanguage(localStorage.getItem('lang')));
    } else {
      window.localStorage.setItem('lang', 'ru');
    }
  }, [dispatch]);
  React.useEffect(() => {
    window.localStorage.setItem('lang', lang);
  }, [dispatch, lang]);

  return (
    <LangContext.Provider value={lang}>
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
        ) : (
          <div>
            <CssBaseline />
            <Header />
            <Switch>
              <Route
                path="/"
                exact
                render={() => <Home allCountriesInfo={allCountriesInfo} />}
              />
              {countryInfo &&
                countryInfo.map((countryItem) => (
                  <Route
                    key={countryItem.url}
                    path={`/${countryItem.url}`}
                    exact
                    render={() => (
                      <Country
                        url={countryItem.url}
                        country={countryItem.country}
                        capital={countryItem.capital}
                        countryImg={countryItem.countryImg}
                        population={countryItem.population}
                        religion={countryItem.religion}
                        language={countryItem.language}
                        currency={countryItem.currency}
                        lat={countryItem.lat}
                        lng={countryItem.lng}
                        id={countryItem.id}
                        currencyCode={countryItem.currencyCode}
                        gallery={countryItem.gallery}
                        timeZone={countryItem.timeZone}
                      />
                    )}
                  />
                ))}
              <Route path="*"  render={() => <NotFound notFoundMessage={notFoundMessage}/>} />
            </Switch>
            <Footer authors={authors}/>
          </div>
        )}
      </div>
    </LangContext.Provider>
  );
}

export default App;
