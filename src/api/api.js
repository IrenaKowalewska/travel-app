import * as axios from 'axios';

export const fetchCountriesAPI = (language) => {
  return axios.get(`database/${language}.json`);
};
