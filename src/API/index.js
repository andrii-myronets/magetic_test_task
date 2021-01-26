import Axios from 'axios';

export const BASE_URL = 'https://run.mocky.io';

export const server = Axios.create({
  baseURL: BASE_URL
});