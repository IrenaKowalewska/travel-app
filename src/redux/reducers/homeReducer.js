import { fetchCountriesAPI } from '../../api/api';
import { initializeCountryPage } from './countryReducer';

const INITIALIZE_HOME_PAGE = 'homeReducer/INITIALIZE_HOME_PAGE';
const IS_LOADING = 'homeReducer/IS_LOADING';
const SEARCH_FILTER = 'homeReducer/SEARCH_FILTER';
const RESET_FILTER = 'homeReducer/RESET_FILTER';
const CURRENT_LANGUAGE = 'homeReducer/CURRENT_LANGUAGE';
const AUTHORS = 'homeReducer/AUTHORS';
const NOT_FOUND_MESSAGE = 'homeReducer/NOT_FOUND_MESSAGE';

const initialState = {
  allCountriesInfo: [],
  lang: 'ru',
  isLoading: false,
  filteredAllCountriesInfo: [],
  authors: [],
  notFoundMessage: '',
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_HOME_PAGE:
      return { ...state, ...action.payload };
    case IS_LOADING:
      return { ...state, isLoading: action.payload };
    case SEARCH_FILTER:
      const newFilteredAllCountriesInfo = state.filteredAllCountriesInfo.filter(
        (item) =>
          item.country.toLocaleLowerCase().indexOf(action.payload) === -1
            ? false
            : true,
      );
      return {
        ...state,
        filteredAllCountriesInfo: newFilteredAllCountriesInfo,
      };
    case RESET_FILTER:
      return {
        ...state,
        filteredAllCountriesInfo: [...state.allCountriesInfo],
      };
    case CURRENT_LANGUAGE:
      return { ...state, lang: action.payload };
    case AUTHORS:
      return { ...state, authors: action.payload };
    case NOT_FOUND_MESSAGE:
      return { ...state, notFoundMessage: action.payload };

    default:
      return state;
  }
};

export const initializeHomePage = (payload) => ({
  type: INITIALIZE_HOME_PAGE,
  payload,
});
export const isLoading = (bool) => ({
  type: IS_LOADING,
  payload: bool,
});
export const searchFilter = (text) => ({
  type: SEARCH_FILTER,
  payload: text,
});
export const resetFilter = () => ({
  type: RESET_FILTER,
});
export const setCurrentLanguage = (lang) => ({
  type: CURRENT_LANGUAGE,
  payload: lang,
});
export const setAuthors = (authors) => ({
  type: AUTHORS,
  payload: authors,
});
export const setNotFoundMessage = (message) => ({
  type: NOT_FOUND_MESSAGE,
  payload: message,
});

export const initializeApp = (lang) => async (dispatch) => {
  dispatch(isLoading(true));
  try {
    const response = await fetchCountriesAPI(lang);
    const allCountriesInfo = response.data.countries.map((item) => ({
      country: item.country,
      capital: item.capital,
      countryImg: item.countryImg,
      url: item.url,
    }));
    const countryInfo = response.data.countries.map((item) => ({
      country: item.country,
      capital: item.capital,
      countryImg: item.countryImg,
      population: item.population,
      religion: item.religion,
      language: item.language,
      currency: item.currency,
      url: item.url,
      lat: item.lat,
      lng: item.lng,
      id: item.countryId,
      currencyCode: item.currencyCode,
      gallery: item.gallery,
      timeZone: item.timeZone,

    }));
    dispatch(
      initializeHomePage({
        allCountriesInfo,
        filteredAllCountriesInfo: allCountriesInfo,
      }),
    );
    dispatch(initializeCountryPage({ countryInfo }));
    dispatch(setAuthors(response.data.authors));
    dispatch(setNotFoundMessage(response.data.notFound));
  } catch (error) {
    console.error(error);
  }

  dispatch(isLoading(false));
};

export default homeReducer;
