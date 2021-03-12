import { fetchCountriesAPI } from '../../api/api';
import { initializeCountryPage } from './countryReducer';

const INITIALIZE_HOME_PAGE = 'homeReducer/INITIALIZE_HOME_PAGE';
const IS_LOADING = 'homeReducer/IS_LOADING';

const initialState = {
  allCountriesInfo: [],
  lang: 'ru',
  isLoading: false,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_HOME_PAGE:
      return { ...state, ...action.payload };
    case IS_LOADING:
      return { ...state, isLoading: action.payload };

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
      url: item.url
    }));
    dispatch(initializeHomePage({ allCountriesInfo }));
    dispatch(initializeCountryPage({ countryInfo }));
  } catch (error) {
    console.error(error);
  }

  dispatch(isLoading(false));
};

export default homeReducer;
