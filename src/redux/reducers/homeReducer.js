import { fetchCountriesAPI } from '../../api/api';

const INITIALIZE_HOME_PAGE = 'homeReducer/INITIALIZE_HOME_PAGE';
const IS_LOADING = 'homeReducer/IS_LOADING';
const SEARCH_FILTER = 'homeReducer/SEARCH_FILTER';
const RESET_FILTER = 'homeReducer/RESET_FILTER';

const initialState = {
  allCountriesInfo: [],
  lang: 'ru',
  isLoading: false,
  filteredAllCountriesInfo: [],
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
    dispatch(
      initializeHomePage({
        allCountriesInfo,
        filteredAllCountriesInfo: allCountriesInfo,
      }),
    );
  } catch (error) {
    console.error(error);
  }

  dispatch(isLoading(false));
};

export default homeReducer;
